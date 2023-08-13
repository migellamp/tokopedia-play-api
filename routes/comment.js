const express = require("express");
const Comment = require("../models/comment");

const commentRouter = express.Router();

commentRouter.post("/comment", async (req, res) => {
  try {
    const videoId = req.body.videoId;
    const timeComment = new Date().toLocaleString();
    const comment = new Comment({
      username: req.body.username,
      profilePictue: "default",
      comment: req.body.comment,
      timeStamp: timeComment,
      videoId,
    });
    await comment.save();
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.status(200).json({ status: `Success`, comment });
  } catch (error) {
    res.status(400).json({ status: `Failed`, message: error.message });
  }
});

commentRouter.get("/comment/:id", async (req, res) => {
  const getId = req.params.id;
  try {
    const selectedComment = await Comment.find({ videoId: getId });
    if (selectedComment.length === 0) {
      res.status(404).json({ ListProduct: selectedComment });
    } else {
      res.header("Access-Control-Allow-Origin", "*");
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
      );
      res.status(200).json({ comment: selectedComment });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = commentRouter;
