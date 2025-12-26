"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import { Menu } from "lucide-react";

export default function AdminLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    // Root background (prevents white gaps on mobile)
    <div className="min-h-screen bg-gray-100">
      <div className="flex min-h-screen relative">
        {/* Sidebar */}
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        {/* Content wrapper */}
        <div className="flex-1 flex flex-col">
          {/* Mobile top bar */}
          <header className="md:hidden flex items-center justify-between bg-white border-b px-4 py-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="p-2 rounded-lg text-gray-800 hover:bg-gray-100 active:scale-95 transition"
            >
              <Menu size={22} />
            </button>

            <span className="text-sm font-semibold text-gray-900">
              Analytics Dashboard
            </span>
          </header>

          {/* Main content */}
          <main className="flex-1 p-4 md:p-6 bg-gray-100">{children}</main>
        </div>
      </div>
    </div>
  );
}
