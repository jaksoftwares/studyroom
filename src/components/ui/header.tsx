"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X, User } from "lucide-react";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname(); // Get current route for active link styling

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Pricing", href: "/pricing" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50 border-b border-gray-200">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo Section */}
        <Link href="/" className="text-2xl font-bold text-blue-600 flex items-center">
          <User className="h-8 w-8 mr-2 text-blue-600" />
          StudyRoom
        </Link>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative transition-colors duration-300 text-gray-700 hover:text-blue-600 ${
                pathname === link.href ? "text-blue-600 font-semibold" : ""
              }`}
            >
              {link.name}
              {pathname === link.href && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600"></span>
              )}
            </Link>
          ))}
        </nav>

        {/* Authentication & User Menu */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="/auth/login"
            className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
          >
            Login
          </Link>
          <Link
            href="/auth/signup"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden focus:outline-none" onClick={() => setMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && <MobileMenu isOpen={isMenuOpen} setIsOpen={setMenuOpen} />}
    </header>
  );
}
