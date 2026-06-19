
import React, { useState } from "react";

// Simple HTML tag detection for Formatting Safety
function containsHTML(text) {
  return /<[a-z][\s\S]*>/i.test(text);
}

function ContractEditor({ clauses, onEdit, onSaveSnapshot, search }) {
  const [warning, setWarning] = useState(null);

  // Count total words and characters across all clauses
  const fullText = clauses.map((c) => c.content).join(" ");
  const wordCount = fullText.trim() === "" ? 0 : fullText.trim().split(/\s+/).length;
  const charCount = fullText.length;

  function handleChange(id, newText) {
    // FEATURE 8: Formatting Safety — detect malformed HTML
    if (containsHTML(newText)) {
      setWarning(`⚠ Clause ${id}: HTML tags detected. Showing plain text only.`);
      // Strip tags and use plain text
      const plain = newText.replace(/<[^>]*>/g, "");
      onEdit(id, plain);
    } else {
      setWarning(null);
      onEdit(id, newText);
    }
  }

  // Filter clauses by search term
  const visibleClauses = search
    ? clauses.filter(
        (c) =>
          c.title.toLowerCase().includes(search.toLowerCase()) ||
          c.content.toLowerCase().includes(search.toLowerCase())
      )
    : clauses;

  return (
    <div className="bg-white border border-gray-200 rounded shadow-sm p-4">
      <div className="flex items-center justify-between mb-3">
        <h2 className="font-bold text-blue-900 text-base"> Contract Editor</h2>
        <button
          onClick={onSaveSnapshot}
          className="text-xs px-3 py-1 bg-blue-800 text-white rounded hover:bg-blue-900"
        >
          Save Snapshot
        </button>
      </div>

      {/* Formatting Safety Warning */}
      {warning && (
        <div className="mb-3 bg-yellow-50 border border-yellow-300 text-yellow-800 text-xs px-3 py-2 rounded">
          {warning}
        </div>
      )}

      {/* Word / Char count */}
      <div className="flex gap-4 mb-3 text-xs text-gray-500">
        <span>Words: <strong>{wordCount}</strong></span>
        <span>Characters: <strong>{charCount}</strong></span>
      </div>

      {/* Clause list */}
      <div className="space-y-3 max-h-[500px] overflow-y-auto pr-1">
        {visibleClauses.length === 0 && (
          <p className="text-gray-400 text-sm">No clauses match your search.</p>
        )}
        {visibleClauses.map((clause) => (
          <div key={clause.id} className="border border-gray-200 rounded p-3">
            <p className="font-semibold text-sm text-gray-700 mb-1">{clause.title}</p>
            <textarea
              value={clause.content}
              onChange={(e) => handleChange(clause.id, e.target.value)}
              rows={3}
              className="w-full text-sm border border-gray-200 rounded px-2 py-1.5 resize-none focus:outline-none focus:border-blue-400"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContractEditor;
