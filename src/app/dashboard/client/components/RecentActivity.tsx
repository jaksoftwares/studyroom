"use client";

const activities = [
  { action: "Submitted", detail: "Machine Learning Report", time: "2 hours ago" },
  { action: "Payment Received", detail: "$150 for Writing Task", time: "Yesterday" },
  { action: "Reviewed", detail: "History Essay (4.8⭐)", time: "3 days ago" },
];

export default function RecentActivity() {
  return (
    <section className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
      <ul className="space-y-4">
        {activities.map((activity, index) => (
          <li key={index} className="flex justify-between p-3 bg-gray-100 rounded-lg">
            <div>
              <span className="font-medium">{activity.action}</span>: {activity.detail}
            </div>
            <span className="text-gray-500 text-sm">{activity.time}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
