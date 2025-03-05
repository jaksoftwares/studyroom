"use client";

import Link from "next/link";

interface Assignment {
  id: string;
  title: string;
  due: string;
  status: "Completed" | "In Progress" | "Pending";
}

export default function AssignmentItem({ assignment }: { assignment: Assignment }) {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-100 rounded-lg">
      <div>
        <h3 className="font-medium">{assignment.title}</h3>
        <p className="text-sm text-gray-500">Due: {assignment.due}</p>
      </div>
      <div className="flex space-x-3">
        <span
          className={`px-2 py-1 text-xs rounded-md ${
            assignment.status === "Completed"
              ? "bg-green-500 text-white"
              : assignment.status === "In Progress"
              ? "bg-blue-500 text-white"
              : "bg-yellow-500 text-white"
          }`}
        >
          {assignment.status}
        </span>
        {assignment.status === "Completed" ? (
          <Link href={`/dashboard/client/assignments/${assignment.id}`} className="text-blue-600">
            Download
          </Link>
        ) : (
          <Link href={`/dashboard/client/assignments/${assignment.id}`} className="text-blue-600">
            View
          </Link>
        )}
      </div>
    </div>
  );
}
