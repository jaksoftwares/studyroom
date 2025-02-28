"use client";

import AssignmentList from "../AssignmentList";

export default function TrackingPage() {
  return (
    <section className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">📊 Track Assignments</h1>
      <p className="text-gray-600 mb-6">Monitor the progress of your assignments in real time.</p>

      {/* Assignment List Component */}
      <AssignmentList />
    </section>
  );
}
