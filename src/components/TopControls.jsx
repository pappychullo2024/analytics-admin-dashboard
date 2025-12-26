"use client";

import { motion } from "framer-motion";

export default function TopControls() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mb-8"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">
            Web Analytics Dashboard
          </h1>
          <p className="text-sm text-gray-500">
            Monitor traffic, engagement, and revenue
          </p>
        </div>

        <div className="flex gap-3">
          <button className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 active:scale-[0.98] transition text-sm font-medium">
            Explore dashboards
          </button>
          <button className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 active:scale-[0.98] transition text-sm font-medium">
            Set up dashboard
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <select className="text-gray-400 bg-white rounded-xl border px-4 py-3 text-sm shadow-sm focus:outline-none">
          <option>Jun 1, 2025 – Jul 7, 2025</option>
        </select>

        <select className="text-gray-400 bg-white rounded-xl border px-4 py-3 text-sm shadow-sm focus:outline-none">
          <option>Session channel group</option>
          <option>Organic</option>
          <option>Paid</option>
          <option>Referral</option>
        </select>

        <select className="text-gray-400 bg-white rounded-xl border px-4 py-3 text-sm shadow-sm focus:outline-none">
          <option>Device category</option>
          <option>Desktop</option>
          <option>Mobile</option>
          <option>Tablet</option>
        </select>
      </div>
    </motion.div>
  );
}
