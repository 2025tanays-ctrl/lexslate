
import React, { useState } from "react";

function RegulatoryLinker({ clauses, selectedRegulation }) {
  const [selectedClauseId, setSelectedClauseId] = useState("");
  // links is an array of { clauseTitle, regulationName }
  const [links, setLinks] = useState([]);

  function handleLink() {
    if (!selectedClauseId || !selectedRegulation) return;

    const clause = clauses.find((c) => c.id === parseInt(selectedClauseId));
    if (!clause) return;

    // Avoid duplicate links
    const alreadyLinked = links.some(
      (l) => l.clauseId === clause.id && l.regulationId === selectedRegulation.id
    );
    if (alreadyLinked) return;

    setLinks((prev) => [
      ...prev,
      {
        clauseId: clause.id,
        clauseTitle: clause.title,
        regulationId: selectedRegulation.id,
        regulationName: selectedRegulation.name,
      },
    ]);
    setSelectedClauseId("");
  }

  return (
    <div className="bg-white border border-gray-200 rounded shadow-sm p-4">
      <h2 className="font-bold text-blue-900 text-base mb-1"> Regulatory Linker</h2>
      <p className="text-xs text-gray-500 mb-3">
        Select a regulation from the Rulebook, then link it to a clause.
      </p>

      {/* Selected regulation display */}
      {selectedRegulation ? (
        <div className="mb-3 bg-blue-50 border border-blue-200 rounded px-3 py-1.5 text-sm text-blue-800">
          Selected regulation: <strong>{selectedRegulation.name}</strong>
        </div>
      ) : (
        <div className="mb-3 bg-gray-50 border border-gray-200 rounded px-3 py-1.5 text-sm text-gray-400">
          No regulation selected. Click one from the Rulebook Hub.
        </div>
      )}

      {/* Clause selector + link button */}
      <div className="flex gap-2 mb-4">
        <select
          value={selectedClauseId}
          onChange={(e) => setSelectedClauseId(e.target.value)}
          className="border border-gray-300 rounded px-2 py-1.5 text-sm flex-1 focus:outline-none"
        >
          <option value="">Select a clause...</option>
          {clauses.map((c) => (
            <option key={c.id} value={c.id}>{c.title}</option>
          ))}
        </select>
        <button
          onClick={handleLink}
          disabled={!selectedClauseId || !selectedRegulation}
          className={`px-3 py-1.5 text-sm rounded ${
            selectedClauseId && selectedRegulation
              ? "bg-blue-800 text-white hover:bg-blue-900"
              : "bg-gray-100 text-gray-400 cursor-not-allowed"
          }`}
        >
          Link
        </button>
      </div>

      {/* Linked pairs */}
      <p className="text-xs font-semibold text-gray-600 mb-1">Linked Pairs:</p>
      {links.length === 0 ? (
        <p className="text-xs text-gray-400">No links created yet.</p>
      ) : (
        <ul className="space-y-1">
          {links.map((link, idx) => (
            <li key={idx} className="flex items-center gap-2 text-xs border border-gray-100 rounded px-2 py-1.5 bg-gray-50">
              <span className="font-medium text-gray-700">{link.clauseTitle}</span>
              <span className="text-gray-400">→</span>
              <span className="font-semibold text-blue-800">{link.regulationName}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default RegulatoryLinker;
