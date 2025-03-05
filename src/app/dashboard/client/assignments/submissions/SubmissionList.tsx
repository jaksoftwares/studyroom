"use client";

import SubmissionCard from "./SubmissionCard";

// Define prop types
type Submission = {
  id: number;
  title: string;
  date: string;
  status: string;
};

type SubmissionListProps = {
  submissions: Submission[];
};

export default function SubmissionList({ submissions }: SubmissionListProps) {
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
