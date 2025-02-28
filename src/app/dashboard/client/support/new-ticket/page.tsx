"use client";

import TicketDetails from "./TicketDetails";

const tickets = [
  {
    id: 101,
    subject: "Payment not reflecting",
    status: "Resolved",
    date: "Feb 20, 2025",
  },
  {
    id: 102,
    subject: "Assignment submission error",
    status: "Pending",
    date: "Feb 22, 2025",
  },
];

export default function SupportTickets() {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg mb-6">
      <h2 className="text-xl font-semibold mb-3">Your Support Tickets</h2>

      <div className="space-y-4">
        {tickets.map((ticket) => (
          <TicketDetails key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
}
