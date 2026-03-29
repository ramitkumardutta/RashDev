import express from "express";
import { getQuestions } from "../controllers/recruiterController.js";

const router = express.Router();

router.post("/", getQuestions);

export default router;