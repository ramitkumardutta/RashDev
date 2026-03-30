import axios from "axios";

export const getGithubData = async (username) => {
  const user = await axios.get(`https://api.github.com/users/${username}`);
  const repos = await axios.get(`https://api.github.com/users/${username}/repos`);

  const languageCount = {};

  // Count languages
  repos.data.forEach(repo => {
    const lang = repo.language;
    if (lang) {
      languageCount[lang] = (languageCount[lang] || 0) + 1;
    }
  });

  // ADD YOUR LINE HERE
  let topLanguage = null;

  if (Object.keys(languageCount).length > 0) {
    topLanguage = Object.keys(languageCount).reduce((a, b) =>
      languageCount[a] > languageCount[b] ? a : b
    );
  }

  return {
    name: user.data.name,
    repos: repos.data.length,
    followers: user.data.followers,
    languages: languageCount,
    topLanguage: topLanguage 
  };
};