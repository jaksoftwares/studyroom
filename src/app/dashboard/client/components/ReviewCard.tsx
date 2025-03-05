"use client";

import { Star } from "lucide-react";

type ReviewCardProps = {
  reviewer: string;
  rating: number; // Ensures rating is a number
  comment: string;
};

export default function ReviewCard({ reviewer, rating, comment }: ReviewCardProps) {
  return (
    <div className="bg-white shadow-md p-4 rounded-lg">
      <h3 className="font-semibold">{reviewer}</h3>
      <div className="flex items-center space-x-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className={`w-4 h-4 ${i < rating ? "fill-yellow-500 stroke-yellow-500" : "fill-gray-300 stroke-gray-300"}`} />
        ))}
      </div>
      <p className="text-gray-500 text-sm">{comment}</p>
    </div>
  );
}
