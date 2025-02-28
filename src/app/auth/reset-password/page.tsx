"use client";

import { useState } from "react";
import Link from "next/link";

export default function PasswordReset() {
  const [email, setEmail] = useState("");

  return (
    <div className="space-y-6">
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900">Reset Your Password</h2>
        <p className="text-gray-600 mt-2">
          Enter your email and we&apos;ll send you a link to reset your password.
        </p>
      </div>

      {/* Reset Form */}
      <form className="space-y-4">
        {/* Email Input */}
        <div>
          <label className="block text-gray-700 font-medium">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Submit Button */}
        <button className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700">
          Send Reset Link
        </button>
      </form>

      {/* Back to Login */}
      <div className="text-center text-sm">
        <span className="text-gray-600">Remember your password?</span>
        <Link href="/auth/login" className="text-blue-600 font-semibold ml-1 hover:underline">
          Login
        </Link>
      </div>
    </div>
  );
}
