"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";

export default function NewPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }
    setError("");
    
    // TODO: Handle API call to update password
    console.log("Password reset successful");

    // Redirect user after success
    router.push("/auth/login");
  };

  return (
    <div className="max-w-md mx-auto space-y-6 p-6 bg-white shadow-lg rounded-xl">
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900">Reset Your Password</h2>
        <p className="text-gray-600 mt-2">Enter a new password to secure your account</p>
      </div>

      {/* New Password Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* New Password */}
        <div>
          <label className="block text-gray-700 font-medium">New Password</label>
          <div className="relative">
            <input
              type={showNewPassword ? "text" : "password"}
              placeholder="Enter a new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="button"
              aria-label="Toggle new password visibility"
              onClick={() => setShowNewPassword(!showNewPassword)}
              className="absolute inset-y-0 right-3 flex items-center text-gray-500"
            >
              {showNewPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block text-gray-700 font-medium">Confirm Password</label>
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm your new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="button"
              aria-label="Toggle confirm password visibility"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute inset-y-0 right-3 flex items-center text-gray-500"
            >
              {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

        {/* Error Message */}
        {error && <p className="text-red-600 text-sm">{error}</p>}

        {/* Submit Button */}
        <button className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition">
          Reset Password
        </button>
      </form>

      {/* Back to Login */}
      <div className="text-center text-sm">
        <p className="text-gray-600">
          Remember your password?
          <a href="/auth/login" className="text-blue-600 font-semibold ml-1 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
