"use client";

import Link from "next/link";

export default function AssignmentsPage() {
  return (
    <section className="p-6">
      {/* Page Header */}
      <h1 className="text-3xl font-bold text-gray-800 mb-4">📚 Assignments Dashboard</h1>
      <p className="text-gray-600 mb-6">Manage, track, and review all your assignments in one place.</p>

      {/* Navigation Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <FeatureCard
          title="Upload Assignment"
          description="Submit your assignments securely."
          link="/dashboard/client/assignments/upload"
        />
        <FeatureCard
          title="Track Progress"
          description="Check assignment status and deadlines."
          link="/dashboard/client/assignments/tracking"
        />
        <FeatureCard
          title="Manage Submissions"
          description="View and handle submitted assignments."
          link="/dashboard/client/assignments/submissions"
        />
        <FeatureCard
          title="Reviews & Feedback"
          description="Check instructor feedback and ratings."
          link="/dashboard/client/assignments/reviews"
        />
        <FeatureCard
          title="Assignment History"
          description="View all past completed assignments."
          link="/dashboard/client/assignments/history"
        />
      </div>
    </section>
  );
}

// FeatureCard Component for Navigation
function FeatureCard({ title, description, link }: { title: string; description: string; link: string }) {
  return (
    <Link href={link} className="block bg-white shadow-lg rounded-xl p-6 transition hover:shadow-xl hover:bg-gray-100">
      <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      <p className="text-gray-600 mt-2">{description}</p>
    </Link>
  );
}
