import { calculateScore } from "../utils/scoreCalculator.js";

export const getScore = (req, res) => {
  try {
    const { rating, problems, repos } = req.body;
    const score = calculateScore(rating, problems, repos);
    res.json({ score });
  } catch {
    res.status(500).json({ error: "Score failed" });
  }
};