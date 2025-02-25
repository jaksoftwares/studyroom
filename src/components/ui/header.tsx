"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, User } from "lucide-react";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo Section */}
        <Link href="/" className="text-2xl font-bold text-blue-600 flex items-center">
          <User className="h-8 w-8 mr-2 text-blue-600" />
          StudyRoom
        </Link>

        {/* Navigation Links (Hidden on Mobile) */}
        <nav className="hidden md:flex space-x-6 text-gray-700">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <Link href="/services" className="hover:text-blue-600">Services</Link>
          <Link href="/pricing" className="hover:text-blue-600">Pricing</Link>
          <Link href="/about" className="hover:text-blue-600">About</Link>
          <Link href="/contact" className="hover:text-blue-600">Contact</Link>
        </nav>

        {/* Authentication & User Menu */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Temporarily remove or comment out the session-dependent code */}
          {/* {session?.user ? (
            <UserDropdown user={session.user} />
          ) : ( */}
            <>
              <Link href="/auth/login" className="text-gray-700 hover:text-blue-600">Login</Link>
              <Link href="/auth/signup" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Sign Up</Link>
            </>
          {/* )} */}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && <MobileMenu isOpen={isMenuOpen} setIsOpen={setMenuOpen} />}
    </header>
  );
}