"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { name: "Dashboard", href: "/dashboard/client" },
  { name: "Assignments", href: "/dashboard/client/assignments" },
  { name: "Payments", href: "/dashboard/client/payments" },
  { name: "Reviews", href: "/dashboard/client/reviews" },
  { name: "Support", href: "/dashboard/client/support" },
];

export default function DashboardNav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-lg font-bold text-blue-600">StudyRoom</h1>
      <div className="hidden md:flex space-x-6">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} className="text-gray-700 hover:text-blue-600">
            {link.name}
          </Link>
        ))}
      </div>
      <button className="md:hidden" onClick={() => setOpen(!open)}>
        {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>
      {open && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden flex flex-col items-center space-y-4 p-4">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-gray-700 hover:text-blue-600">
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
