// routes/adminRoutes.js
import express from "express";
import { adminSignup, adminLogin } from "../controller/adminController.js";

const router = express.Router();

// router.post("/admin-signup", adminSignup);
// router.post("/admin-login", adminLogin);
router.post("/signup", adminSignup);
router.post("/login",  adminLogin);


export default router;
