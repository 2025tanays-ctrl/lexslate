
import React from "react";
import { regulations } from "../data/sampleData";

function RulebookHub({ onSelect, selected }) {
  return (
    <div className="bg-white border border-gray-200 rounded shadow-sm p-4 mb-4">
      <h2 className="font-bold text-blue-900 text-base mb-1"> Rulebook Hub</h2>
      <p className="text-xs text-gray-500 mb-3">Click a regulation to select it for linking.</p>

      <ul className="space-y-2">
        {regulations.map((reg) => (
          <li
            key={reg.id}
            onClick={() => onSelect(reg)}
            className={`border rounded px-3 py-2 cursor-pointer transition-colors ${
              selected?.id === reg.id
                ? "border-blue-500 bg-blue-50"
                : "border-gray-200 hover:bg-gray-50"
            }`}
          >
            <p className="font-semibold text-sm text-blue-900">{reg.name}</p>
            <p className="text-xs text-gray-500 mt-0.5">{reg.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RulebookHub;
