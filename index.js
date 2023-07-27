require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const URL = process.env.DATABASE_URL;
const port = process.env.PORT;

mongoose.connect(URL);
const database = mongoose.connection;

database.on("error", (err) => {
  console.error(err);
});

database.once("connected", () => {
  console.log("Database Connected");
});

const app = express();
const commentRouter = require("./routes/comment");
const videoRouter = require("./routes/video");
const productRouter = require("./routes/product");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use("/api", videoRouter);
app.use("/api", productRouter);
app.use("/api", commentRouter);

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
