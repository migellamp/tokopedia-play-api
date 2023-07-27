const express = require("express");
const Product = require("../models/product");

const productRouter = express.Router();

productRouter.post("/product", (req, res) => {
  const videoId = req.body.videoId;
  const product = new Product({
    title: req.body.title,
    price: req.body.price,
    productImage: req.body.productImage,
    productUrl: req.body.productUrl,
    stock: req.body.stock,
    videoId,
  });
  product.save();
  res.status(200).json({ product });
});

productRouter.get("/product/", async (req, res) => {
  try {
    const selectedProduct = await Product.find();
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.status(200).json({ ListProduct: selectedProduct });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

productRouter.get("/product/:id", async (req, res) => {
  const getId = req.params.id;
  try {
    const selectedProduct = await Product.find({ videoId: getId });
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.status(200).json({ ListProduct: selectedProduct });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = productRouter;
