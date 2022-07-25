const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new mongoose.Schema(
  {
    _id: {
      type: Schema.Types.ObjectId,
      required: true,
      unique: true,
      immutable: true,
    },
    product_category: { type: String },
    product_thumbNail: { type: String },
    product_name: { type: String },
    product_price: { type: Number },
    product_detail: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Products", ProductSchema);
