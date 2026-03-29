import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export const generateQuestions = async ({
  resumeText,
  rating,
  repos,
  languages,
  topLanguage
}) => {
  try {
    const prompt = `
You are a senior technical interviewer.

Candidate Resume:
${resumeText}

Actual Coding Data:
- Codeforces Rating: ${rating}
- GitHub Repositories: ${repos}
- Top Language: ${topLanguage}
- Languages Used: ${JSON.stringify(languages)}

Tasks:
1. Extract key skills from resume
2. Identify mismatch between claims and actual coding data
3. Infer candidate's strongest domain based on GitHub activity
4. Generate 5 high-quality interview questions to verify skills

Return strictly in this format:

Skills:
- ...

Strong Area:
- ...

Mismatch:
- ...

Questions:
1. ...
2. ...
3. ...
4. ...
5. ...
`;

    const response = await groq.chat.completions.create({
      model: "openai/gpt-oss-120b",
      messages: [
        {
          role: "user",
          content: prompt
        }
      ]
    });

    return response.choices[0].message.content;

  } catch (err) {
    throw new Error("Resume AI failed: " + err.message);
  }
};