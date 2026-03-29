import axios from "axios";

export const getCodeforcesData = async (handle) => {
  const info = await axios.get(`https://codeforces.com/api/user.info?handles=${handle}`);
  const submissions = await axios.get(`https://codeforces.com/api/user.status?handle=${handle}`);

  return {
    rating: info.data.result[0].rating || 0,
    maxRating: info.data.result[0].maxRating || 0,
    problemsSolved: submissions.data.result.length
  };
};