"use client";

import StatsOverview from "./components/StatsOverview";
import TaskTracker from "./components/TaskTracker";
import RecentActivity from "./components/RecentActivity";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Welcome & Quick Actions */}
      <section className="bg-blue-600 text-white p-6 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold">Welcome to Your Dashboard</h1>
        <p className="text-gray-200">Track assignments, payments, and more in one place.</p>
      </section>

      {/* Stats Overview (Assignments, Payments, Reviews, etc.) */}
      <StatsOverview />

      {/* Task Tracker (Upcoming Deadlines, In-progress Tasks) */}
      <TaskTracker />

      {/* Recent Activity (Latest submissions, Payments, etc.) */}
      <RecentActivity />
    </div>
  );
}
