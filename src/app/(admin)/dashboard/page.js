import Sidebar from "@/components/Sidebar";
import StatsCard from "@/components/StatsCard";
import Chart from "@/components/Chart";
import DataTable from "@/components/DataTable";
import TopControls from "@/components/TopControls";

export default function DashboardPage() {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      <main className="flex-1 p-6">
        <h1 className="text-2xl  text-gray-800 font-semibold mb-6">
          Dashboard
        </h1>
        <TopControls />
        {/* Stats */}
        <section className="mb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <StatsCard
              title="Total Users"
              value="99.5K"
              change="+12%"
              gradient="bg-gradient-to-r from-blue-600 to-blue-500"
            />
            <StatsCard
              title="New Users"
              value="70.0K"
              change="+8%"
              gradient="bg-gradient-to-r from-cyan-500 to-sky-500"
            />
            <StatsCard
              title="Sessions"
              value="123.4K"
              change="+15%"
              gradient="bg-gradient-to-r from-emerald-500 to-teal-500"
            />
            <StatsCard
              title="Revenue"
              value="$15.5K"
              change="+10%"
              gradient="bg-gradient-to-r from-purple-500 to-fuchsia-500"
            />
          </div>
        </section>

        {/* Charts */}
        <section className="mb-10">
          <div className="xl:col-span-2">
            <Chart />
          </div>
        </section>

        {/* Table */}
        <section className="mb-10">
          <div>
            <DataTable />
          </div>
        </section>
      </main>
    </div>
  );
}
