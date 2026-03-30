import { useState } from "react";
import { fetchGithub, fetchCodeforces, getScore, getAI } from "../services/api";
import StatsCard from "./StatsCard";
import ScoreCard from "./ScoreCard";
import AIBox from "./AIBox";

export default function InputForm() {
  const [github, setGithub] = useState("");
  const [cf, setCf] = useState("");

  const [data, setData] = useState(null);
  const [score, setScore] = useState(null);
  const [ai, setAI] = useState("");

  const [loading, setLoading] = useState(false);
  const [aiLoading, setAiLoading] = useState(false);

  const handleAnalyze = async () => {
    try {
      setLoading(true);

      const g = await fetchGithub(github);
      const c = await fetchCodeforces(cf);

      const combined = {
        repos: g.data.repos,
        rating: c.data.rating,
        problems: c.data.problemsSolved,
        topLanguage: g.data.topLanguage
      };

      setData(combined);

      const s = await getScore(combined);
      setScore(s.data.score);

    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleAI = async () => {
    try {
      setAiLoading(true);
      const res = await getAI(data);
      setAI(res.data.reply);
    } catch (err) {
      console.error(err);
    } finally {
      setAiLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-xl border border-gray-700 space-y-6">

      {/*  Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-blue-400">
          Student Dashboard
        </h2>
        <p className="text-gray-400 text-sm mt-1">
          Analyze your coding profile & get AI feedback
        </p>
      </div>

      {/*  Input Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          className="bg-gray-900 border border-gray-700 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          placeholder="GitHub Username"
          value={github}
          onChange={(e) => setGithub(e.target.value)}
        />
        <input
          className="bg-gray-900 border border-gray-700 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          placeholder="Codeforces Handle"
          value={cf}
          onChange={(e) => setCf(e.target.value)}
        />
      </div>

      {/*  Analyze Button */}
      <button
        onClick={handleAnalyze}
        className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 py-3 rounded-xl font-semibold text-white hover:opacity-90 transition transform hover:scale-[1.02]"
      >
        {loading ? "Analyzing..." : " Analyze Profile"}
      </button>

      {/*  Loading */}
      {loading && (
        <div className="text-center text-gray-400 text-sm animate-pulse">
          ⏳ Fetching data from GitHub & Codeforces...
        </div>
      )}

      {/*  Stats */}
      {data && (
        <div className="bg-gray-900 border border-gray-700 p-4 rounded-xl">
          <StatsCard data={data} />
        </div>
      )}

      {/*  Score */}
      {score && <ScoreCard score={score} />}

      {/*  AI Button */}
      {data && (
        <button
          onClick={handleAI}
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 py-3 rounded-xl font-semibold text-white hover:opacity-90 transition transform hover:scale-[1.02]"
        >
          {aiLoading ? "Thinking..." : "Get AI Advice"}
        </button>
      )}

      {/*  AI Loading */}
      {aiLoading && (
        <div className="text-center text-gray-400 text-sm animate-pulse">
          🤖 AI is analyzing your profile...
        </div>
      )}

      {/*  AI Output */}
      {ai && (
        <div className="bg-gray-900 border border-gray-700 p-5 rounded-xl">
          <AIBox text={ai} />
        </div>
      )}
    </div>
  );
}