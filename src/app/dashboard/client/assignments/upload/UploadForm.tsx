"use client";

import { useState } from "react";
import UploadProgress from "./UploadProgress";

export default function UploadForm() {
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (!file) return alert("Please select a file to upload.");
    
    setUploading(true);
    setProgress(0);

    // Simulating upload progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setUploading(false);
          alert("Upload Complete!");
          return 100;
        }
        return prev + 20;
      });
    }, 500);
  };

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-2xl">
      <label className="block text-lg font-semibold text-gray-800 mb-2">Assignment Title</label>
      <input
        type="text"
        className="w-full p-2 border border-gray-300 rounded-lg mb-4"
        placeholder="Enter assignment title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label className="block text-lg font-semibold text-gray-800 mb-2">Description</label>
      <textarea
        className="w-full p-2 border border-gray-300 rounded-lg mb-4"
        placeholder="Describe your assignment..."
        rows={4}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>

      {/* File Upload Section */}
      <div className="border-2 border-dashed border-gray-300 p-6 text-center rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
        <input type="file" className="hidden" onChange={handleFileChange} id="fileInput" />
        <label htmlFor="fileInput" className="cursor-pointer text-gray-600">
          {file ? file.name : "Click to upload or drag & drop your file here"}
        </label>
      </div>

      {/* Upload Button */}
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-4 w-full hover:bg-blue-700"
        onClick={handleUpload}
        disabled={uploading}
      >
        {uploading ? "Uploading..." : "Upload Assignment"}
      </button>

      {/* Upload Progress Bar */}
      {uploading && <UploadProgress progress={progress} />}
    </div>
  );
}
