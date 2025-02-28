"use client";

import SubmissionCard from "./SubmissionCard";

const submissions = [
  { id: 1, title: "AI Research Paper", date: "Feb 25, 2025", status: "Submitted" },
  { id: 2, title: "Data Science Report", date: "Feb 20, 2025", status: "Under Review" },
];

export default function SubmissionList() {
  return (
    <div className="space-y-4">
      {submissions.length > 0 ? (
        submissions.map((submission) => <SubmissionCard key={submission.id} submission={submission} />)
      ) : (
        <p className="text-gray-500">No submissions yet.</p>
      )}
    </div>
  );
}
