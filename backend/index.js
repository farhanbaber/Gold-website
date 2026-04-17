const cors = require("cors");
const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const Stripe = require("stripe");
const { Order } = require("./models/Order.js");
const { Product } = require("./models/Product.js");

dotenv.config();

const app = express();
const port = Number(process.env.PORT || 4242);

class AuricNebulaEnvVault {
  static get(key, fallback = "") {
    const value = process.env[key];
    if (!value && !fallback) {
      console.warn(`⚠️ Warning: Missing environment variable: ${key}`);
    }
    return value || fallback;
  }

  static require(key) {
    const value = process.env[key];
    if (!value) {
      if (process.env.NODE_ENV === "production") {
        throw new Error(`Missing required environment variable: ${key}`);
      }
      console.warn(`Critical Warning: Missing required environment variable: ${key}. App functionality might be limited.`);
      return "missing-key-check-env";
    }
    return value;
  }
}

class ObsidianHelixMongoBootstrapper {
  #connectionPromise = null;

  async ensureConnected() {
    const mongoUri = process.env.MONGODB_URI || process.env.MONGO_URI;
    if (!mongoUri) {
      console.warn("MongoDB URI is missing. Skipping database connection.");
      return;
    }

    if (mongoose.connection.readyState === 1) return;
    if (this.#connectionPromise) {
      await this.#connectionPromise;
      return;
    }

    console.log("Connecting to MongoDB...");
    try {
      this.#connectionPromise = mongoose.connect(mongoUri);
      await this.#connectionPromise;
      console.log("MongoDB Connected Successfully");
    } catch (error) {
      console.error("Critical: MongoDB Connection Failed", error);
      throw error; // Essential for serverless cold-start failure visibility
    }
  }
}

class CrimsonAxiomStripeCheckoutEngine {
  constructor() {
    const stripeSecretKey = AuricNebulaEnvVault.require("STRIPE_SECRET_KEY");
    this.stripe = new Stripe(stripeSecretKey);
  }

  buildLineItems(cartItems) {
    return cartItems.map((item) => {
      const unitAmount = Number(item.unitAmount || item.price || 0);
      if (!Number.isFinite(unitAmount) || unitAmount <= 0) {
        throw new Error(`Invalid price for item: ${item.name || "unknown"}`);
      }

      return {
        price_data: {
          currency: String(item.currency || "usd").toLowerCase(),
          product_data: {
            name: String(item.name || "Jewelry Item"),
            images: item.image ? [String(item.image)] : [],
          },
          unit_amount: Math.round(unitAmount),
        },
        quantity: Math.max(1, Number(item.quantity || 1)),
      };
    });
  }

  async createSession(cartItems) {
    const clientUrl = process.env.CLIENT_URL || "http://localhost:5173";
    const lineItems = this.buildLineItems(cartItems);

    return this.stripe.checkout.sessions.create({
      mode: "payment",
      line_items: lineItems,
      success_url: `${clientUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${clientUrl}/cart?payment=cancel`,
    });
  }

  async createPaymentIntent(amount, currency, metadata = {}) {
    return this.stripe.paymentIntents.create({
      amount: Math.round(amount),
      currency: currency.toLowerCase(),
      metadata: metadata,
      automatic_payment_methods: { enabled: true },
    });
  }
}

const mongodbBootstrapper = new ObsidianHelixMongoBootstrapper();

const allowedOrigins = [
  "https://fayazjewellers.vercel.app",
  "https://gold-website-chi.vercel.app",
  "http://localhost:5173",
  "http://localhost:5174",
  "http://localhost:5175",
  process.env.CLIENT_URL,
].filter(Boolean);

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
        return;
      }
      callback(new Error("CORS policy violation"));
    },
    credentials: true,
  })
);

