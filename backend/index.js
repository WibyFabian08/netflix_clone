const express = require("express");
const app = express();
const port = 3000 || process.env.PORT;
const mongoose = require("mongoose");
const path = require("path");

const dotenv = require("dotenv");

const testRouter = require("./routes/test");
const authRouter = require('./routes/auth');
const movieRouter = require('./routes/movie');
const userRouter = require('./routes/user');
const listRouter = require('./routes/list');

// use dotenv
dotenv.config();

// express request
app.use(express.json());

// access public folder
app.use(express.static(path.join(__dirname, "public")));

// cors origin handle
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,PUT,POST,DELETE,PATCH,OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/api/test", testRouter);
app.use("/api/auth", authRouter);
app.use("/api/movie", movieRouter);
app.use("/api/users", userRouter);
app.use("/api/lists", listRouter);

// mongoose connection
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Koneksi gagal"));
db.once("open", () => {
  app.listen(port, () => {
    console.log("Database Connected");
  });
});
