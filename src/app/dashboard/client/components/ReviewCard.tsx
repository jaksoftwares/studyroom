"use client";

import { Star } from "lucide-react";

export default function ReviewCard({ reviewer, rating, comment }) {
  return (
    <div className="bg-white shadow-md p-4 rounded-lg">
      <h3 className="font-semibold">{reviewer}</h3>
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className={`w-4 h-4 ${i < rating ? "text-yellow-500" : "text-gray-300"}`} />
        ))}
      </div>
      <p className="text-gray-500 text-sm">{comment}</p>
    </div>
  );
}
