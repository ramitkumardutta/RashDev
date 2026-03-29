import express from "express";
import { getAI } from "../controllers/aiController.js";

const router = express.Router();

router.post("/", getAI);

export default router;