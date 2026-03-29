import { calculateScore } from "../utils/scoreCalculator.js";

export const getScore = (req, res) => {
  console.log("BODY:", req.body);
  try {
    const { rating, problems, repos } = req.body;

    if (rating == null || problems == null || repos == null) {
      return res.status(400).json({
        error: "Missing required fields (rating, problems, repos)"
      });
    }

    const score = calculateScore(rating, problems, repos);

    res.json({ score });

  } catch (err) {
    res.status(500).json({
      error: "Score calculation failed",
      details: err.message
    });
  }
};