export const calculateScore = (rating, problems, repos) => {
  return Math.round(
    rating * 0.4 +
    problems * 0.3 +
    repos * 10 * 0.3
  );
};