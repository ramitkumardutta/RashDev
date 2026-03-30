import express from "express";
import multer from "multer";
import { getQuestions } from "../controllers/recruiterController.js";

const router = express.Router();

const upload = multer({ storage: multer.memoryStorage() });

router.post("/", upload.single("resume"), getQuestions);

export default router;
