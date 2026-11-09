import Sidebar from "@/components/dashboard/Sidebar";
import UserProfile from "@/components/dashboard/UserProfile";
import type { User, Employee } from "@/types/user";
import EmployeeList from "@/components/dashboard/EmployeeList";

const newUser: User = {
  id: 1,
  name: "Farrukh",
  email: "farrukh@gmail.com",
  role: "Manager",
};

const employees: Employee [] = [
  { id: 1, name: "Farrukh", role: "Manager" },
  { id: 2, name: "Ahmed", role: "Employee" },
  { id: 3, name: "John", role: "Admin" },
  { id: 4, name: "Ali", role: "Employee" },
  { id: 5, name: "David", role: "Manager" },
];

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />
      <UserProfile user={newUser} />
      <EmployeeList employees={employees} />

      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>

        <p className="mt-2 text-slate-500">
          Welcome to WorkFlow360. Here's your overview.
        </p>
      </main>
    </div>
  );
}
