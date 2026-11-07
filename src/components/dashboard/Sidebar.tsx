"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  CalendarDays,
  ClipboardCheck,
  AlertTriangle,
  CheckSquare,
  BarChart3,
  Settings,
} from "lucide-react";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Employees", href: "/dashboard/employees", icon: Users },
  { name: "Shifts", href: "/dashboard/shifts", icon: CalendarDays },
  { name: "Attendance", href: "/dashboard/attendance", icon: ClipboardCheck },
  { name: "Incidents", href: "/dashboard/incidents", icon: AlertTriangle },
  { name: "Tasks", href: "/dashboard/tasks", icon: CheckSquare },
  { name: "Reports", href: "/dashboard/reports", icon: BarChart3 },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex min-h-screen w-64 flex-col border-r bg-white px-5 py-6">
      <div className="mb-10">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">
          WorkFlow<span className="text-blue-600">360</span>
        </h1>
        <p className="mt-1 text-xs text-slate-500">
          Workforce Management
        </p>
      </div>

      <nav className="flex-1 space-y-2">
        {navigation.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                active
                  ? "bg-blue-50 text-blue-700"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              <Icon size={19} />
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="border-t pt-4">
        <Link
          href="/dashboard/settings"
          className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-100"
        >
          <Settings size={19} />
          Settings
        </Link>
      </div>
    </aside>
  );
}