"use client";

import AssignmentCard from "./AssignmentCard";

const assignmentHistory = [
  {
    id: 1,
    title: "Cybersecurity Analysis",
    status: "Completed",
    submissionDate: "Feb 20, 2025",
    tutor: "Dr. James Doe",
    grade: "A",
    feedback: "Great work, well-researched analysis.",
  },
  {
    id: 2,
    title: "Data Science Project",
    status: "Pending",
    submissionDate: "March 3, 2025",
    tutor: "Prof. Linda Smith",
    grade: "N/A",
    feedback: "Awaiting review.",
  },
  {
    id: 3,
    title: "AI Ethics Research",
    status: "Rejected",
    submissionDate: "Feb 15, 2025",
    tutor: "Dr. Robert Lee",
    grade: "N/A",
    feedback: "Resubmit with clearer arguments.",
  },
];

export default function AssignmentList() {
  return (
    <div className="space-y-6">
      {assignmentHistory.map((assignment) => (
        <AssignmentCard key={assignment.id} assignment={assignment} />
      ))}
    </div>
  );
}
