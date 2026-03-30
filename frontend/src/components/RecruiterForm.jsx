import { useState } from "react";
import axios from "axios";
import ScoreCard from "./ScoreCard";

export default function RecruiterForm() {
  const [resume, setResume] = useState("");
  const [github, setGithub] = useState("");
  const [cf, setCf] = useState("");
  const [file, setFile] = useState(null);

  const [result, setResult] = useState("");
  const [score, setScore] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      setResult("");
      setScore(null);

      // prefer file upload; fall back to pasted resume text
      if (!file && !resume.trim()) {
        alert("Please upload a PDF or paste resume text.");
        setLoading(false);
        return;
      }

      if (!github.trim() || !cf.trim()) {
        alert("Please provide GitHub username and Codeforces handle.");
        setLoading(false);
        return;
      }

      let res;
      if (file) {
        const formData = new FormData();
        formData.append("resume", file);
        formData.append("githubUsername", github.trim());
        formData.append("codeforcesHandle", cf.trim());

        res = await axios.post("http://localhost:5000/recruiter", formData);
      } else {
        const payload = {
          resumeText: resume.trim(),
          githubUsername: github.trim(),
          codeforcesHandle: cf.trim()
        };
        res = await axios.post("http://localhost:5000/recruiter", payload);
      }

      setResult(res.data.result);
      setScore(res.data.score);

    } catch (err) {
      console.error(err);
      const message = err.response?.data?.details || err.response?.data?.error || err.message;
      alert("Error: " + message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">

      <h2 className="text-2xl font-semibold text-purple-400">
        Recruiter Panel
      </h2>

      {/* 🔥 Resume Text */}
      {/* Resume upload (preferred) */}
      <input
        type="file"
        accept="application/pdf"
        className="bg-gray-800 p-2 rounded w-full"
        onChange={(e) => {
          setFile(e.target.files[0] || null);
          // clear pasted resume if file selected
          if (e.target.files[0]) setResume("");
        }}
      />

      <div className="text-sm text-gray-400">Or paste resume text below</div>
      <textarea
        className="w-full bg-gray-800 p-3 rounded"
        placeholder="Paste Resume Here..."
        rows={5}
        value={resume}
        onChange={(e) => {
          setResume(e.target.value);
          if (e.target.value) setFile(null);
        }}
      />

      {/* 🔥 Inputs */}
      <div className="flex gap-3">
        <input
          className="bg-gray-800 p-2 rounded w-full"
          placeholder="GitHub Username"
          value={github}
          onChange={(e) => setGithub(e.target.value)}
        />
        <input
          className="bg-gray-800 p-2 rounded w-full"
          placeholder="Codeforces Handle"
          value={cf}
          onChange={(e) => setCf(e.target.value)}
        />
      </div>

      <button
        onClick={handleSubmit}
        className="bg-purple-500 px-4 py-2 rounded hover:bg-purple-600"
      >
        {loading ? "Analyzing..." : "Analyze Candidate"}
      </button>

      {/* 🔥 Loading */}
      {loading && (
        <p className="text-gray-400">
          Fetching data → AI analyzing...
        </p>
      )}

      {/* 🔥 Score */}
      {score && <ScoreCard score={score} />}

      {/* 🔥 Result */}
      {result && (
        <div className="bg-gray-800 p-4 rounded whitespace-pre-wrap">
          {result}
        </div>
      )}
    </div>
  );
}