const express = require("express");
const { Product } = require("../../models");

const SearchRouter = express.Router();

SearchRouter.get("/", async (req, res) => {
  const { query } = req.query;
  try {
    const products = await Product.aggregate([
      {
        $match: {
          $or: [
            { name: { $regex: query, $options: "i" } },
            { description: { $regex: query, $options: "i" } },
          ],
        },
      },
    ]);
    res.send(products);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

module.exports = SearchRouter;
