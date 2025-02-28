"use client";

import UploadForm from "./UploadForm";

export default function UploadPage() {
  return (
    <section className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">📤 Upload Assignment</h1>
      <p className="text-gray-600 mb-6">Submit your assignments securely and track their progress.</p>

      {/* Upload Form Component */}
      <UploadForm />
    </section>
  );
}
