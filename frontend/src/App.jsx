import { useState } from "react";
import InputForm from "./components/InputForm";
import RecruiterForm from "./components/RecruiterForm";

function App() {
  const [view, setView] = useState("student");

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center p-6">

      <h1 className="text-4xl font-bold mb-6 text-blue-400">
        RashDev
      </h1>

      {/* Toggle Buttons */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setView("student")}
          className={`px-4 py-2 rounded-lg ${
            view === "student"
              ? "bg-blue-500"
              : "bg-gray-800 hover:bg-gray-700"
          }`}
        >
          Student
        </button>

        <button
          onClick={() => setView("recruiter")}
          className={`px-4 py-2 rounded-lg ${
            view === "recruiter"
              ? "bg-purple-500"
              : "bg-gray-800 hover:bg-gray-700"
          }`}
        >
          Recruiter
        </button>
      </div>

      <div className="w-full max-w-3xl bg-gray-900 p-6 rounded-2xl shadow-lg">
        {view === "student" ? <InputForm /> : <RecruiterForm />}
      </div>

    </div>
  );
}

export default App;