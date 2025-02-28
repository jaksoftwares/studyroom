"use client";

import { useState } from "react";

export default function SubmissionForm() {
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!file || !title) {
      alert("Please provide an assignment title and upload a file.");
      return;
    }
    alert(`Assignment "${title}" submitted successfully!`);
    setFile(null);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-4">
      <div>
        <label className="block text-gray-700 font-semibold mb-2">Assignment Title</label>
        <input
          type="text"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter assignment title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div>
        <label className="block text-gray-700 font-semibold mb-2">Upload File</label>
        <input type="file" className="w-full border p-2 rounded-lg" onChange={handleFileChange} required />
      </div>

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
        Submit Assignment
      </button>
    </form>
  );
}
