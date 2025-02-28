"use client";

import { Bell, UserCircle } from "lucide-react";
import { useSession } from "next-auth/react";

export default function DashboardHeader() {
  const { data: session } = useSession();

  return (
    <header className="flex justify-between items-center bg-white shadow-md p-4">
      <h1 className="text-lg font-semibold">Dashboard</h1>
      <div className="flex items-center space-x-4">
        <Bell className="w-6 h-6 text-gray-700 hover:text-blue-600 cursor-pointer" />
        {session ? (
          <div className="flex items-center space-x-2">
            <UserCircle className="w-8 h-8 text-gray-700" />
            <span className="text-gray-700">{session.user?.name || session.user?.email}</span>
          </div>
        ) : (
          <span className="text-gray-500">Guest</span>
        )}
      </div>
    </header>
  );
}
