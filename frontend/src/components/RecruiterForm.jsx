import { useState } from "react";
import { getRecruiter } from "../services/api";

export default function RecruiterForm() {
  const [resume, setResume] = useState("");
  const [github, setGithub] = useState("");
  const [cf, setCf] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = async () => {
    const res = await getRecruiter({
      resumeText: resume,
      githubUsername: github,
      codeforcesHandle: cf
    });

    setResult(res.data.result);
  };

  return (
    <div className="space-y-4">

      <h2 className="text-2xl font-semibold text-purple-400">
        Recruiter Panel
      </h2>

      <textarea
        className="w-full bg-gray-800 p-3 rounded"
        placeholder="Paste Resume"
        rows={4}
        onChange={(e) => setResume(e.target.value)}
      />

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
        onClick={handleSubmit}
        className="bg-purple-500 px-4 py-2 rounded hover:bg-purple-600"
      >
        Analyze Candidate
      </button>

      {result && (
        <div className="bg-gray-800 p-4 rounded whitespace-pre-wrap">
          {result}
        </div>
      )}
    </div>
  );
}