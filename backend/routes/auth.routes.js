import express from "express";
import { signup, login, logout } from "../controllers/auth.controller.js";
import { verifyJWT } from "../middleware/auth.middlware.js";
const router = express.Router();
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", verifyJWT, logout);
export default router;