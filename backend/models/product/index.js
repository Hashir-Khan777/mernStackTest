const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema(
  {
    name: {
      type: String,
      required: ["name is required", true],
    },
    price: {
      type: Number,
      required: ["price is required", true],
    },
    description: {
      type: String,
      required: ["description is required", true],
    },
    image: {
      type: String,
      required: ["image is required", true],
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
