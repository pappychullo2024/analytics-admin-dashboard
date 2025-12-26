"use client";

import { motion } from "framer-motion";

export default function StatsCard({ title, value, change, gradient }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={`rounded-xl p-6 text-white shadow-md ${gradient}`}
    >
      <p className="text-sm opacity-90">{title}</p>

      <div className="mt-3 flex items-end justify-between">
        <h3 className="text-3xl font-semibold tracking-tight">{value}</h3>

        {change && (
          <span className="text-sm font-medium opacity-90">{change}</span>
        )}
      </div>
    </motion.div>
  );
}
