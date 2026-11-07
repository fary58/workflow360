import Sidebar from "@/components/dashboard/Sidebar";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />

      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-slate-900">
          Dashboard
        </h1>

        <p className="mt-2 text-slate-500">
          Welcome to WorkFlow360. Here's your overview.
        </p>
      </main>
    </div>
  );
}