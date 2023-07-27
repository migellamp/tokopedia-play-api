const express = require("express");
const Video = require("../models/video");

const videoRouter = express.Router();

videoRouter.post("/video", async (req, res) => {
  const video = new Video({
    title: req.body.title,
    channel: req.body.channel,
    imgUrl: req.body.imgUrl,
    videoUrl: req.body.videoUrl,
    category: req.body.category,
    likeCounter: 0,
  });
  try {
    await video.save();
    res.status(200).json({ video });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

videoRouter.get("/video", async (req, res) => {
  try {
    const allVideo = await Video.find();
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.status(200).json({ video: allVideo });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

videoRouter.get("/video/:id", async (req, res) => {
  const getId = req.params.id;
  try {
    const selectedVideo = await Video.findById(getId);
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.status(200).json({ video: selectedVideo });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = videoRouter;
