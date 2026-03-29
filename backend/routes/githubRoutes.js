import express from "express";
import { fetchGithub } from "../controllers/githubController.js";

const router = express.Router();

router.get("/:username", fetchGithub);

export default router;