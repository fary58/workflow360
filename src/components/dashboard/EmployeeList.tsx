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

  const [currentPage, setCurrentPage] = useState(1);

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

  const employeesPerPage = 5;
  const totalPages = Math.ceil(sortedEmployees.length / employeesPerPage);
  const lastIndex = currentPage * employeesPerPage;
  const firstIndex = lastIndex - employeesPerPage;

  const currentEmployees = sortedEmployees.slice(firstIndex, lastIndex);

  return (
    <div className="max-w-md mx-auto p-4 space-y-4">
      {/* Search Bar */}
      <div className="relative">
        <input
          type="search"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
          className="w-full ps-9 pe-3 py-2 text-sm bg-white border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none"
          placeholder="Search employees by name or email..."
        />
      </div>
      <div className="flex justify-between items-center mt-4">
        <select
          onChange={(e) => setSortOrder(e.target.value as "asc" | "desc")}
          value={sortOrder}
        >
          <option value="asc">A–Z</option>
          <option value="desc">Z–A</option>
        </select>

        <select
 onChange={(e) => {
  setRole(e.target.value as "all" | "admin" | "manager" | "employee");
  setCurrentPage(1);
}}
          value={role}
        >
          <option value="all">All</option>
          <option value="admin">Admin</option>
          <option value="manager">Manager</option>
          <option value="employee">Employee</option>
        </select>
      </div>

      {/* Employee List */}
      {currentEmployees.length > 0 ? (
        <div className="space-y-3">
          {currentEmployees.map((employee) => (
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
      <div className="flex justify-between items-center mt-4">
        <button
          className="px-4 py-2 bg-slate-200 text-slate-700 rounded-lg hover:bg-slate-300 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
        >
          Previous
        </button>

        <button
          disabled={totalPages === currentPage}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          onClick={() => setCurrentPage((prev) => prev + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default EmployeeList;
