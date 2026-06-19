# LexSlate – Legal Contract Management System

## Overview

LexSlate is a React.js-based Legal Contract Management System designed to help lawyers create, edit, review, and manage digital contracts efficiently. The application demonstrates the practical use of Data Structures such as HashMap, Stack, and Queue in a real-world legal workflow.

The system allows users to maintain contract versions, search legal terms, review clauses, calculate risk scores, and link contract clauses to relevant regulations.

---

## Features

### Legal Word Index

Maps important legal keywords to the clauses in which they appear, allowing fast keyword-based searching.

### Contract Undo System

Maintains contract version history and enables users to restore previous versions using a Stack-based approach.

### Review Queue

Allows contract clauses to be added to a review workflow and processed in First-In-First-Out (FIFO) order.

### Risk Score Calculator

Analyzes contract content using predefined legal risk keywords and calculates an estimated compliance risk score.

### Rulebook Hub

Provides access to legal regulations and compliance references such as GDPR, HIPAA, and Employment Law.

### Regulatory Linker

Links contract clauses to relevant regulations to improve compliance tracking.

### Formatting Safety

Detects formatting issues and prevents invalid content from affecting the application.

### Local Storage Persistence

Automatically saves contract data to browser localStorage so user changes remain available after page refresh.

---

## Data Structures Used

### HashMap

Used in the Legal Word Index to map legal keywords to corresponding contract clauses.

Example:

GDPR → Clause 8
Liability → Clause 6
Breach → Clause 5

### Stack

Used in Version History and Undo functionality.

Operations:

* Push → Save Snapshot
* Pop → Undo Latest Change

### Queue

Used in the Review Queue feature.

Operations:

* Enqueue → Add Clause to Review
* Dequeue → Process Next Clause

---

## Technologies Used

* React.js
* JavaScript (ES6+)
* Vite
* Tailwind CSS
* HTML5
* CSS3
* Local Storage API

---

## Project Structure

src/

├── components/

│   ├── Navbar.jsx

│   ├── ContractEditor.jsx

│   ├── LegalWordIndex.jsx

│   ├── VersionHistory.jsx

│   ├── ReviewQueue.jsx

│   ├── RiskScoreCalculator.jsx

│   ├── RulebookHub.jsx

│   ├── RegulatoryLinker.jsx

│   └── DataStructuresCard.jsx

│

├── data/

│   └── sampleData.js

│

├── App.jsx

└── main.jsx

---

## React Concepts Used

* Functional Components
* JSX
* Props
* useState Hook
* useEffect Hook
* Conditional Rendering
* Event Handling
* Controlled Components
* Component-Based Architecture
* One-Way Data Flow

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open the application in your browser:

```bash
http://localhost:5173
```

---

## Future Improvements

* Database Integration
* User Authentication
* Real-Time Collaboration
* AI-Based Legal Risk Analysis
* Advanced Compliance Checking
* Cloud Storage Support

---

## Learning Outcomes

This project demonstrates:

* Practical implementation of React.js concepts
* State management using React Hooks
* Component-based application architecture
* Real-world applications of Stack, Queue, and HashMap
* Contract management workflow design
* Frontend application development using modern JavaScript technologies

---

## Author

Tanay Siddharth Shelar

B.Tech Computer Science & Engineering

ITM Skills University, Kharghar

live link:- https://lexslate-p1edt293t-2025tanays-ctrls-projects.vercel.app/
