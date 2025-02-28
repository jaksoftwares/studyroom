"use client";

export default function NotificationItem({ message, time }) {
  return (
    <div className="bg-white shadow-md p-4 rounded-lg flex justify-between">
      <p className="text-gray-700">{message}</p>
      <span className="text-gray-500 text-xs">{time}</span>
    </div>
  );
}
