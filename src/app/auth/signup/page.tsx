"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Eye, EyeOff } from "lucide-react";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="space-y-6">
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900">Create an Account</h2>
        <p className="text-gray-600 mt-2">Sign up to start your journey</p>
      </div>

      {/* Signup Form */}
      <form className="space-y-4">
        {/* Full Name */}
        <div>
          <label className="block text-gray-700 font-medium">Full Name</label>
          <input 
            type="text" 
            placeholder="Enter your full name" 
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-700 font-medium">Email</label>
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
            required
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-gray-700 font-medium">Password</label>
          <div className="relative">
            <input 
              type={showPassword ? "text" : "password"} 
              placeholder="Create a password" 
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
              required
            />
            <button 
              type="button" 
              aria-label="Toggle password visibility"
              onClick={() => setShowPassword(!showPassword)} 
              className="absolute inset-y-0 right-3 flex items-center text-gray-500"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block text-gray-700 font-medium">Confirm Password</label>
          <div className="relative">
            <input 
              type={showConfirmPassword ? "text" : "password"} 
              placeholder="Confirm your password" 
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

        {/* Terms Agreement */}
        <div className="flex items-center text-sm">
          <input type="checkbox" className="mr-2" required />
          <span>
            I agree to the{" "}
            <Link href="/terms" className="text-blue-600 hover:underline">
              Terms & Conditions
            </Link>
          </span>
        </div>

        {/* Submit Button */}
        <button className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition">
          Sign Up
        </button>
      </form>

      {/* OR Divider */}
      <div className="flex items-center justify-center space-x-2">
        <span className="h-[1px] bg-gray-300 flex-1"></span>
        <span className="text-gray-500 text-sm">OR</span>
        <span className="h-[1px] bg-gray-300 flex-1"></span>
      </div>

      {/* Social Logins */}
      <div className="flex flex-col space-y-3">
        <button className="w-full flex items-center justify-center border p-3 rounded-lg hover:bg-gray-100 transition">
          <Image src="/google-icon.svg" alt="Google" width={20} height={20} className="mr-2" />
          Continue with Google
        </button>
      </div>

      {/* Already Have an Account */}
      <div className="text-center text-sm">
        <span className="text-gray-600">Already have an account?</span>
        <Link href="/auth/login" className="text-blue-600 font-semibold ml-1 hover:underline">
          Login
        </Link>
      </div>
    </div>
  );
}
