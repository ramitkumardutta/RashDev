import { generateAdvice } from "../services/aiService.js";

export const getAI = async (req, res) => {
  try {
    const result = await generateAdvice(req.body);
    res.json({ reply: result });
  } catch {
    res.status(500).json({ error: "AI failed" });
  }
};