"use client";

type SupportTicketProps = {
  subject: string;
  status: "Resolved" | "Pending" | "Open"; // Ensures status is restricted to specific values
  date: string;
};

export default function SupportTicket({ subject, status, date }: SupportTicketProps) {
  return (
    <div className="bg-white shadow-md p-4 rounded-lg flex justify-between">
      <div>
        <h3 className="font-semibold">{subject}</h3>
        <p className="text-gray-500 text-sm">{date}</p>
      </div>
      <span className={`px-2 py-1 text-xs rounded-md ${status === "Resolved" ? "bg-green-500 text-white" : "bg-yellow-500 text-white"}`}>
        {status}
      </span>
    </div>
  );
}
