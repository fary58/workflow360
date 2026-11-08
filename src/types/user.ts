export type UserRole = "Admin" | "Manager" | "Employee";
export interface User {
  id: number;
  name: string;
  email: string;
  role: UserRole;
}