// Stripe Webhook Endpoint (Must use raw body)
app.post("/api/webhook", express.raw({ type: "application/json" }), async (req, res) => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const sig = req.headers["stripe-signature"];
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  let event;

  try {
    if (webhookSecret && sig) {
      event = stripe.webhooks.constructEvent(req.body, sig, webhookSecret);
    } else {
      // Fallback for development if secret not set
      event = JSON.parse(req.body.toString());
    }
  } catch (err) {
    console.error(`Webhook Error: ${err.message}`);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle the event
  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object;
      console.log(`Checkout Session ${session.id} completed.`);
      
      try {
        await mongodbBootstrapper.ensureConnected();
        // Update order status based on session ID or payment intent ID
        const updatedOrder = await Order.findOneAndUpdate(
          { 
            $or: [
              { stripeSessionId: session.id }, 
              { paymentIntentId: session.payment_intent }
            ] 
          },
          { paymentStatus: "paid" },
          { new: true }
        );
        if (updatedOrder) {
          console.log(`Order ${updatedOrder._id} updated to paid via session.`);
        }
      } catch (dbError) {
        console.error("Error updating order via session:", dbError);
      }
      break;
    }

    case "payment_intent.succeeded": {
      const paymentIntent = event.data.object;
      console.log(`PaymentIntent ${paymentIntent.id} succeeded.`);

      try {
        await mongodbBootstrapper.ensureConnected();
        const updatedOrder = await Order.findOneAndUpdate(
          { paymentIntentId: paymentIntent.id },
          { paymentStatus: "paid" },
          { new: true }
        );
        if (updatedOrder) {
          console.log(`Order ${updatedOrder._id} updated to paid via intent.`);
        }
      } catch (dbError) {
        console.error("Error updating order via intent:", dbError);
      }
      break;
    }

    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  res.json({ received: true });
});

// Regular JSON parser for other routes
app.use(express.json());

const apiRouter = express.Router();

apiRouter.get("/health", (_req, res) => {
  res.json({ status: "ok", message: "Auric Nebula Backend is Operational" });
});

apiRouter.post("/create-payment-intent", async (req, res) => {
  try {
    await mongodbBootstrapper.ensureConnected();
    const { items, customerEmail } = req.body;

    if (!items || !items.length) {
      return res.status(400).json({ error: "Items are required" });
    }

    // Calculate total amount
    const totalAmount = items.reduce((acc, item) => {
      return acc + (item.unitAmount || 0) * (item.quantity || 1);
    }, 0);

    const stripeEngine = new CrimsonAxiomStripeCheckoutEngine();
    const paymentIntent = await stripeEngine.createPaymentIntent(totalAmount, "usd", {
      customerEmail: customerEmail || "guest",
    });

    // Create a pending order in MongoDB
    const newOrder = new Order({
      stripeSessionId: `pi_${paymentIntent.id}`, // Reuse field or add new
      paymentIntentId: paymentIntent.id,
      customerEmail: customerEmail || "",
      amountTotal: totalAmount,
      currency: "usd",
      paymentStatus: "unpaid",
      items: items.map(item => ({
          name: item.name,
          image: item.image || "",
          quantity: item.quantity,
          unitAmount: item.unitAmount,
          currency: "usd"
      }))
    });
    await newOrder.save();

    res.json({
      clientSecret: paymentIntent.client_secret,
      orderId: newOrder._id
    });
  } catch (error) {
    console.error("Error creating payment intent:", error);
    res.status(500).json({ error: error.message });
  }
});

apiRouter.get("/orders", async (_req, res) => {
  try {
    await mongodbBootstrapper.ensureConnected();
    const orders = await Order.find().sort({ createdAt: -1 }).limit(100);
    res.json({ orders });
  } catch (error) {
    res.status(500).json({ error: error.message || "Failed to fetch orders" });
  }
});

apiRouter.get("/orders/:id", async (req, res) => {
  try {
    await mongodbBootstrapper.ensureConnected();
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ error: "Order not found" });
    res.json({ order });
  } catch (error) {
    res.status(500).json({ error: error.message || "Failed to fetch order details" });
  }
});

apiRouter.get("/products", async (_req, res) => {
  try {
    await mongodbBootstrapper.ensureConnected();
    const products = await Product.find().sort({ createdAt: -1 });
    res.json({ products });
  } catch (error) {
    res.status(500).json({ error: error.message || "Failed to fetch products" });
  }
});

apiRouter.post("/create-checkout-session", async (req, res) => {
  try {
    await mongodbBootstrapper.ensureConnected();
    const items = Array.isArray(req.body?.items) ? req.body.items : [];

    if (!items.length) {
      return res.status(400).json({ error: "Cart items are required." });
    }

    const checkoutEngine = new CrimsonAxiomStripeCheckoutEngine();
    const session = await checkoutEngine.createSession(items);
    return res.json({ url: session.url });
  } catch (error) {
    return res.status(500).json({ error: error.message || "Unable to create checkout session" });
  }
});

app.use("/api", apiRouter);
// No fallback needed here as Vercel routes all /api to this file

if (process.env.NODE_ENV !== "production") {
  app.listen(port, () => {
    console.log(`🚀 Backend running at http://localhost:${port}`);
  });
}

module.exports = app;