import express from "express";
import { getScore } from "../controllers/scoreController.js";

const router = express.Router();

router.post("/", getScore);

export default router;