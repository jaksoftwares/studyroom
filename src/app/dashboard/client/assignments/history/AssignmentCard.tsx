export default function AssignmentCard({ assignment }: { assignment: { id: number; title: string; status: string; submissionDate: string; tutor: string; grade: string; feedback: string } }) {
    return (
      <div className="p-4 rounded-lg shadow-md border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800">{assignment.title}</h3>
        <p className="text-sm text-gray-500">Submitted on: {assignment.submissionDate}</p>
        <p className="text-sm text-gray-500">Reviewed by: {assignment.tutor}</p>
  
        <div className={`mt-2 px-3 py-1 inline-block text-sm rounded-lg ${
          assignment.status === "Completed" ? "bg-green-100 text-green-600" :
          assignment.status === "Pending" ? "bg-yellow-100 text-yellow-600" :
          "bg-red-100 text-red-600"
        }`}>
          {assignment.status}
        </div>
  
        <p className="mt-2 text-gray-700">📌 Feedback: {assignment.feedback}</p>
  
        {assignment.status === "Rejected" && (
          <button className="mt-3 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">
            Resubmit Assignment
          </button>
        )}
      </div>
    );
  }
  