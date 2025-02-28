"use client";

import { ClipboardList, DollarSign, Star, CheckCircle } from "lucide-react";

const stats = [
  { label: "Total Assignments", value: 24, icon: ClipboardList, color: "bg-blue-600" },
  { label: "Earnings", value: "$1,250", icon: DollarSign, color: "bg-green-600" },
  { label: "Average Rating", value: "4.8", icon: Star, color: "bg-yellow-500" },
  { label: "Completed Tasks", value: 18, icon: CheckCircle, color: "bg-purple-600" },
];

export default function StatsOverview() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div key={index} className="flex items-center p-4 bg-white rounded-xl shadow-md">
          <div className={`p-3 rounded-lg text-white ${stat.color}`}>
            <stat.icon className="w-6 h-6" />
          </div>
          <div className="ml-4">
            <p className="text-gray-500 text-sm">{stat.label}</p>
            <h3 className="text-xl font-semibold">{stat.value}</h3>
          </div>
        </div>
      ))}
    </section>
  );
}
