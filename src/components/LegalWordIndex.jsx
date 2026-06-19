
import React, { useState } from "react";
import { legalKeywordMap } from "../data/sampleData";

function LegalWordIndex() {
  const [search, setSearch] = useState("");

  // Convert the HashMap object to an array of { keyword, clauseId } for display
  const allKeywords = Object.entries(legalKeywordMap).map(([keyword, clauseId]) => ({
    keyword,
    clauseId,
  }));

  // Filter by search input
  const filtered = allKeywords.filter((item) =>
    item.keyword.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white border border-gray-200 rounded shadow-sm p-4 mb-4">
      <h2 className="font-bold text-blue-900 text-base mb-1"> Legal Word Index</h2>
      <p className="text-xs text-gray-500 mb-3">
        <strong>HashMap:</strong> keyword maps to clause number for fast lookup.
      </p>

      <input
        type="text"
        placeholder="Search keyword..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border border-gray-300 rounded px-2 py-1 text-sm w-full mb-3 focus:outline-none focus:border-blue-400"
      />

      <table className="w-full text-sm">
        <thead>
          <tr className="bg-gray-50 text-left text-xs text-gray-500 uppercase">
            <th className="py-1.5 px-2">Keyword</th>
            <th className="py-1.5 px-2">Clause #</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((item) => (
            <tr key={item.keyword} className="border-t border-gray-100">
              <td className="py-1.5 px-2 font-medium">{item.keyword}</td>
              <td className="py-1.5 px-2 text-blue-800 font-semibold">clause {item.clauseId}</td>
            </tr>
          ))}
          {filtered.length === 0 && (
            <tr>
              <td colSpan={2} className="py-2 px-2 text-gray-400 text-xs">No results found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default LegalWordIndex;
