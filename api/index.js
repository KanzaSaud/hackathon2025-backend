// // import express from "express";
// // import mongoose from "mongoose";
// import bodyParser from "body-parser";
// // import dotenv from "dotenv";
// import route from "./routes/userRoute.js";
// // import cors from "cors";

// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// require("dotenv").config();

// const app = express();
// app.use(bodyParser.json());
// app.use(cors());
// // dotenv.config();

// const PORT = process.env.PORT || 7000;
// const MONGOURL = process.env.MONGO_URL;

// mongoose
//   .connect(MONGOURL)
//   .then(() => {
//     console.log("DB connected successfully.");
//     app.listen(PORT, () => {
//       console.log(`Server is running on port :${PORT} `);
//     });
//   })
//   .catch((error) => console.log(error));

// app.use("/api", route);


const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const serverless = require("serverless-http");
const route = require("/routes/userRoute.js");

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use("/api", route);

// MongoDB connection
const MONGOURL = process.env.MONGO_URL;
mongoose
  .connect(MONGOURL)
  .then(() => {
    console.log("DB connected successfully.");
  })
  .catch((error) => console.log(error));

// 🔁 Export serverless handler
module.exports = serverless(app);
