"use client";

import { useState } from "react";
import type { Employee } from "@/types/user";

interface EmployeeListProps {
  employees: Employee[];
}

function EmployeeList({ employees }: EmployeeListProps) {
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [role, setRole] = useState<"all" | "admin" | "manager" | "employee">(
    "all",
  );

  const filteredEmployees = employees.filter((employee) => {
    const query = search.toLowerCase();

    return (
      employee.name.toLowerCase().includes(query) ||
      employee.email.toLowerCase().includes(query)
    );
  });

  const roleFilteredEmployees = filteredEmployees.filter((employee) => {
    if (role === "all") return true;

    return employee.role.toLowerCase() === role;
  });

  const sortedEmployees = [...roleFilteredEmployees].sort((a, b) => {
    const comparison = a.name.localeCompare(b.name);
    return sortOrder === "asc" ? comparison : -comparison;
  });

  return (
    <div className="max-w-md mx-auto p-4 space-y-4">
      {/* Search Bar */}
      <div className="relative">
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full ps-9 pe-3 py-2 text-sm bg-white border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none"
          placeholder="Search employees by name or email..."
        />
      </div>
      <select
        onChange={(e) => setSortOrder(e.target.value as "asc" | "desc")}
        value={sortOrder}
      >
        <option value="asc">A–Z</option>
        <option value="desc">Z–A</option>
      </select>

      <select
        onChange={(e) =>
          setRole(e.target.value as "all" | "admin" | "manager" | "employee")
        }
        value={role}
      >
        <option value="all">All</option>
        <option value="admin">Admin</option>
        <option value="manager">Manager</option>
        <option value="employee">Employee</option>
      </select>

      {/* Employee List */}
      {sortedEmployees.length > 0 ? (
        <div className="space-y-3">
          {sortedEmployees.map((employee) => (
            <div
              key={employee.id}
              className="p-3 bg-white border border-gray-200 rounded-lg"
            >
              <p className="font-medium text-slate-900">{employee.name}</p>
              <p className="text-sm text-slate-500">{employee.email}</p>
              <p className="text-sm text-slate-500">{employee.role}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-sm text-slate-500 py-6">
          No employees found.
        </p>
      )}
    </div>
  );
}

export default EmployeeList;
