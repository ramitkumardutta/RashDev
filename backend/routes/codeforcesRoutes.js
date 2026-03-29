import express from "express";
import { fetchCodeforces } from "../controllers/codeforcesController.js";

const router = express.Router();

router.get("/:handle", fetchCodeforces);

export default router;