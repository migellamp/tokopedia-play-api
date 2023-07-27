const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: {
    required: true,
    type: String,
  },
  price: {
    required: true,
    type: Number,
  },
  productImage: {
    required: true,
    type: String,
  },
  productUrl: {
    required: true,
    type: String,
  },
  stock: {
    required: true,
    type: Number,
  },
  videoId: {
    required: true,
    type: String,
  },
});

module.exports = mongoose.model("Product", productSchema);
