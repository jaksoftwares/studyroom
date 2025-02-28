"use client";

import { useState } from "react";

export default function ReviewForm() {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  const submitReview = () => {
    console.log("Review Submitted:", { rating, review });
    setRating(0);
    setReview("");
  };

  return (
    <div className="p-4 border rounded-lg mt-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-2">Leave a Review</h2>
      
      {/* Rating Selector */}
      <div className="flex space-x-2 mb-3">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            onClick={() => setRating(star)}
            className={`cursor-pointer text-xl ${rating >= star ? "text-yellow-500" : "text-gray-300"}`}
          >
            ⭐
          </span>
        ))}
      </div>

      {/* Review Text Input */}
      <textarea
        className="w-full border p-2 rounded-lg text-gray-700"
        rows={3}
        placeholder="Write your review..."
        value={review}
        onChange={(e) => setReview(e.target.value)}
      ></textarea>

      {/* Submit Button */}
      <button
        onClick={submitReview}
        className="mt-3 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
      >
        Submit Review
      </button>
    </div>
  );
}
