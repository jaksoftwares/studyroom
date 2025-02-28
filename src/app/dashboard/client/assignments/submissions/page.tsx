"use client";

import SubmissionForm from "./SubmissionForm";
import SubmissionList from "./SubmissionCard";

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
        <SubmissionList />
      </div>
    </section>
  );
}
