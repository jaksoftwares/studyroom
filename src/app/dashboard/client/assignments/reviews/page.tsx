"use client";

import FeedbackList from "./FeedbackList";

export default function FeedbackPage() {
  return (
    <section className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">⭐ Feedback & Reviews</h1>
      <p className="text-gray-600 mb-6">View feedback from tutors and rate completed assignments.</p>

      {/* Feedback List Component */}
      <FeedbackList />
    </section>
  );
}
