// import express from 'express';

// import {
//     create,
//     getAllFeedback,
// } from "../controller/userController.js"

// const route = express.Router();

// route.post("/user", create);
// route.get("/users", getAllFeedback);
// // route.get("/user/:id", getUserById);
// // route.put("/update/user/:id", update);
// // route.delete("/delete/user/:id", deleteUser);

// export default route;

const express = require("express");
const router = express.Router();
const { createUser, getAllUsers } = require("../controller/userController");

router.post("/add", createUser);
router.get("/users", getAllUsers);

module.exports = router; // ✅ THIS IS CRITICAL
