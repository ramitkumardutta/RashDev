import { useState } from "react";
import axios from "axios";

export default function App() {
  const [github, setGithub] = useState("");
  const [cf, setCf] = useState("");
  const [profile, setProfile] = useState(null);
  const [stats, setStats] = useState(null);
  const [score, setScore] = useState(null);
  const [ai, setAI] = useState(null);
  const [loading, setLoading] = useState(false);

  const analyze = async () => {
    try {
      setLoading(true);

      const gh = await axios.get(`/github/${github}`);
      const cfRes = await axios.get(`/codeforces/${cf}`);

      const sc = await axios.post(`/score`, {
        github: gh.data,
        codeforces: cfRes.data,
      });

      setProfile(gh.data);
      setStats(cfRes.data);
      setScore(sc.data.score);
    } catch (err) {
      alert("Error fetching data");
    } finally {
      setLoading(false);
    }
  };

  const getAI = async () => {
    const res = await axios.post(`/ai`, {
      profile,
      stats,
      score,
    });
    setAI(res.data);
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        DevProof 🚀 – Verify Your Skills
      </h1>

      {/* Inputs */}
      <div className="flex gap-3 justify-center mb-6">
        <input
          className="p-2 rounded bg-gray-800"
          placeholder="GitHub Username"
          value={github}
          onChange={(e) => setGithub(e.target.value)}
        />

        <input
          className="p-2 rounded bg-gray-800"
          placeholder="Codeforces Handle"
          value={cf}
          onChange={(e) => setCf(e.target.value)}
        />

        <button
          onClick={analyze}
          className="bg-blue-600 px-4 py-2 rounded"
        >
          Analyze
        </button>
      </div>

      {loading && <p className="text-center">Loading...</p>}

      {/* Profile */}
      {profile && (
        <div className="bg-gray-800 p-4 rounded mb-4">
          <h2 className="text-xl">Profile</h2>
          <p>Name: {profile.name}</p>
          <p>Followers: {profile.followers}</p>
          <p>Repos: {profile.public_repos}</p>
        </div>
      )}

      {/* Codeforces */}
      {stats && (
        <div className="bg-gray-800 p-4 rounded mb-4">
          <h2 className="text-xl">Codeforces</h2>
          <p>Rating: {stats.rating}</p>
          <p>Problems: {stats.problemsSolved}</p>
        </div>
      )}

      {/* Score */}
      {score && (
        <div className="bg-green-600 text-center p-6 rounded mb-4 text-2xl">
          Score: {score}/100 ⭐
        </div>
      )}

      {/* AI Button */}
      {score && (
        <div className="text-center">
          <button
            onClick={getAI}
            className="bg-purple-600 px-4 py-2 rounded"
          >
            Get AI Advice
          </button>
        </div>
      )}

      {/* AI Output */}
      {ai && (
        <div className="bg-gray-800 p-4 rounded mt-4">
          <h2 className="text-xl mb-2">AI Feedback</h2>
          <p><b>Strengths:</b> {ai.strengths}</p>
          <p><b>Weaknesses:</b> {ai.weaknesses}</p>
          <p><b>Plan:</b> {ai.plan}</p>
        </div>
      )}
    </div>
  );
}