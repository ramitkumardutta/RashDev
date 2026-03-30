import ReactMarkdown from "react-markdown";

export default function AIBox({ text }) {
  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <ReactMarkdown
        components={{
          h2: ({node, ...props}) => <h2 className="text-xl font-bold text-purple-400 mb-2" {...props} />,
          p: ({node, ...props}) => <p className="mb-2" {...props} />,
          li: ({node, ...props}) => <li className="ml-4 list-disc" {...props} />
        }}
      >
        {text}
      </ReactMarkdown>
    </div>
  );
}