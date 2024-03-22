import express from "express";
import { getUserForSideber } from "../controllers/userController.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.get("/", protectRoute, getUserForSideber);

export default router;
