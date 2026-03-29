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
    <div className="space-y-4">

      <h2 className="text-2xl font-semibold text-blue-400">
        Student Dashboard
      </h2>

      <div className="flex gap-3">
        <input
          className="bg-gray-800 p-2 rounded w-full"
          placeholder="GitHub Username"
          onChange={(e) => setGithub(e.target.value)}
        />
        <input
          className="bg-gray-800 p-2 rounded w-full"
          placeholder="Codeforces Handle"
          onChange={(e) => setCf(e.target.value)}
        />
      </div>

      <button
        onClick={handleAnalyze}
        className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
      >
        {loading ? "Analyzing..." : "Analyze"}
      </button>

      {loading && (
        <p className="text-gray-400">Fetching data...</p>
      )}

      {data && <StatsCard data={data} />}
      {score && <ScoreCard score={score} />}

      {data && (
        <button
          onClick={handleAI}
          className="bg-purple-500 px-4 py-2 rounded hover:bg-purple-600"
        >
          {aiLoading ? "Thinking..." : "Get AI Advice"}
        </button>
      )}

      {aiLoading && (
        <p className="text-gray-400">AI is analyzing...</p>
      )}

      {ai && <AIBox text={ai} />}
    </div>
  );
}