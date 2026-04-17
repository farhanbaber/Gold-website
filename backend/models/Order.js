const mongoose = require("mongoose");

const orderItemSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: String, default: "" },
    quantity: { type: Number, required: true, min: 1 },
    unitAmount: { type: Number, required: true, min: 0 },
    currency: { type: String, default: "usd" },
  },
  { _id: false }
);

const orderSchema = new mongoose.Schema(
  {
    stripeSessionId: { type: String, required: true, unique: true },
    paymentIntentId: { type: String, default: "" },
    customerEmail: { type: String, default: "" },
    amountTotal: { type: Number, required: true, min: 0 },
    currency: { type: String, default: "usd" },
    paymentStatus: { type: String, default: "unpaid" },
    items: { type: [orderItemSchema], default: [] },
  },
  { timestamps: true }
);

module.exports = {
  Order: mongoose.models.Order || mongoose.model("Order", orderSchema),
};
