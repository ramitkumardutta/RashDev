import axios from "axios";

export const getGithubData = async (username) => {
  const user = await axios.get(`https://api.github.com/users/${username}`);
  const repos = await axios.get(`https://api.github.com/users/${username}/repos`);

  return {
    name: user.data.name,
    public_repos: user.data.public_repos,
    followers: user.data.followers,
    repos: repos.data.length
  };
};