import { getGithubData } from "../services/githubService.js";

export const fetchGithub = async (req, res) => {
  try {
    const { username } = req.params;

    if (!username) {
      return res.status(400).json({ error: "Username is required" });
    }

    const data = await getGithubData(username);
    res.json(data);

  } catch (err) {
    res.status(500).json({
      error: "GitHub fetch failed",
      details: err.message
    });
  }
};