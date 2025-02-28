"use client";

import PaymentHistory from "./PaymentHistory";
import PaymentMethods from "./PaymentMethods";
import MakePayment from "./MakePayment";

export default function PaymentsPage() {
  return (
    <section className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">💳 Payments & Invoices</h1>
      <p className="text-gray-600 mb-6">Manage your payments, view invoices, and add payment methods.</p>

      {/* Make a New Payment */}
      <MakePayment />

      {/* Payment Methods */}
      <PaymentMethods />

      {/* Payment History */}
      <PaymentHistory />
    </section>
  );
}
