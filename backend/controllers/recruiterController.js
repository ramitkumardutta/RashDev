import { generateQuestions } from "../services/resumeService.js";
import { getGithubData } from "../services/githubService.js";
import { getCodeforcesData } from "../services/codeforcesService.js";
import { calculateScore } from "../utils/scoreCalculator.js";
import { convertPdfToText } from "../utils/pdfToText.js";

export const getQuestions = async (req, res) => {
  try {
    console.log("Incoming body:", req.body);

    const { pdfUrl, resumeText, githubUsername, codeforcesHandle } = req.body;

    // 🔴 Validation for usernames
    if (!githubUsername || !codeforcesHandle) {
      return res.status(400).json({
        error: "GitHub and Codeforces are required"
      });
    }

    let finalResumeText = "";

    // 🔥 Case 1: Use PDF URL (PDF.co)
    if (pdfUrl && pdfUrl.trim() !== "") {
      try {
        finalResumeText = await convertPdfToText(pdfUrl.trim());
        console.log("PDF text extracted length:", finalResumeText?.length);
      } catch (err) {
        console.error("PDF conversion error:", err.message);
        return res.status(400).json({
          error: "Failed to convert PDF. Check URL or API key.",
          details: err.message
        });
      }
    }

    // 🔥 Case 2: Use pasted resume text
    else if (resumeText && resumeText.trim() !== "") {
      finalResumeText = resumeText.trim();
    }

    // 🔴 Final check
    if (!finalResumeText) {
      return res.status(400).json({
        error: "Provide either PDF URL or resume text"
      });
    }

    // 🔥 Fetch GitHub data
    const githubData = await getGithubData(githubUsername);

    // 🔥 Fetch Codeforces data
    const cfData = await getCodeforcesData(codeforcesHandle);

    // 🔥 Calculate score
    const score = calculateScore(
      cfData.rating,
      cfData.problemsSolved,
      githubData.repos
    );

    // 🔥 AI analysis
    const result = await generateQuestions({
      resumeText: finalResumeText,
      rating: cfData.rating,
      repos: githubData.repos,
      languages: githubData.languages,
      topLanguage: githubData.topLanguage
    });

    // ✅ Final response
    res.json({
      score,
      result
    });

  } catch (err) {
    console.error("Controller Error:", err);
    res.status(500).json({
      error: "Recruiter AI failed",
      details: err.message
    });
  }
};