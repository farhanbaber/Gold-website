import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import Stripe from "stripe";
import { Order } from "./models/Order.js";
import { Product } from "./models/Product.js";

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
      // In production we throw, in dev we warn but the app might fail later if key is used
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
    const mongoUri = process.env.MONGO_URI || process.env.MONGODB_URI;
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
    this.#connectionPromise = mongoose.connect(mongoUri);
    await this.#connectionPromise;
    console.log("MongoDB Connected Successfully");
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
}

const mongodbBootstrapper = new ObsidianHelixMongoBootstrapper();

const allowedOrigins = [
  "https://gold-website-chi.vercel.app",
  "http://localhost:5173",
  "http://localhost:5174",
  "http://localhost:5175",
  process.env.CLIENT_URL,
].filter(Boolean);

app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
        return;
      }
      callback(new Error("CORS policy violation"));
    },
    credentials: true,
  })
);
app.use(express.json());

const apiRouter = express.Router();

apiRouter.get("/health", (_req, res) => {
  res.json({ status: "ok", message: "Auric Nebula Backend is Operational" });
});

// Admin Route: Fetch all orders
apiRouter.get("/orders", async (_req, res) => {
  try {
    await mongodbBootstrapper.ensureConnected();
    const orders = await Order.find().sort({ createdAt: -1 }).limit(100);
    res.json({ orders });
  } catch (error) {
    res.status(500).json({ error: error.message || "Failed to fetch orders" });
  }
});

// Admin Route: Fetch single order detail
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

// Admin Route: Fetch all products
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
app.use(apiRouter);

// For local development
if (process.env.NODE_ENV !== "production") {
  app.listen(port, () => {
    console.log(`🚀 Backend running at http://localhost:${port}`);
    console.log(`🩺 Health check: http://localhost:${port}/health`);
  });
}

export default app;