
import "../styles/EmployeeCard.css";

function EmployeeCard({ employee }) {

  return (

    <div className="employee-card">

      <div className="employee-card-header">
        <div className="employee-info">
          <h3>{employee.name}</h3>
          <p>{employee.designation}</p>
        </div>
      </div>

      <hr />

      <div className="employee-details">
        <p>Employee ID: {employee.id}</p>
        <p>{employee.email}</p>
        <p>{employee.department}</p>
      </div>

    </div>

  );

}

export default EmployeeCard;
