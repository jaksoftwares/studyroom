"use client";

import AssignmentCard from "./AssignmentCard";

const assignments = [
  { id: 1, title: "Data Structures Report", status: "Pending", dueDate: "March 5, 2025" },
  { id: 2, title: "Machine Learning Paper", status: "Under Review", dueDate: "March 3, 2025" },
  { id: 3, title: "Cybersecurity Case Study", status: "Completed", dueDate: "Feb 28, 2025" },
];

export default function AssignmentList() {
  return (
    <div className="space-y-6">
      {/* Pending Assignments */}
      <div>
        <h2 className="text-xl font-semibold text-yellow-600 mb-2">⏳ Pending</h2>
        {assignments.filter(a => a.status === "Pending").map(assignment => (
          <AssignmentCard key={assignment.id} assignment={assignment} />
        ))}
      </div>

      {/* Under Review Assignments */}
      <div>
        <h2 className="text-xl font-semibold text-blue-600 mb-2">🔍 Under Review</h2>
        {assignments.filter(a => a.status === "Under Review").map(assignment => (
          <AssignmentCard key={assignment.id} assignment={assignment} />
        ))}
      </div>

      {/* Completed Assignments */}
      <div>
        <h2 className="text-xl font-semibold text-green-600 mb-2">✅ Completed</h2>
        {assignments.filter(a => a.status === "Completed").map(assignment => (
          <AssignmentCard key={assignment.id} assignment={assignment} />
        ))}
      </div>
    </div>
  );
}
