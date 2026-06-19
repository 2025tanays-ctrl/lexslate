
import React from "react";

function Navbar({ onUndo, canUndo, historyCount, search, onSearchChange }) {
  return (
    <nav className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between shadow-sm">
      {/* Project title */}
      <div>
        <h1 className="text-xl font-bold text-blue-900">⚖ LexSlate</h1>
        <p className="text-xs text-gray-500">Legal Contract Management System </p>
      </div>

      {/* Search bar */}
      <input
        type="text"
        placeholder="Search clauses or keywords..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        className="border border-gray-300 rounded px-3 py-1.5 text-sm w-64 focus:outline-none focus:border-blue-500"
      />

      {/* Undo button */}
      <button
        onClick={onUndo}
        disabled={!canUndo}
        className={`px-4 py-1.5 rounded text-sm font-medium border ${
          canUndo
            ? "bg-blue-800 text-white hover:bg-blue-900 border-blue-800"
            : "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"
        }`}
      >
        ↩ Undo {historyCount > 0 && `(${historyCount})`}
      </button>
    </nav>
  );
}

export default Navbar;
