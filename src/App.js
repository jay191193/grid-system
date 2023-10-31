import logo from "./logo.svg";
import "./App.css";

function App() {
  const employees = [
    {
      "SrNo": "1",
      "FirstName": "Jay",
      "LastName": "Ponkia",
      "EmailId": "ponkiajay19@gmail.com",
      "Salary": 2000
    },
    {
      "SrNo": "2",
      "FirstName": "Prince",
      "LastName": "Kumar",
      "EmailId": "princekumar@gmail.com",
      "Salary": 3000
    }
  ]

  const tblEmployees = employees.map((employee, id) => {
    return (
      <tr key={id}>
        <th>{employee.SrNo}</th>
        <td>{employee.FirstName}</td>
        <td>{employee.LastName}</td>
        <td>{employee.EmailId}</td>
        <td>{employee.Salary}</td>
      </tr>
    );
  });

  return (
    <div className="container">
      <h1>Employee Details</h1>
      <button className="btn btn-primary">Add Employee</button>
      <hr />
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Email</th>
            <th scope="col">Salary</th>
          </tr>
        </thead>
        <tbody>
          {tblEmployees}
        </tbody>
      </table>
    </div>
  );
}

export default App;
