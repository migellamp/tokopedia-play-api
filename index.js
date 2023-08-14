require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Comment = require("./models/comment");

// const io = require("socket.io")(8080, {
//   cors: {
//     methods: ["GET", "POST"],
//   },
// });

// const http = require("http");
// const server = http.createServer(app);

const URL = process.env.MONGODB_URI;
const PORT = process.env.PORT || 30009;
mongoose.connect(URL);
const database = mongoose.connection;

database.on("error", (err) => {
  console.error(err);
});

database.once("connected", () => {
  console.log("Database Connected");
});

const commentRouter = require("./routes/comment");
const videoRouter = require("./routes/video");
const productRouter = require("./routes/product");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());
app.use("/api", videoRouter);
app.use("/api", productRouter);
app.use("/api", commentRouter);

var server = app.listen(PORT, function () {
  console.log("Node app is running on port", PORT);
});

var io = require("socket.io")(server, {
  cors: {
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  socket.on("disconnect", () => {});

  socket.on("chatmessage", (msg) => {
    const comment = new Comment({
      username: msg.username,
      profilePictue: msg.profilePictue,
      comment: msg.comment,
      timeStamp: msg.timeStamp,
      videoId: msg.videoId,
    });
    comment.save().then(() => {
      io.emit("message", msg);
    });
  });
});
