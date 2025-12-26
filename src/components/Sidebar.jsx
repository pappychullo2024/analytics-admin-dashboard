"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const linkClass = (path) =>
    `block px-3 py-2 rounded-lg text-sm font-medium transition ${
      pathname === path
        ? "bg-indigo-50 text-indigo-600"
        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
    }`;

  return (
    <aside className="w-64 bg-white border-r min-h-screen px-4 py-6">
      <h2 className="text-xl font-bold mb-8 text-gray-900">Admin</h2>

      <nav className="space-y-2">
        <Link href="/dashboard" className={linkClass("/dashboard")}>
          Dashboard
        </Link>
        <Link href="/orders" className={linkClass("/orders")}>
          Orders
        </Link>
        <Link href="/customers" className={linkClass("/customers")}>
          Customers
        </Link>
        <Link href="/settings" className={linkClass("/settings")}>
          Settings
        </Link>
      </nav>
    </aside>
  );
}
