export const extractLinks = (resumeText) => {

  // Extract GitHub username
  const githubMatch = resumeText.match(
    /github\.com\/([a-zA-Z0-9-]+)/i
  );

  // Extract Codeforces handle
  const codeforcesMatch = resumeText.match(
    /codeforces\.com\/profile\/([a-zA-Z0-9_]+)/i
  );

  return {
    githubUsername: githubMatch ? githubMatch[1] : null,
    codeforcesHandle: codeforcesMatch ? codeforcesMatch[1] : null
  };
};