export default function FeedbackCard({ feedback }: { feedback: { id: number; title: string; feedback: string; rating: number; tutor: string; date: string } }) {
    return (
      <div className="p-4 rounded-lg shadow-md border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800">{feedback.title}</h3>
        <p className="text-sm text-gray-500">Reviewed by: {feedback.tutor} on {feedback.date}</p>
        <p className="mt-2 text-gray-700">{feedback.feedback}</p>
        <div className="mt-2 flex items-center">
          <span className="text-yellow-500 font-bold">{feedback.rating} / 5 ⭐</span>
        </div>
  
        {/* Review Button */}
        <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Leave a Review
        </button>
      </div>
    );
  }
  