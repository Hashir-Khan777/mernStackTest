const express = require("express");
const productRouter = require("./product");
const searchRouter = require("./search");

const AppRouter = express.Router();

AppRouter.use("/products", productRouter);
AppRouter.use("/search", searchRouter);

module.exports = AppRouter;
