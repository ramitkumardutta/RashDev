import { generateQuestions } from "../services/resumeService.js";

export const getQuestions = async (req, res) => {
  try {
    const result = await generateQuestions(req.body);
    res.json({ result });
  } catch {
    res.status(500).json({ error: "Recruiter AI failed" });
  }
};
