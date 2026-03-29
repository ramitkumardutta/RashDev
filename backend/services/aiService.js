import openai from "../config/openai.js";

export const generateAdvice = async ({ rating, problems, repos }) => {
  const prompt = `
You are a coding mentor.

Student Data:
- Codeforces Rating: ${rating}
- Problems Solved: ${problems}
- GitHub Repositories: ${repos}

Give:
1. Strengths
2. Weaknesses
3. Improvement Plan
`;

  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
  });

  return response.choices[0].message.content;
};