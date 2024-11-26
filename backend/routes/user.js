import express from "express";
import { signUp, login } from "../controllers/user.js";

const router = express.Router();


//User signUp
router.post("/signUp", signUp);

//User login
router.post("/login", login);

export default router;
