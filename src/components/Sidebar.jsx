"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Sidebar({ open, onClose }) {
  const pathname = usePathname();

  const linkClass = (path) =>
    `block px-3 py-2 rounded-lg text-sm font-medium transition ${
      pathname === path
        ? "bg-indigo-50 text-indigo-600"
        : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
    }`;

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden md:block w-64 bg-white border-r px-4 py-6">
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

      {/* Mobile sidebar */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="fixed inset-0 bg-black/40 z-40 md:hidden"
            />

            {/* Drawer */}
            <motion.aside
              initial={{ x: -260 }}
              animate={{ x: 0 }}
              exit={{ x: -260 }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 left-0 z-50 w-64 h-full bg-white px-4 py-6 md:hidden"
            >
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl font-bold text-gray-900">Admin</h2>
                <button
                  onClick={onClose}
                  className=" text-gray-800 p-2 rounded-lg hover:bg-gray-100"
                >
                  <X size={20} />
                </button>
              </div>

              <nav className="space-y-2">
                <Link
                  href="/dashboard"
                  onClick={onClose}
                  className={linkClass("/dashboard")}
                >
                  Dashboard
                </Link>
                <Link
                  href="/orders"
                  onClick={onClose}
                  className={linkClass("/orders")}
                >
                  Orders
                </Link>
                <Link
                  href="/customers"
                  onClick={onClose}
                  className={linkClass("/customers")}
                >
                  Customers
                </Link>
                <Link
                  href="/settings"
                  onClick={onClose}
                  className={linkClass("/settings")}
                >
                  Settings
                </Link>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
