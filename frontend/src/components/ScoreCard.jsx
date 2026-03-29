export default function ScoreCard({ score }) {

  const getStatus = () => {
    if (score >= 80) return { text: "Excellent ⭐", color: "bg-green-600" };
    if (score >= 60) return { text: "Good 👍", color: "bg-blue-600" };
    if (score >= 40) return { text: "Average ⚠️", color: "bg-yellow-500" };
    return { text: "Needs Improvement ❌", color: "bg-red-600" };
  };

  const status = getStatus();

  return (
    <div className={`${status.color} p-5 rounded-lg text-center`}>
      
      <h2 className="text-2xl font-bold">
        Score: {score}
      </h2>

      <p className="text-lg mt-2">
        {status.text}
      </p>

    </div>
  );
}