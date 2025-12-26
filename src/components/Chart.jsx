"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { motion } from "framer-motion";

const data = [
  { day: "Jun 1", users: 3200, revenue: 420 },
  { day: "Jun 3", users: 2800, revenue: 380 },
  { day: "Jun 6", users: 4100, revenue: 610 },
  { day: "Jun 9", users: 2600, revenue: 290 },
  { day: "Jun 12", users: 3900, revenue: 520 },
  { day: "Jun 15", users: 4300, revenue: 680 },
  { day: "Jun 18", users: 3000, revenue: 410 },
  { day: "Jun 21", users: 4700, revenue: 740 },
  { day: "Jun 24", users: 3400, revenue: 500 },
  { day: "Jun 27", users: 4900, revenue: 820 },
  { day: "Jun 30", users: 3600, revenue: 560 },
];

export default function Chart() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-xl shadow-md p-6"
    >
      <h2 className="text-lg  text-gray-800 font-semibold mb-4">
        Recent Daily Traffic & Revenue
      </h2>

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="usersGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#2563eb" stopOpacity={0.35} />
                <stop offset="95%" stopColor="#2563eb" stopOpacity={0.05} />
              </linearGradient>

              <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.35} />
                <stop offset="95%" stopColor="#10b981" stopOpacity={0.05} />
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="day" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip />
            <Legend />

            <Area
              type="monotone"
              dataKey="users"
              stroke="#2563eb"
              fill="url(#usersGradient)"
              strokeWidth={2}
            />

            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#10b981"
              fill="url(#revenueGradient)"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}
