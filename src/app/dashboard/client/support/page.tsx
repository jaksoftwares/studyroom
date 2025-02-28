"use client";

import Link from "next/link";

export default function SupportPage() {
  return (
    <section className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">🛠️ Support & Help Center</h1>
      <p className="text-gray-600 mb-6">Need help? Choose an option below to get assistance.</p>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Submit a Support Ticket */}
        <Link href="/dashboard/client/support/new-ticket">
          <div className="p-6 bg-blue-100 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer">
            <h2 className="text-xl font-semibold text-blue-800">📩 Submit a Support Ticket</h2>
            <p className="text-gray-600 mt-2">Describe your issue and get assistance from our team.</p>
          </div>
        </Link>

        {/* View Past Tickets */}
        <Link href="/dashboard/client/support/tickets">
          <div className="p-6 bg-yellow-100 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer">
            <h2 className="text-xl font-semibold text-yellow-800">📜 View Past Tickets</h2>
            <p className="text-gray-600 mt-2">Check the status of your previous support requests.</p>
          </div>
        </Link>

        {/* FAQs */}
        <Link href="/dashboard/client/support/faqs">
          <div className="p-6 bg-green-100 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer">
            <h2 className="text-xl font-semibold text-green-800">❓ Frequently Asked Questions</h2>
            <p className="text-gray-600 mt-2">Find answers to common queries instantly.</p>
          </div>
        </Link>

        {/* Live Chat */}
        <Link href="/dashboard/client/support/live-chat">
          <div className="p-6 bg-red-100 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer">
            <h2 className="text-xl font-semibold text-red-800">💬 Live Chat Support</h2>
            <p className="text-gray-600 mt-2">Chat with our support team for immediate assistance.</p>
          </div>
        </Link>
      </div>
    </section>
  );
}
