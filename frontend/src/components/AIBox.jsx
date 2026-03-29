export default function AIBox({ text }) {
  return (
    <div className="bg-gray-800 p-4 rounded-lg whitespace-pre-wrap">
      <h3 className="text-lg font-semibold mb-2 text-purple-400">
        AI Advice
      </h3>
      {text}
    </div>
  );
}