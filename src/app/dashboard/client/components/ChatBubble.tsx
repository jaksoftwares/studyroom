"use client";

export default function ChatBubble({ message, isUser }) {
  return (
    <div className={`p-3 rounded-lg ${isUser ? "bg-blue-500 text-white self-end" : "bg-gray-100 text-gray-700 self-start"}`}>
      {message}
    </div>
  );
}
