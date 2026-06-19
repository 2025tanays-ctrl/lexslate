
import React from "react";
import { riskKeywords } from "../data/sampleData";

function RiskScoreCalculator({ clauses }) {
  // Combine all clause text into one string, lowercase for matching
  const fullText = clauses.map((c) => c.content).join(" ").toLowerCase();

  // Check each risk keyword using the HashMap
  const matches = [];
  let totalScore = 0;

  Object.entries(riskKeywords).forEach(([word, score]) => {
    if (fullText.includes(word)) {
      matches.push({ word, score });
      totalScore += score;
    }
  });

  // Determine risk category
  let category = "Low Risk";
  let categoryColor = "text-green-700 bg-green-50 border-green-200";
  if (totalScore > 50) {
    category = "High Risk";
    categoryColor = "text-red-700 bg-red-50 border-red-200";
  } else if (totalScore > 20) {
    category = "Medium Risk";
    categoryColor = "text-yellow-700 bg-yellow-50 border-yellow-200";
  }

  // Progress bar width (cap at 100%)
  const barWidth = Math.min((totalScore / 80) * 100, 100);
  const barColor = totalScore > 50 ? "bg-red-500" : totalScore > 20 ? "bg-yellow-400" : "bg-green-500";

  return (
    <div className="bg-white border border-gray-200 rounded shadow-sm p-4 mb-4">
      <h2 className="font-bold text-blue-900 text-base mb-3">⚠ Risk Score</h2>

      {/* Score display */}
      <div className={`border rounded px-3 py-2 mb-3 text-center font-bold text-lg ${categoryColor}`}>
        {totalScore} pts — {category}
      </div>

      {/* Progress bar */}
      <div className="h-3 bg-gray-200 rounded overflow-hidden mb-3">
        <div
          className={`h-full rounded transition-all ${barColor}`}
          style={{ width: `${barWidth}%` }}
        />
      </div>
      <div className="flex justify-between text-xs text-gray-400 mb-3">
        <span>0 — Low</span>
        <span>21 — Medium</span>
        <span>51+ — High</span>
      </div>

      {/* Matched keywords */}
      <p className="text-xs font-semibold text-gray-600 mb-1">Detected Keywords:</p>
      {matches.length === 0 ? (
        <p className="text-xs text-gray-400">No risk keywords found.</p>
      ) : (
        <ul className="space-y-1">
          {matches.map((m) => (
            <li key={m.word} className="flex justify-between text-xs border border-gray-100 rounded px-2 py-1 bg-gray-50">
              <span className="capitalize font-medium">{m.word}</span>
              <span className="text-red-600 font-bold">+{m.score}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default RiskScoreCalculator;
