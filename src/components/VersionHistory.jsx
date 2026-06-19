
import React from "react";

function VersionHistory({ history }) {
  // Show only the last 5 snapshots (top of the stack)
  const last5 = history.slice(0, 5);

  return (
    <div className="bg-white border border-gray-200 rounded shadow-sm p-4 mb-4">
      <h2 className="font-bold text-blue-900 text-base mb-1"> Version History</h2>
      <p className="text-xs text-gray-500 mb-3">
        <strong>Stack (LIFO):</strong> newest version at the top.
      </p>

      {last5.length === 0 && (
        <p className="text-xs text-gray-400">No snapshots yet. Click "Save Snapshot" to begin.</p>
      )}

      <ul className="space-y-1">
        {last5.map((snap, index) => (
          <li
            key={snap.id}
            className="flex items-center justify-between border border-gray-100 rounded px-3 py-1.5 bg-gray-50"
          >
            <span className="text-xs text-gray-600">
              {index === 0 && <span className="font-bold text-blue-800">▶ </span>}
              {snap.label}
            </span>
            <span className="text-xs text-gray-400">{snap.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VersionHistory;
