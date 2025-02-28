"use client";

export default function PaymentCard({ amount, date, status }) {
  return (
    <div className="bg-white shadow-md p-4 rounded-lg flex justify-between">
      <div>
        <h3 className="text-lg font-semibold">${amount}</h3>
        <p className="text-gray-500 text-sm">{date}</p>
      </div>
      <span className={`px-2 py-1 text-xs rounded-md ${status === "Paid" ? "bg-green-500 text-white" : "bg-red-500 text-white"}`}>
        {status}
      </span>
    </div>
  );
}
