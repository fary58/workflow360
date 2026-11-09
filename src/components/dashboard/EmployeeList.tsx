import type { Employee } from "@/types/user";
interface EmployeeListProps {
  employees : Employee[]
}

function EmployeeList({ employees }: EmployeeListProps ) {
  return (
    <div>
      {employees.length > 0 ? (
        <div>
          {employees.map((employee) => (
            <p key={employee.id}> {employee.name} - {employee.role}</p>
          ))}
        </div>
      ) : (
        <h1>No employees found</h1>
      )}
    </div>
  );
}

export default EmployeeList;
