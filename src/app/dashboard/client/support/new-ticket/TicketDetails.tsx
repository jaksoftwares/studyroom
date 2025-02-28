export default function TicketDetails({ ticket }: { ticket: { id: number; subject: string; status: string; date: string } }) {
    return (
      <div className="p-4 border rounded-lg flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold">{ticket.subject}</h3>
          <p className="text-sm text-gray-500">Date: {ticket.date}</p>
        </div>
        <span
          className={`px-3 py-1 text-sm rounded-lg ${
            ticket.status === "Resolved" ? "bg-green-100 text-green-600" : "bg-yellow-100 text-yellow-600"
          }`}
        >
          {ticket.status}
        </span>
      </div>
    );
  }
  