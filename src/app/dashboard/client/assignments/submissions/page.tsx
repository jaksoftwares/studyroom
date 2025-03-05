"use client";

import SubmissionForm from "./SubmissionForm";
import SubmissionList from "./SubmissionList"; // Import correctly

const submissions = [
  { id: 1, title: "AI Research Paper", date: "Feb 25, 2025", status: "Submitted" },
  { id: 2, title: "Data Science Report", date: "Feb 20, 2025", status: "Under Review" },
];

export default function SubmissionsPage() {
  return (
    <section className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">📤 Assignment Submissions</h1>
      <p className="text-gray-600 mb-6">Upload and manage your assignment submissions.</p>

      {/* Submission Form */}
      <SubmissionForm />

      {/* List of Submitted Assignments */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Your Submissions</h2>
        <SubmissionList submissions={submissions} />  {/* ✅ Pass submissions */}
      </div>
    </section>
  );
}
