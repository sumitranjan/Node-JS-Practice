const express = require("express");

const productsController = require("./controllers/product.controllers")

const app = express();

app.use("/products", productsController)

module.exports = app;