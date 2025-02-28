export default function AssignmentCard({ assignment }: { assignment: { id: number; title: string; status: string; dueDate: string } }) {
    const statusColors: { [key: string]: string } = {
      "Pending": "bg-yellow-100 text-yellow-800",
      "Under Review": "bg-blue-100 text-blue-800",
      "Completed": "bg-green-100 text-green-800",
    };
  
    return (
      <div className={`p-4 rounded-lg shadow-md border-l-4 ${statusColors[assignment.status]}`}>
        <h3 className="text-lg font-semibold">{assignment.title}</h3>
        <p className="text-sm text-gray-600">Due Date: {assignment.dueDate}</p>
        <span className={`text-xs font-semibold px-2 py-1 rounded ${statusColors[assignment.status]}`}>
          {assignment.status}
        </span>
      </div>
    );
  }
  