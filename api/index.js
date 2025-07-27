

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const route = require("../routes/userRoutes"); // Adjust path accordingly
require("dotenv").config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use("/api", route);

// DB connect — you can connect on cold start if needed
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("DB connected."))
  .catch((error) => console.log(error));

// 🔁 Export as a serverless function handler
module.exports = app;
