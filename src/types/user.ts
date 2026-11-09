export type UserRole = "Admin" | "Manager" | "Employee";
export interface User {
  id: number;
  name: string;
  email: string;
  role: UserRole;
}

export interface Employee {
  name: string;
  id: number;
  role: UserRole;
}


export interface StatCard{
title:	string;
value:	number;
description:	string;
}