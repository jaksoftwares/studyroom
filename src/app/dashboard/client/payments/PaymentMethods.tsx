"use client";

export default function PaymentMethods() {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg mb-6">
      <h2 className="text-xl font-semibold mb-3">Saved Payment Methods</h2>
      <p className="text-gray-600 mb-3">Manage your payment methods for quick transactions.</p>

      <div className="space-y-3">
        <div className="flex items-center justify-between border-b pb-2">
          <span>💳 Visa - **** 1234</span>
          <button className="text-red-500">Remove</button>
        </div>
        <div className="flex items-center justify-between border-b pb-2">
          <span>📱 M-Pesa - 07****5678</span>
          <button className="text-red-500">Remove</button>
        </div>
      </div>

      <button className="mt-3 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
        Add New Payment Method
      </button>
    </div>
  );
}
