"use client";

import { useState } from "react";
import Link from "next/link";
import { Home, FileText, Wallet, MessageSquare, Settings, Menu, X } from "lucide-react";
import clsx from "clsx";

const menuItems = [
  { name: "Dashboard", href: "/dashboard/client", icon: Home },
  { name: "Assignments", href: "/dashboard/client/assignments", icon: FileText },
  { name: "Payments", href: "/dashboard/client/payments", icon: Wallet },
  { name: "Support", href: "/dashboard/client/support", icon: MessageSquare },
  { name: "Settings", href: "/dashboard/client/settings", icon: Settings },
];

export default function DashboardSidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <aside className={clsx(
      "h-full bg-white shadow-lg transition-all duration-300 ease-in-out",
      isOpen ? "w-64 p-6" : "w-16 p-2"
    )}>
      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="p-2 text-gray-700 hover:text-blue-600 focus:outline-none">
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Navigation */}
      <nav className="mt-6 space-y-4">
        {menuItems.map((item, index) => (
          <Link 
            key={index} 
            href={item.href} 
            className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 p-2 rounded-md hover:bg-gray-100"
          >
            <item.icon className="w-5 h-5" />
            {isOpen && <span className="transition-opacity duration-300">{item.name}</span>}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
