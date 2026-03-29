import { generateQuestions } from "../services/resumeService.js";
import { getGithubData } from "../services/githubService.js";
import { getCodeforcesData } from "../services/codeforcesService.js";

export const getQuestions = async (req, res) => {
  try {
    const { resumeText, githubUsername, codeforcesHandle } = req.body;

    if (!resumeText || !githubUsername || !codeforcesHandle) {
      return res.status(400).json({
        error: "Resume, GitHub username, and Codeforces handle are required"
      });
    }

    const githubData = await getGithubData(githubUsername);
    const cfData = await getCodeforcesData(codeforcesHandle);

    const result = await generateQuestions({
      resumeText,
      rating: cfData.rating,
      repos: githubData.repos,
      languages: githubData.languages,
      topLanguage: githubData.topLanguage
    });

    res.json({ result });

  } catch (err) {
    res.status(500).json({
      error: "Recruiter AI failed",
      details: err.message
    });
  }
};