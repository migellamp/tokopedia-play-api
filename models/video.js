const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
  title: {
    required: true,
    type: String,
  },
  channel: {
    required: true,
    type: String,
  },
  imgUrl: {
    required: true,
    type: String,
  },
  videoUrl: {
    required: true,
    type: String,
  },
  category: {
    required: true,
    type: Array,
  },
  likeCounter: {
    required: true,
    type: Number,
  },
});

module.exports = mongoose.model("Video", videoSchema);
