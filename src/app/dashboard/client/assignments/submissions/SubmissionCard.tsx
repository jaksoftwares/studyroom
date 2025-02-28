import React from "react";

interface Submission {
  id: number;
  title: string;
  date: string;
  status: string;
}

interface SubmissionCardProps {
  submission: Submission;
}

const statusColors: { [key: string]: string } = {
  Submitted: "border-blue-500 text-blue-600 bg-blue-100",
  "Under Review": "border-yellow-500 text-yellow-600 bg-yellow-100",
  Approved: "border-green-500 text-green-600 bg-green-100",
  Rejected: "border-red-500 text-red-600 bg-red-100",
};

export default function SubmissionCard({ submission }: SubmissionCardProps) {
  if (!submission) {
    return <p className="text-red-500">Error: Submission data is missing.</p>;
  }

  return (
    <div className={`p-4 rounded-lg shadow-md border-l-4 ${statusColors[submission.status] || "border-gray-300"}`}>
      <h3 className="text-lg font-semibold">{submission.title}</h3>
      <p className="text-sm text-gray-600">Submitted on: {submission.date}</p>
      <span className={`text-xs font-semibold px-2 py-1 rounded ${statusColors[submission.status] || "bg-gray-200"}`}>
        {submission.status}
      </span>
    </div>
  );
}
