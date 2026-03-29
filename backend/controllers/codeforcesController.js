import { getCodeforcesData } from "../services/codeforcesService.js";

export const fetchCodeforces = async (req, res) => {
  try {
    const data = await getCodeforcesData(req.params.handle);
    res.json(data);
  } catch {
    res.status(500).json({ error: "Codeforces fetch failed" });
  }
};