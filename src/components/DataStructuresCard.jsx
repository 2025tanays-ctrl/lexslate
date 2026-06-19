
import React from "react";

const items = [
  {
    ds: "HashMap",
    used: "Legal Word Index",
    explanation: "Stores keyword → clause number pairs. O(1) lookup speed.",
    color: "border-l-blue-500",
  },
  {
    ds: "Stack (LIFO)",
    used: "Undo History",
    explanation: "Saves contract snapshots. Last saved = first to undo.",
    color: "border-l-purple-500",
  },
  {
    ds: "Queue (FIFO)",
    used: "Review Queue",
    explanation: "Clauses added to back, processed from front in order.",
    color: "border-l-green-500",
  },
];

function DataStructuresCard() {
  return (
    <div className="bg-white border border-gray-200 rounded shadow-sm p-4">
      <h2 className="font-bold text-blue-900 text-base mb-3"> Data Structures Used</h2>
      <div className="grid grid-cols-3 gap-3">
        {items.map((item) => (
          <div key={item.ds} className={`border-l-4 pl-3 py-1 ${item.color}`}>
            <p className="font-bold text-sm text-gray-800">{item.ds}</p>
            <p className="text-xs text-blue-800 font-medium">{item.used}</p>
            <p className="text-xs text-gray-500 mt-0.5">{item.explanation}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DataStructuresCard;
