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

        res = await axios.post(
          "http://localhost:5000/recruiter",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data"
            }
          }
        );
      } else {
        res = await axios.post(
          "http://localhost:5000/recruiter",
          {
            resumeText: resume.trim(),
            githubUsername: github.trim(),
            codeforcesHandle: cf.trim()
          }
        );
      }

      setResult(res.data.result);
      setScore(res.data.score);

    } catch (err) {
      console.error(err);
      const message =
        err.response?.data?.details ||
        err.response?.data?.error ||
        err.message;
      alert("Error: " + message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-xl border border-gray-700 space-y-6">

      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-purple-400">
          Recruiter Panel
        </h2>
        <p className="text-gray-400 text-sm mt-1">
          Analyze candidates using real coding proof
        </p>
      </div>

      {/* Upload Box */}
      <div className="border-2 border-dashed border-gray-600 rounded-xl p-5 text-center hover:border-purple-500 transition">
        <p className="text-gray-300 mb-2">📄 Upload Resume (PDF)</p>

        <input
          type="file"
          accept="application/pdf"
          className="text-sm text-gray-400"
          onChange={(e) => {
            setFile(e.target.files[0] || null);
            if (e.target.files[0]) setResume("");
          }}
        />

        {file && (
          <p className="text-green-400 text-sm mt-2">
           {file.name}
          </p>
        )}
      </div>

      {/* Divider */}
      <div className="text-center text-gray-500 text-sm">
        OR paste resume below
      </div>

      {/* Resume Text */}
      <textarea
        className="w-full bg-gray-900 border border-gray-700 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
        placeholder="Paste resume here..."
        rows={5}
        value={resume}
        onChange={(e) => {
          setResume(e.target.value);
          if (e.target.value) setFile(null);
        }}
      />

      {/* Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          className="bg-gray-900 border border-gray-700 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="GitHub Username"
          value={github}
          onChange={(e) => setGithub(e.target.value)}
        />

        <input
          className="bg-gray-900 border border-gray-700 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Codeforces Handle"
          value={cf}
          onChange={(e) => setCf(e.target.value)}
        />
      </div>

      {/* Button */}
      <button
        onClick={handleSubmit}
        className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 py-3 rounded-xl font-semibold text-white hover:opacity-90 transition transform hover:scale-[1.02]"
      >
        {loading ? "Analyzing..." : "Analyze Candidate"}
      </button>

      {/*  Loading */}
      {loading && (
        <div className="text-center text-gray-400 text-sm animate-pulse">
          ⏳ Extracting → Fetching → AI analyzing...
        </div>
      )}

      {/*  Score */}
      {score && <ScoreCard score={score} />}

      {/*  Result */}
      {result && (
        <div className="bg-gray-900 border border-gray-700 p-5 rounded-xl whitespace-pre-wrap">
          {result}
        </div>
      )}
    </div>
  );
}