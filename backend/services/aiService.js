import dotenv from "dotenv";
dotenv.config();

import express from "express";
import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

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

  const response = await groq.chat.completions.create({
    model: "openai/gpt-oss-120b",
    messages: [{ role: "user", content: prompt }],
  });

  return response.choices[0].message.content;
};