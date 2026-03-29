import { generateAdvice } from "../services/aiService.js";

export const getAI = async (req, res) => {
  try {
    const { rating, problems, repos } = req.body;

    if (rating == null || problems == null || repos == null) {
      return res.status(400).json({
        error: "Missing data for AI analysis"
      });
    }

    const result = await generateAdvice(req.body);

    res.json({ reply: result });

  } catch (err) {
    res.status(500).json({
      error: "AI failed",
      details: err.message
    });
  }
};