"use client";

import { useRouter } from "next/router";

const assignmentData = {
  id: 1,
  title: "Machine Learning Report",
  description: "Write a detailed report on supervised and unsupervised learning.",
  status: "In Progress",
  due: "Mar 10",
  file: "ml_report.pdf",
};

export default function AssignmentDetails() {
  const router = useRouter();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{assignmentData.title}</h1>
      <p className="text-gray-500">{assignmentData.description}</p>
      <p className="text-gray-500 mt-2">Due Date: {assignmentData.due}</p>

      {assignmentData.status === "Completed" && (
        <a href={`/uploads/${assignmentData.file}`} download className="bg-blue-600 text-white p-2 rounded-md mt-4 inline-block">
          Download Assignment
        </a>
      )}

      <button onClick={() => router.back()} className="mt-4 text-blue-600 underline">Go Back</button>
    </div>
  );
}
