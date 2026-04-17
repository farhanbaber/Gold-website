const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    productId: { type: String, required: true, unique: true, index: true },
    name: { type: String, required: true },
    unitAmount: { type: Number, required: true, min: 50 },
    currency: { type: String, default: "usd" },
    image: { type: String, default: "" },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = {
  Product: mongoose.models.Product || mongoose.model("Product", productSchema),
};
