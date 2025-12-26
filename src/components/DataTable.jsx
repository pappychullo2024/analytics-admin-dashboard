"use client";
const orders = [
  {
    id: "#1001",
    customer: "John Doe",
    date: "2025-01-10",
    status: "Completed",
    amount: "$120",
  },
  {
    id: "#1002",
    customer: "Jane Smith",
    date: "2025-01-11",
    status: "Pending",
    amount: "$75",
  },
  {
    id: "#1003",
    customer: "Michael Lee",
    date: "2025-01-12",
    status: "Completed",
    amount: "$230",
  },
  {
    id: "#1004",
    customer: "Sarah Brown",
    date: "2025-01-13",
    status: "Cancelled",
    amount: "$90",
  },
];

export default function DataTable() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-lg font-semibold mb-4 text-gray-900">
        Recent Orders
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="border-b text-gray-500">
            <tr>
              <th className="py-3">Order ID</th>
              <th className="py-3">Customer</th>
              <th className="py-3">Date</th>
              <th className="py-3">Status</th>
              <th className="py-3 text-right">Amount</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b last:border-none">
                <td className="py-3  text-gray-800 font-medium">{order.id}</td>
                <td className="py-3 text-gray-800 font-medium">
                  {order.customer}
                </td>
                <td className="py-3 text-gray-600">{order.date}</td>
                <td className="py-3">
                  <span
                    className={`px-2 py-1 rounded text-xs font-medium ${
                      order.status === "Completed"
                        ? "bg-green-100 text-green-700"
                        : order.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="py-3  text-gray-800 text-right">
                  {order.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
