
import EmployeeCard from "./EmployeeCard";

function EmployeeList() {

  // Dummy Employee Data

  const employees = [

    {
      id: 1,
      name: "Priya",
      email: "priya@company.com",
      designation: "HR Executive",
      department: "Human Resources",
      status: "Active"
    },

    {
      id: 2,
      name: "Arun Kumar",
      email: "arun@company.com",
      designation: "Frontend Developer",
      department: "IT",
      status: "Active"
    },

    {
      id: 3,
      name: "Rahul",
      email: "rahul@company.com",
      designation: "Backend Developer",
      department: "Development",
      status: "Inactive"
    }

  ];

  return (

    <div className="employee-list">

      {employees.map((key) => (

        <EmployeeCard
          key={key.id}
          employee={key}
        />

      ))}

    </div>

  );

}

export default EmployeeList;
