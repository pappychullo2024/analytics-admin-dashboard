"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import { Menu } from "lucide-react";

export default function AdminLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100 relative">
      {/* Sidebar */}
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main content */}
      <div className="flex-1">
        {/* Mobile top bar */}
        <div className="md:hidden flex items-center justify-between bg-white border-b px-4 py-3">
          <button
            onClick={() => setSidebarOpen(true)}
            className=" text-gray-800 p-2 rounded-lg hover:bg-gray-100"
          >
            <Menu size={22} />
          </button>
          <span className="text-sm font-semibold text-gray-800">
            Analytics Dashboard
          </span>
        </div>

        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
