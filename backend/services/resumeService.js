import openai from "../config/openai.js";

export const generateQuestions = async ({ resumeText, rating, repos }) => {
  const prompt = `
Candidate Resume:
${resumeText}

Actual Data:
- Codeforces Rating: ${rating}
- GitHub Repositories: ${repos}

Tasks:
1. Extract skills
2. Identify mismatches
3. Generate 5 interview questions
`;

  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
  });

  return response.choices[0].message.content;
};