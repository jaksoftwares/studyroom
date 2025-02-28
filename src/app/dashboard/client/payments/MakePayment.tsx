"use client";

import { useState } from "react";

export default function MakePayment() {
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("mpesa");

  const handlePayment = () => {
    alert(`Processing payment of $${amount} via ${paymentMethod}`);
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg mb-6">
      <h2 className="text-xl font-semibold mb-3">Make a Payment</h2>
      <input
        type="number"
        className="border p-2 w-full mb-3 rounded-lg"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <select
        className="border p-2 w-full mb-3 rounded-lg"
        value={paymentMethod}
        onChange={(e) => setPaymentMethod(e.target.value)}
      >
        <option value="mpesa">M-Pesa</option>
        <option value="paypal">PayPal</option>
        <option value="stripe">Credit/Debit Card</option>
      </select>

      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700" onClick={handlePayment}>
        Pay Now
      </button>
    </div>
  );
}
