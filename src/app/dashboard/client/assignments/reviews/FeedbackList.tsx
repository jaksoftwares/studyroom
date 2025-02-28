"use client";

import FeedbackCard from "./FeedbackCard";

const feedbackData = [
  {
    id: 1,
    title: "Cybersecurity Case Study",
    feedback: "Great work! Your analysis was deep and well-structured.",
    rating: 4.5,
    tutor: "Dr. James Doe",
    date: "Feb 28, 2025",
  },
  {
    id: 2,
    title: "Machine Learning Report",
    feedback: "Needs improvement in data explanation. Revise sections 3 & 4.",
    rating: 3.5,
    tutor: "Prof. Linda Smith",
    date: "March 3, 2025",
  },
];

export default function FeedbackList() {
  return (
    <div className="space-y-6">
      {feedbackData.map((feedback) => (
        <FeedbackCard key={feedback.id} feedback={feedback} />
      ))}
    </div>
  );
}
