export const calculateScore = (rating, problems, repos) => {

  // 🔹 Normalize Codeforces rating (0–3000 → 0–100)
  const ratingScore = Math.min((rating / 3000) * 100, 100);

  // 🔹 Normalize problems solved (0–1000 → 0–100)
  const problemScore = Math.min((problems / 1000) * 100, 100);

  // 🔹 Normalize repos (0–50 → 0–100)
  const repoScore = Math.min((repos / 50) * 100, 100);

  // 🔥 Weighted score
  const finalScore =
    ratingScore * 0.5 +
    problemScore * 0.3 +
    repoScore * 0.2;

  return Math.round(finalScore);
};