const customers = [
  { id: 1, name: "John Doe", email: "john@example.com", status: "Active" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", status: "Active" },
  {
    id: 3,
    name: "Michael Lee",
    email: "michael@example.com",
    status: "Inactive",
  },
];

export default function CustomersPage() {
  return (
    <>
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Customers</h1>

      <div className="bg-white rounded-xl shadow-md p-6">
        <table className="w-full text-sm">
          <thead className="text-gray-500 border-b">
            <tr>
              <th className="py-3 text-left">Name</th>
              <th className="py-3 text-left">Email</th>
              <th className="py-3 text-left">Status</th>
            </tr>
          </thead>

          <tbody>
            {customers.map((c) => (
              <tr key={c.id} className="border-b last:border-none">
                <td className="py-3 text-gray-800 font-medium">{c.name}</td>
                <td className="py-3 text-gray-600">{c.email}</td>
                <td className="py-3">
                  <span
                    className={`px-2 py-1 rounded text-xs font-medium ${
                      c.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    {c.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
