import { generateQuestions } from "../services/resumeService.js";
import { getGithubData } from "../services/githubService.js";
import { getCodeforcesData } from "../services/codeforcesService.js";
import { calculateScore } from "../utils/scoreCalculator.js";
import { convertPdfToText } from "../utils/pdfToText.js";

export const getQuestions = async (req, res) => {
  try {
    const { resumeText, githubUsername, codeforcesHandle } = req.body;

    // 🔴 Validate profiles
    if (!githubUsername || !codeforcesHandle) {
      return res.status(400).json({
        error: "GitHub and Codeforces are required"
      });
    }

    let finalResumeText = "";

    // CASE 1: PDF uploaded
    if (req.file) {
      try {
        finalResumeText = await convertPdfToText(req.file.buffer);
      } catch (err) {
        return res.status(400).json({
          error: "Failed to read PDF",
          details: err.message
        });
      }
    }

    // CASE 2: Text pasted
    else if (resumeText && resumeText.trim() !== "") {
      finalResumeText = resumeText.trim();
    }

    // Final check
    if (!finalResumeText) {
      return res.status(400).json({
        error: "Upload PDF or paste resume"
      });
    }

    // Fetch data
    const githubData = await getGithubData(githubUsername);
    const cfData = await getCodeforcesData(codeforcesHandle);

    // Score
    const score = calculateScore(
      cfData.rating,
      cfData.problemsSolved,
      githubData.repos
    );

    //  AI (same flow)
    const result = await generateQuestions({
      resumeText: finalResumeText,
      rating: cfData.rating,
      repos: githubData.repos,
      languages: githubData.languages,
      topLanguage: githubData.topLanguage
    });

    res.json({
      score,
      result
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Recruiter AI failed",
      details: err.message
    });
  }
};