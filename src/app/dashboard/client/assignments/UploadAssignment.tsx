"use client";

import { useState } from "react";

export default function UploadAssignment() {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const handleUpload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !file) return alert("Please provide all details.");

    // Upload Logic Here (Backend API)
    console.log("Uploading:", title, file.name);
  };

  return (
    <form onSubmit={handleUpload} className="bg-white p-6 rounded-xl shadow-md mb-6">
      <h2 className="text-lg font-semibold mb-4">Upload New Assignment</h2>
      <input
        type="text"
        placeholder="Assignment Title"
        className="w-full p-2 border rounded-md mb-4"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="file"
        className="w-full p-2 border rounded-md mb-4"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
      />
      <button type="submit" className="bg-blue-600 text-white p-2 rounded-md w-full">Upload</button>
    </form>
  );
}
