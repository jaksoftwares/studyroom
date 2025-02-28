"use client";

const tasks = [
  { title: "Research Paper", status: "In Progress", deadline: "Mar 10" },
  { title: "Math Assignment", status: "Pending", deadline: "Mar 15" },
  { title: "History Essay", status: "Completed", deadline: "Mar 05" },
];

export default function TaskTracker() {
  return (
    <section className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-lg font-semibold mb-4">Task Tracker</h2>
      <ul className="space-y-4">
        {tasks.map((task, index) => (
          <li key={index} className="flex justify-between p-3 bg-gray-100 rounded-lg">
            <span className="font-medium">{task.title}</span>
            <div className="flex space-x-4">
              <span className={`px-2 py-1 text-xs rounded-md ${task.status === "Completed" ? "bg-green-500 text-white" : task.status === "In Progress" ? "bg-blue-500 text-white" : "bg-yellow-500 text-white"}`}>
                {task.status}
              </span>
              <span className="text-gray-500 text-sm">Due: {task.deadline}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
