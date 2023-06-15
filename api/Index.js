const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const multer = require("multer");
const path = require('path')
const authRoute = require("./Routes/authRouter");
const userRouter = require("./Routes/userRoutes");
const PostRouter = require("./Routes/PostRouter");

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use("/images", express.static(path.join(__dirname, "/images")));

const PORT = process.env.PORT || 5000;
const DB = process.env.DATABASE;

// Connect to MongoDB
mongoose
  .connect(DB)
  .then(() => console.log("Db is connected"))
  .catch((err) => console.log(err.message));

app.get("/", (req, res) => {
  res.end("this is home page");
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});
//Routes
app.use("/api", authRoute);
app.use("/api", userRouter);
app.use("/api", PostRouter);

app.listen(PORT, () => {
  console.log(`Backend is running on ${PORT}`);
});
