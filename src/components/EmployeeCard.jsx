
import "../styles/EmployeeCard.css";

function EmployeeCard({ name, email, designation, department, id }) {

  return (

    <div className="employee-card">

      <div className="employee-card-header">
        <div className="employee-info">
          <h3>{name}</h3>
          <p>{designation}</p>
        </div>
      </div>

      <hr />

      <div className="employee-details">
        <p>Employee ID: {id}</p>
        <p>{email}</p>
        <p>{department}</p>
      </div>

    </div>

  );

}

export default EmployeeCard;
