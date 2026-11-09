import Sidebar from "@/components/dashboard/Sidebar";
import UserProfile from "@/components/dashboard/UserProfile";
import EmployeeList from "@/components/dashboard/EmployeeList";
import StatCard from "@/components/dashboard/StatCard";
import type { User, Employee, StatCard} from "@/types/user";

const newUser: User = {
  id: 1,
  name: "Farrukh",
  email: "farrukh@gmail.com",
  role: "Manager",
};

const employees: Employee[] = [
  { id: 1, name: "Farrukh", role: "Manager" },
  { id: 2, name: "Ahmed", role: "Employee" },
  { id: 3, name: "John", role: "Admin" },
  { id: 4, name: "Ali", role: "Employee" },
  { id: 5, name: "David", role: "Manager" },
];

// const card: StatCard = {
//   title: "Total Employees",
//   value: 125,
//   description: "Currently registered employees",
// };

const cards: StatCard[] = [
  {
    title: "Total Employees",
    value: 125,
    description: "Currently registered employees",
  },
  {
    title: "Active Employees",
    value: 110,
    description: "Employees currently active",
  },
  {
    title: "On Leave",
    value: 8,
    description: "Employees on leave",
  },
  {
    title: "On Shift",
    value: 24,
    description: "Employees on shift",
  },
];

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />
      <main className="flex-1 p-8 space-y-8">
        <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>
        <p className="mt-2 text-slate-500">
          Welcome to WorkFlow360. Here's your overview.
        </p>
        <UserProfile user={newUser} />
        <StatCard cards={cards} />
        <EmployeeList employees={employees} />
      </main>
    </div>
  );
}
