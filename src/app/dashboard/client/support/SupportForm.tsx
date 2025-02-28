"use client";

import { useState } from "react";

export default function SupportForm() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    alert("Support request submitted successfully!");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg mb-6">
      <h2 className="text-xl font-semibold mb-3">Submit a Support Request</h2>
      
      <input
        type="email"
        className="border p-2 w-full mb-3 rounded-lg"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="text"
        className="border p-2 w-full mb-3 rounded-lg"
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />

      <textarea
        className="border p-2 w-full mb-3 rounded-lg"
        placeholder="Describe your issue..."
        rows={4}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700" onClick={handleSubmit}>
        Submit Request
      </button>
    </div>
  );
}
