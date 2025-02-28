"use client";

import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import DashboardSidebar from "./components/DashboardSidebar";
import DashboardHeader from "./components/DashboardHeader";
import "@/styles/globals.css";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <SessionProvider>
      <html lang="en">
        <body className="bg-gray-100">
          <div className="flex h-screen w-full">
            {/* Sidebar */}
            <DashboardSidebar />

            {/* Main Content */}
            <div className="flex flex-col flex-1">
              {/* Header */}
              <header>
                <DashboardHeader />
              </header>

              {/* Page Content */}
              <main className="p-6 overflow-y-auto flex-1">{children}</main>
            </div>
          </div>
        </body>
      </html>
    </SessionProvider>
  );
}
