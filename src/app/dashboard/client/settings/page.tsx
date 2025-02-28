"use client";

import Link from "next/link";

export default function SettingsPage() {
  return (
    <section className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">⚙️ Settings</h1>
      <p className="text-gray-600 mb-6">Customize your preferences and manage your account settings.</p>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Account Settings */}
        <Link href="/dashboard/client/settings/account">
          <div className="p-6 bg-blue-100 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer">
            <h2 className="text-xl font-semibold text-blue-800">👤 Account Settings</h2>
            <p className="text-gray-600 mt-2">Update your profile details and preferences.</p>
          </div>
        </Link>

        {/* Security Settings */}
        <Link href="/dashboard/client/settings/security">
          <div className="p-6 bg-yellow-100 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer">
            <h2 className="text-xl font-semibold text-yellow-800">🔒 Security</h2>
            <p className="text-gray-600 mt-2">Manage passwords, 2FA, and account security.</p>
          </div>
        </Link>

        {/* Notification Settings */}
        <Link href="/dashboard/client/settings/notifications">
          <div className="p-6 bg-green-100 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer">
            <h2 className="text-xl font-semibold text-green-800">🔔 Notifications</h2>
            <p className="text-gray-600 mt-2">Choose how you receive updates and alerts.</p>
          </div>
        </Link>

        {/* Payment Settings */}
        <Link href="/dashboard/client/settings/payments">
          <div className="p-6 bg-red-100 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer">
            <h2 className="text-xl font-semibold text-red-800">💳 Payment & Billing</h2>
            <p className="text-gray-600 mt-2">Manage payment methods and billing details.</p>
          </div>
        </Link>

        {/* Privacy Settings */}
        <Link href="/dashboard/client/settings/privacy">
          <div className="p-6 bg-purple-100 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer">
            <h2 className="text-xl font-semibold text-purple-800">🔏 Privacy</h2>
            <p className="text-gray-600 mt-2">Control your data sharing and privacy preferences.</p>
          </div>
        </Link>
      </div>
    </section>
  );
}
