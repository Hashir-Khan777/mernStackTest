const express = require("express");
const { Product } = require("../../models");

const productRouter = express.Router();

productRouter.get("/", async (req, res) => {
  try {
    const products = await Product.find({});
    res.send(products);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

productRouter.get("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const product = await Product.findOne({ _id });
    res.send(product);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

module.exports = productRouter;
