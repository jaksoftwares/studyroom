"use client";

import InvoiceCard from "./InvoiceCard";

const paymentHistory = [
  {
    id: 1,
    date: "Feb 25, 2025",
    amount: 50,
    method: "M-Pesa",
    status: "Paid",
  },
  {
    id: 2,
    date: "Feb 15, 2025",
    amount: 30,
    method: "PayPal",
    status: "Paid",
  },
  {
    id: 3,
    date: "Feb 10, 2025",
    amount: 40,
    method: "Visa",
    status: "Failed",
  },
];

export default function PaymentHistory() {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-3">Payment History</h2>

      <div className="space-y-4">
        {paymentHistory.map((payment) => (
          <InvoiceCard key={payment.id} payment={payment} />
        ))}
      </div>
    </div>
  );
}
