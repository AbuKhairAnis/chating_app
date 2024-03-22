import express from "express";
import {
  logOutUser,
  loginUser,
  signUpUser,
} from "../controllers/authControllers.js";
const router = express.Router();

router.post("/signup", signUpUser);
router.post("/login", loginUser);
router.post("/logout", logOutUser);

export default router;
