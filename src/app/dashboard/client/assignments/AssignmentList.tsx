"use client";

import AssignmentItem from "./AssignmentItem";

const assignments = [
  { id: 1, title: "Machine Learning Report", status: "In Progress", due: "Mar 10", file: "ml_report.pdf" },
  { id: 2, title: "Math Homework", status: "Pending", due: "Mar 15", file: "math_homework.docx" },
  { id: 3, title: "History Essay", status: "Completed", due: "Mar 05", file: "history_essay.pdf" },
];

export default function AssignmentList() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-lg font-semibold mb-4">Your Assignments</h2>
      <div className="space-y-4">
        {assignments.map((assignment) => (
          <AssignmentItem key={assignment.id} assignment={assignment} />
        ))}
      </div>
    </div>
  );
}
