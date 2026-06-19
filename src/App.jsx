
import React, { useState, useEffect } from "react";
import { initialClauses } from "./data/sampleData";

import Navbar           from "./components/Navbar";
import ContractEditor   from "./components/ContractEditor";
import LegalWordIndex   from "./components/LegalWordIndex";
import VersionHistory   from "./components/VersionHistory";
import ReviewQueue      from "./components/ReviewQueue";
import RiskScoreCalculator from "./components/RiskScoreCalculator";
import RulebookHub      from "./components/RulebookHub";
import RegulatoryLinker from "./components/RegulatoryLinker";
import DataStructuresCard from "./components/DataStructuresCard";

function App() {
  // ─── Contract clauses state ──────────────────────────────────────────────
  // Load from localStorage if available, else use sample data
  const [clauses, setClauses] = useState(() => {
    const saved = localStorage.getItem("lexslate_clauses");
    return saved ? JSON.parse(saved) : initialClauses;
  });

  // Save clauses to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("lexslate_clauses", JSON.stringify(clauses));
  }, [clauses]);

  // ─── STACK: Undo history ─────────────────────────────────────────────────
  // DATA STRUCTURE: Stack (LIFO — Last In, First Out)
  // We store snapshots of the clauses array.
  // push  = add new snapshot to front of array (index 0 = top of stack)
  // pop   = take snapshot from front (undo)
  const [history, setHistory] = useState([]);

  // Push current clauses to history stack
  function saveSnapshot() {
    const snapshot = {
      id: Date.now(),
      label: `Snapshot at ${new Date().toLocaleTimeString()}`,
      time: new Date().toLocaleTimeString(),
      clauses: JSON.parse(JSON.stringify(clauses)), // deep copy
    };
    setHistory((prev) => [snapshot, ...prev]); // push to top of stack
  }

  // Pop top of stack and restore
  function handleUndo() {
    if (history.length === 0) return;
    const [top, ...rest] = history;  // pop from top
    setClauses(top.clauses);         // restore
    setHistory(rest);                // update stack
  }

  // Edit a single clause by id
  function handleEdit(id, newContent) {
    setClauses((prev) =>
      prev.map((c) => (c.id === id ? { ...c, content: newContent } : c))
    );
  }

  // ─── Search state ─────────────────────────────────────────────────────────
  const [search, setSearch] = useState("");

  // ─── Selected regulation (for Regulatory Linker) ──────────────────────────
  const [selectedRegulation, setSelectedRegulation] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* ── TOP NAVBAR ── */}
      <Navbar
        onUndo={handleUndo}
        canUndo={history.length > 0}
        historyCount={history.length}
        search={search}
        onSearchChange={setSearch}
      />

      {/* ── MAIN CONTENT ── */}
      <div className="max-w-screen-xl mx-auto px-4 py-4">

        {/* Three-column layout */}
        <div className="grid grid-cols-12 gap-4 mb-4">

          {/* LEFT COLUMN — Rulebook Hub + Legal Word Index + Version History */}
          <div className="col-span-3">
            <RulebookHub
              onSelect={setSelectedRegulation}
              selected={selectedRegulation}
            />
            <LegalWordIndex />
            <VersionHistory history={history} />
          </div>

          {/* CENTER COLUMN — Contract Editor */}
          <div className="col-span-6">
            <ContractEditor
              clauses={clauses}
              onEdit={handleEdit}
              onSaveSnapshot={saveSnapshot}
              search={search}
            />
          </div>

          {/* RIGHT COLUMN — Risk Score + Regulatory Linker */}
          <div className="col-span-3">
            <RiskScoreCalculator clauses={clauses} />
            <RegulatoryLinker
              clauses={clauses}
              selectedRegulation={selectedRegulation}
            />
          </div>
        </div>

        {/* BOTTOM — Review Queue */}
        <div className="mb-4">
          <ReviewQueue clauses={clauses} />
        </div>

        {/* BOTTOM — Data Structures Summary Card */}
        <DataStructuresCard />
      </div>
    </div>
  );
}

export default App;
