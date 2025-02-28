"use client";

import { useState } from "react";

export default function Filters() {
  const [status, setStatus] = useState("all");

  return (
    <div className="flex space-x-4 mb-6">
      <select
        className="border p-2 rounded-lg"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="all">All Assignments</option>
        <option value="completed">Completed</option>
        <option value="pending">Pending</option>
        <option value="rejected">Rejected</option>
      </select>
    </div>
  );
}
