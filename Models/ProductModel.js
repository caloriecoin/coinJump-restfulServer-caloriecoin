const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    product_id: { type: String, required: true, unique: true, immutable: true },
    product_category: { type: String },
    product_thumbNail: { type: String },
    product_name: { type: String },
    product_price: { type: Number },
    product_detail: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Products", ProductSchema);
