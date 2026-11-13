
import EmployeeList from "./components/EmployeeList";
import "./App.css";
import Header from "./components/Header";

function App() {

  return (

    <div className="app-container">
      <Header/>
      <h1>Employee Details</h1>
      <EmployeeList />
    </div>

  );

}

export default App;
