"use client";

import { motion } from "framer-motion";

export default function TopControls() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mb-6"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-5">
        <div>
          <h1 className="text-xl md:text-2xl font-semibold text-gray-900 leading-tight">
            Web Analytics Dashboard
          </h1>
          <p className="text-sm text-gray-600">
            Monitor traffic, engagement, and revenue
          </p>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <button className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 active:scale-[0.98] transition text-sm font-medium">
            Explore
          </button>
          <button className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 active:scale-[0.98] transition text-sm font-medium">
            Set up
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <select className="bg-white rounded-xl border px-4 py-2.5 text-sm text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
          <option>Jun 1, 2025 – Jul 7, 2025</option>
        </select>

        <select className="bg-white rounded-xl border px-4 py-2.5 text-sm text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
          <option>Session channel group</option>
          <option>Organic</option>
          <option>Paid</option>
          <option>Referral</option>
        </select>

        <select className="bg-white rounded-xl border px-4 py-2.5 text-sm text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
          <option>Device category</option>
          <option>Desktop</option>
          <option>Mobile</option>
          <option>Tablet</option>
        </select>
      </div>
    </motion.div>
  );
}
