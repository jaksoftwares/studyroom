"use client";

import AssignmentList from "./AssignmentList";
import Filters from "./Filters";

export default function AssignmentHistoryPage() {
  return (
    <section className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">📜 Assignment History</h1>
      <p className="text-gray-600 mb-6">Review past assignments, submission dates, and feedback.</p>

      {/* Filters Component */}
      <Filters />

      {/* Assignment List Component */}
      <AssignmentList />
    </section>
  );
}
