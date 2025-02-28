"use client";

import { useState } from "react";

export default function LiveChat() {
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState<{ sender: string; text: string }[]>([]);

  const sendMessage = () => {
    if (!message.trim()) return;
    setChatHistory([...chatHistory, { sender: "You", text: message }, { sender: "Support", text: "We are reviewing your issue." }]);
    setMessage("");
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-3">💬 Live Chat</h2>

      <div className="h-40 overflow-y-auto border p-2 mb-3 rounded-lg bg-gray-50">
        {chatHistory.map((chat, index) => (
          <p key={index} className={`text-sm p-1 ${chat.sender === "You" ? "text-blue-600 text-right" : "text-gray-700"}`}>
            <strong>{chat.sender}:</strong> {chat.text}
          </p>
        ))}
      </div>

      <input
        type="text"
        className="border p-2 w-full mb-3 rounded-lg"
        placeholder="Type your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700" onClick={sendMessage}>
        Send
      </button>
    </div>
  );
}
