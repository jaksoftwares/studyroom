"use client";

import { useState } from "react";
import Link from "next/link";

export default function EmailConfirmation() {
  const [code, setCode] = useState("");

  return (
    <div className="space-y-6">
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900">Confirm Your Email</h2>
        <p className="text-gray-600 mt-2">
          Enter the 6-digit code we sent to your email to verify your account.
        </p>
      </div>

      {/* Confirmation Form */}
      <form className="space-y-4">
        {/* Code Input */}
        <div>
          <label className="block text-gray-700 font-medium">Verification Code</label>
          <input
            type="text"
            placeholder="Enter 6-digit code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-center tracking-widest"
            maxLength={6}
          />
        </div>

        {/* Submit Button */}
        <button className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700">
          Verify Email
        </button>
      </form>

      {/* Resend Code */}
      <div className="text-center text-sm">
        <span className="text-gray-600">Didn&apos;t receive the code?</span>
        <button className="text-blue-600 font-semibold ml-1 hover:underline">
          Resend Code
        </button>
      </div>

      {/* Back to Login */}
      <div className="text-center text-sm">
        <span className="text-gray-600">Already verified?</span>
        <Link href="/auth/login" className="text-blue-600 font-semibold ml-1 hover:underline">
          Login
        </Link>
      </div>
    </div>
  );
}
