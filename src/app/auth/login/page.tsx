"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, Facebook} from "lucide-react";
import Image from "next/image";



export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="space-y-6">
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900">Welcome Back</h2>
        <p className="text-gray-600 mt-2">Login to continue to StudyRoom</p>
      </div>

      {/* Login Form */}
      <form className="space-y-4">
        {/* Email Input */}
        <div>
          <label className="block text-gray-700 font-medium">Email</label>
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
          />
        </div>

        {/* Password Input */}
        <div>
          <label className="block text-gray-700 font-medium">Password</label>
          <div className="relative">
            <input 
              type={showPassword ? "text" : "password"} 
              placeholder="Enter your password" 
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
            />
            <button 
              type="button" 
              onClick={() => setShowPassword(!showPassword)} 
              className="absolute inset-y-0 right-3 flex items-center text-gray-500"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

        {/* Remember Me & Forgot Password */}
        <div className="flex justify-between items-center text-sm">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            Remember me
          </label>
          <Link href="/auth/reset-password" className="text-blue-600 hover:underline">
            Forgot password?
          </Link>
        </div>

        {/* Submit Button */}
        <button className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition">
          Sign In
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
        <button className="w-full flex items-center justify-center border p-3 rounded-lg hover:bg-gray-100 transition">
          <Facebook size={20} className="text-blue-600 mr-2" />
          Continue with Facebook
        </button>
      </div>

      {/* Sign Up Link */}
      <div className="text-center text-sm">
        <span className="text-gray-600">Don&apos;t have an account?</span>
        <Link href="/auth/signup" className="text-blue-600 font-semibold ml-1 hover:underline">
          Sign up
        </Link>
      </div>
    </div>
  );
}
