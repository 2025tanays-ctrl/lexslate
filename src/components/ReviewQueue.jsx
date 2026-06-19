
import React, { useState } from "react";

// Status badge colors
const statusColor = {
  Pending:   "bg-gray-100 text-gray-600",
  Reviewing: "bg-yellow-100 text-yellow-700",
  Reviewed:  "bg-green-100 text-green-700",
};

function ReviewQueue({ clauses }) {
  // queue is our array acting as a FIFO queue
  // Each item: { id, clauseTitle, status }
  const [queue, setQueue] = useState([]);
  const [selectedClauseId, setSelectedClauseId] = useState("");

  // Enqueue — add to the BACK of the queue
  function addToQueue() {
    if (!selectedClauseId) return;
    const clause = clauses.find((c) => c.id === parseInt(selectedClauseId));
    if (!clause) return;

    const newItem = {
      id: Date.now(),
      clauseTitle: clause.title,
      status: "Pending",
    };

    setQueue((prev) => [...prev, newItem]); // Add to back = enqueue
    setSelectedClauseId("");
  }

  // Dequeue-style: find the first "Pending" item and move it to "Reviewing"
  function processNext() {
    setQueue((prev) => {
      const idx = prev.findIndex((item) => item.status === "Pending");
      if (idx === -1) return prev;
      const updated = [...prev];
      updated[idx] = { ...updated[idx], status: "Reviewing" };
      return updated;
    });
  }

  // Mark a "Reviewing" item as "Reviewed"
  function markReviewed(id) {
    setQueue((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status: "Reviewed" } : item))
    );
  }

  const pendingCount   = queue.filter((i) => i.status === "Pending").length;
  const reviewingCount = queue.filter((i) => i.status === "Reviewing").length;
  const reviewedCount  = queue.filter((i) => i.status === "Reviewed").length;

  return (
    <div className="bg-white border border-gray-200 rounded shadow-sm p-4">
      <h2 className="font-bold text-blue-900 text-base mb-1">📋 Review Queue</h2>
      <p className="text-xs text-gray-500 mb-3">
        <strong>Queue (FIFO):</strong> first clause added = first clause processed.
      </p>

      {/* Add to queue */}
      <div className="flex gap-2 mb-3">
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
          onClick={addToQueue}
          className="px-3 py-1.5 bg-blue-800 text-white text-sm rounded hover:bg-blue-900"
        >
          + Add to Queue
        </button>
        <button
          onClick={processNext}
          disabled={pendingCount === 0}
          className={`px-3 py-1.5 text-sm rounded border ${
            pendingCount > 0
              ? "bg-white border-blue-800 text-blue-800 hover:bg-blue-50"
              : "bg-gray-50 border-gray-200 text-gray-400 cursor-not-allowed"
          }`}
        >
          Process Next
        </button>
      </div>

      {/* Stats */}
      <div className="flex gap-3 mb-3 text-xs">
        <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded">Pending: {pendingCount}</span>
        <span className="bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded">Reviewing: {reviewingCount}</span>
        <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded">Reviewed: {reviewedCount}</span>
      </div>

      {/* Queue table */}
      {queue.length === 0 ? (
        <p className="text-xs text-gray-400">Queue is empty. Add a clause to begin.</p>
      ) : (
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50 text-left text-xs text-gray-500 uppercase">
              <th className="py-1.5 px-2">#</th>
              <th className="py-1.5 px-2">Clause</th>
              <th className="py-1.5 px-2">Status</th>
              <th className="py-1.5 px-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {queue.map((item, idx) => (
              <tr key={item.id} className="border-t border-gray-100">
                <td className="py-1.5 px-2 text-gray-400">{idx + 1}</td>
                <td className="py-1.5 px-2">{item.clauseTitle}</td>
                <td className="py-1.5 px-2">
                  <span className={`px-2 py-0.5 rounded text-xs font-medium ${statusColor[item.status]}`}>
                    {item.status}
                  </span>
                </td>
                <td className="py-1.5 px-2">
                  {item.status === "Reviewing" && (
                    <button
                      onClick={() => markReviewed(item.id)}
                      className="text-xs text-green-700 border border-green-300 px-2 py-0.5 rounded hover:bg-green-50"
                    >
                      Mark Reviewed
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ReviewQueue;
