import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import Stripe from "stripe";

dotenv.config();

const app = express();
const port = Number(process.env.PORT || 4242);

class AuricNebulaEnvVault {
  static require(key) {
    const value = process.env[key];
    if (!value) {
      throw new Error(`Missing required environment variable: ${key}`);
    }
    return value;
  }
}

class ObsidianHelixMongoBootstrapper {
  #connectionPromise = null;

  async ensureConnected() {
    const mongoUri = process.env.MONGO_URI || process.env.MONGODB_URI;
    if (!mongoUri) return;

    if (mongoose.connection.readyState === 1) return;
    if (this.#connectionPromise) {
      await this.#connectionPromise;
      return;
    }

    this.#connectionPromise = mongoose.connect(mongoUri);
    await this.#connectionPromise;
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
  res.json({ status: "ok" });
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

if (process.env.NODE_ENV !== "production") {
  app.listen(port, () => {
    console.log(`Backend running at http://localhost:${port}`);
  });
}

export default app;