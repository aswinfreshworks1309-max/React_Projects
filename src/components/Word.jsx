import { useState } from "react";

function Word() {
  const [text, setText] = useState("");

  const words = text.trim().split(/\s+/).filter(w => w !== "").length;
  const characters = text.length;
  const sentences = text.split(/[.!?]/).filter(s => s.trim() !== "").length;

  return (
    <div className="min-h-screen  flex items-center justify-center p-4">
      <div className="bg-slate-400   rounded-xl shadow-lg p-6 w-full max-w-md">
        
        <h1 className="text-2xl font-bold text-center mb-4 text-gray-800">
          Word Count App
        </h1>

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type something..."
          className="w-full h-40 p-3 border bg-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
        />

        <div className="grid grid-cols-3 gap-4 text-center mt-5">
          <div className="bg-indigo-100 p-3 rounded-lg">
            <p className="text-sm text-gray-600">Words</p>
            <p className="text-xl font-bold text-indigo-600">{words}</p>
          </div>

          <div className="bg-purple-100 p-3 rounded-lg">
            <p className="text-sm text-gray-600">Characters</p>
            <p className="text-xl font-bold text-purple-600">{characters}</p>
          </div>

          <div className="bg-pink-100 p-3 rounded-lg">
            <p className="text-sm text-gray-600">Sentences</p>
            <p className="text-xl font-bold text-pink-600">{sentences}</p>
          </div>
        </div>

        <button
          onClick={() => setText("")}
          className="w-full mt-5 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
        >
          Clear Text
        </button>

      </div>
    </div>
  );
}

export default Word;
