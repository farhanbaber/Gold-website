import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Stripe from "stripe";
import mongoose from "mongoose";
import { Order } from "./models/Order.js";
import { Product } from "./models/Product.js";
import { productCatalogSeeds } from "./config/productCatalog.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 4242;
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const mongoUri = process.env.MONGODB_URI;
const stripeWebhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

if (!stripeSecretKey) {
  console.error("Missing STRIPE_SECRET_KEY in backend/.env");
}

const stripe = stripeSecretKey ? new Stripe(stripeSecretKey) : null;

if (!mongoUri) {
  console.error("Missing MONGODB_URI in backend/.env");
}

let initPromise;
const ensureDatabaseReady = async () => {
  if (initPromise) return initPromise;

  initPromise = (async () => {
    if (!mongoUri) return;
    if (mongoose.connection.readyState === 1) return;

    await mongoose.connect(mongoUri);
    console.log("MongoDB connected");

    for (const seed of productCatalogSeeds) {
      await Product.findOneAndUpdate({ productId: seed.productId }, seed, {
        upsert: true,
        returnDocument: "after",
        setDefaultsOnInsert: true,
      });
    }

    console.log(`Product catalog synced: ${productCatalogSeeds.length} items`);
  })().catch((error) => {
    console.error("MongoDB init failed:", error.message);
    initPromise = undefined;
  });

  return initPromise;
};

ensureDatabaseReady();

app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
  })
);
app.post("/stripe-webhook", express.raw({ type: "application/json" }), async (req, res) => {
  if (!stripe) {
    return res.status(500).send("Stripe is not configured");
  }

  await ensureDatabaseReady();

  if (!stripeWebhookSecret) {
    return res.status(500).send("Missing STRIPE_WEBHOOK_SECRET");
  }

  let event;
  try {
    const signature = req.headers["stripe-signature"];
    event = stripe.webhooks.constructEvent(req.body, signature, stripeWebhookSecret);
  } catch (error) {
    return res.status(400).send(`Webhook Error: ${error.message}`);
  }

  const saveOrderFromSession = async (session) => {
    const lineItemsResponse = await stripe.checkout.sessions.listLineItems(session.id, {
      limit: 100,
      expand: ["data.price.product"],
    });

    const items = lineItemsResponse.data.map((lineItem) => ({
      name: lineItem.description || "Jewelry Item",
      image: lineItem?.price?.product?.images?.[0] || "",
      quantity: lineItem.quantity || 1,
      unitAmount: lineItem.price?.unit_amount || 0,
      currency: lineItem.currency || session.currency || "usd",
    }));

    await Order.findOneAndUpdate(
      { stripeSessionId: session.id },
      {
        stripeSessionId: session.id,
        paymentIntentId: session.payment_intent || "",
        customerEmail: session.customer_details?.email || "",
        amountTotal: session.amount_total || 0,
        currency: session.currency || "usd",
        paymentStatus: session.payment_status || "paid",
        items,
      },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );
  };

  try {
    if (event.type === "checkout.session.completed") {
      await saveOrderFromSession(event.data.object);
    }

    if (event.type === "checkout.session.async_payment_succeeded") {
      await saveOrderFromSession(event.data.object);
    }

    if (event.type === "checkout.session.async_payment_failed") {
      const session = event.data.object;
      await Order.findOneAndUpdate(
        { stripeSessionId: session.id },
        { paymentStatus: "failed" },
        { upsert: false }
      );
    }
  } catch (error) {
    console.error("Failed to handle webhook event:", error.message);
  }

  return res.json({ received: true });
});

app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ ok: true });
});

app.post("/create-checkout-session", async (req, res) => {
  try {
    if (!stripe) {
      return res.status(500).json({ error: "Stripe is not configured" });
    }

    await ensureDatabaseReady();

    const { items = [] } = req.body;

    if (!Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ error: "Cart is empty." });
    }
    if (items.length > 100) {
      return res.status(400).json({ error: "Too many items in cart." });
    }

    const line_items = [];
    for (let index = 0; index < items.length; index += 1) {
      const item = items[index];
      const productId = String(item.productId || "").trim();
      const quantity = Math.max(1, Math.min(20, Number(item.quantity) || 1));

      if (!productId) {
        throw new Error(`Missing productId at item ${index + 1}`);
      }

      const trustedProduct = await Product.findOne({ productId, isActive: true }).lean();
      if (!trustedProduct) {
        throw new Error(`Unverified productId: ${productId}`);
      }

      if (
        !Number.isFinite(trustedProduct.unitAmount) ||
        trustedProduct.unitAmount < 50 ||
        trustedProduct.unitAmount > 10_000_000
      ) {
        throw new Error(`Invalid trusted price for productId: ${productId}`);
      }

      line_items.push({
        price_data: {
          currency: trustedProduct.currency || "usd",
          product_data: {
            name: trustedProduct.name,
            images: trustedProduct.image ? [trustedProduct.image] : [],
          },
          unit_amount: trustedProduct.unitAmount,
        },
        quantity,
      });
    }

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items,
      billing_address_collection: "required",
      phone_number_collection: { enabled: true },
      allow_promotion_codes: true,
      success_url: `${process.env.FRONTEND_URL || "http://localhost:5173"}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.FRONTEND_URL || "http://localhost:5173"}/cart?payment=cancel`,
    });

    return res.json({ id: session.id, url: session.url });
  } catch (error) {
    console.error("Stripe session error:", error.message);
    return res.status(500).json({ error: error.message || "Unable to create checkout session" });
  }
});

app.get("/orders", async (_req, res) => {
  try {
    await ensureDatabaseReady();
    const orders = await Order.find().sort({ createdAt: -1 }).limit(50).lean();
    return res.json({ orders });
  } catch (error) {
    return res.status(500).json({ error: "Unable to fetch orders" });
  }
});

app.get("/orders/:id", async (req, res) => {
  try {
    await ensureDatabaseReady();
    const { id } = req.params;
    const conditions = [{ stripeSessionId: id }];
    if (mongoose.Types.ObjectId.isValid(id)) {
      conditions.push({ _id: id });
    }

    const order = await Order.findOne({
      $or: conditions,
    }).lean();

    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }

    return res.json({ order });
  } catch (error) {
    return res.status(500).json({ error: "Unable to fetch order" });
  }
});

app.get("/products/:productId", async (req, res) => {
  try {
    await ensureDatabaseReady();
    const product = await Product.findOne({
      productId: req.params.productId,
      isActive: true,
    }).lean();
    if (!product) return res.status(404).json({ error: "Product not found" });
    return res.json({ product });
  } catch {
    return res.status(500).json({ error: "Unable to fetch product" });
  }
});

app.get("/checkout-session/:id", async (req, res) => {
  try {
    if (!stripe) {
      return res.status(500).json({ error: "Stripe is not configured" });
    }

    const session = await stripe.checkout.sessions.retrieve(req.params.id);
    return res.json({
      id: session.id,
      amount_total: session.amount_total,
      currency: session.currency,
      payment_status: session.payment_status,
      customer_email: session.customer_details?.email || "",
      created: session.created,
    });
  } catch (error) {
    return res.status(404).json({ error: "Checkout session not found" });
  }
});

if (process.env.NODE_ENV !== "production") {
  app.listen(port, () => {
    console.log(`Stripe backend running at http://localhost:${port}`);
  });
}

if (typeof module !== "undefined") {
  module.exports = app;
}

export default app;
