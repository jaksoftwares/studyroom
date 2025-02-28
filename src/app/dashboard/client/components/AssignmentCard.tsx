"use client";

export default function AssignmentCard({ title, status, deadline }) {
  return (
    <div className="bg-white shadow-md p-4 rounded-lg border-l-4 border-blue-500">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-500 text-sm">Due: {deadline}</p>
      <span className={`px-2 py-1 text-xs rounded-md ${status === "Completed" ? "bg-green-500 text-white" : "bg-yellow-500 text-white"}`}>
        {status}
      </span>
    </div>
  );
}
