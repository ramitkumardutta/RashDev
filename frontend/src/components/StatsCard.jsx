export default function StatsCard({ data }) {
  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <h3 className="text-lg font-semibold mb-2">Stats</h3>

      <p>Rating: {data.rating}</p>
      <p>Problems: {data.problems}</p>
      <p>Repos: {data.repos}</p>
      <p>Top Language: {data.topLanguage}</p>
    </div>
  );
}