// ─── SAMPLE CONTRACT CLAUSES (Array / List data structure) ───────────────────
// We store 10 clauses in a plain JavaScript array.
// Each clause has an id, title, and content.

export const initialClauses = [
  {
    id: 1,
    title: "1. Definitions",
    content:
      "In this Agreement, 'Employer' means Hartwell Ltd, 'Employee' means the individual named herein, and 'Effective Date' means the date this Agreement is signed by both parties.",
  },
  {
    id: 2,
    title: "2. Employee Duties",
    content:
      "The Employee agrees to perform the duties of Software Engineer as directed by management. The Employee shall devote their full working hours to the performance of these duties.",
  },
  {
    id: 3,
    title: "3. Confidentiality",
    content:
      "The Employee shall keep all confidential information of the Employer strictly private and shall not disclose any such information to any third party during or after the term of employment.",
  },
  {
    id: 4,
    title: "4. Compensation",
    content:
      "The Employer shall pay the Employee a monthly salary as agreed upon in writing. Salaries will be reviewed annually at the Employer's discretion.",
  },
  {
    id: 5,
    title: "5. Termination",
    content:
      "Either party may terminate this Agreement with 30 days written notice. The Employer may terminate immediately for cause, including breach of this Agreement.",
  },
  {
    id: 6,
    title: "6. Liability",
    content:
      "The liability of the Employer shall be limited to the amount of fees paid in the preceding 12 months. Under no circumstances shall either party be liable for unlimited or consequential damages.",
  },
  {
    id: 7,
    title: "7. Dispute Resolution",
    content:
      "Any dispute arising from this Agreement shall be resolved by arbitration under the rules of the Indian Arbitration Council before resorting to litigation.",
  },
  {
    id: 8,
    title: "8. Data Privacy",
    content:
      "Both parties agree to comply with applicable data protection laws including GDPR. Personal data shall be collected only as necessary and protected against unauthorized access.",
  },
  {
    id: 9,
    title: "9. Governing Law",
    content:
      "This Agreement shall be governed by and construed in accordance with the laws of India. Any legal proceedings shall be conducted in the courts of Mumbai.",
  },
  {
    id: 10,
    title: "10. Signatures",
    content:
      "This Agreement is entered into by the Employer and the Employee. Both parties confirm they have read, understood, and agreed to all terms stated above.",
  },
];

// ─── REGULATIONS (stored as a simple array of objects, like a JSON file) ──────
export const regulations = [
  {
    id: "gdpr",
    name: "GDPR",
    description:
      "General Data Protection Regulation. Governs how personal data of EU citizens must be collected, stored, and processed.",
  },
  {
    id: "hipaa",
    name: "HIPAA",
    description:
      "Health Insurance Portability and Accountability Act. Protects sensitive patient health information in the US.",
  },
  {
    id: "iso27001",
    name: "ISO 27001",
    description:
      "International standard for managing information security. Requires organizations to implement an ISMS.",
  },
  {
    id: "employment",
    name: "Employment Law",
    description:
      "Covers employee rights, minimum wage, working hours, termination rules, and workplace safety obligations.",
  },
  {
    id: "contract",
    name: "Contract Law Basics",
    description:
      "Fundamental principles of contract formation: offer, acceptance, consideration, and legal capacity.",
  },
];

// ─── LEGAL KEYWORD INDEX (HashMap concept) ───────────────────────────────────
// A HashMap stores key–value pairs. Lookup by key is O(1) — very fast.
// Here: keyword (key) → clause id (value)
// In JavaScript we use a plain object as a HashMap.

export const legalKeywordMap = {
  Liability:      6,
  Breach:         5,
  Confidentiality: 3,
  GDPR:           8,
  Arbitration:    7,
};

// ─── RISK KEYWORDS & SCORES ───────────────────────────────────────────────────
export const riskKeywords = {
  liability:  20,
  penalty:    15,
  breach:     10,
  unlimited:  25,
};
