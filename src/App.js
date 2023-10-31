import logo from "./logo.svg";
import { faker } from '@faker-js/faker';
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
      "Salary": 3005
    }
  ]

  function createRandomUser() {
    return {
      userId: faker.string.uuid(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
    };
  }
  
  const USERS = faker.helpers.multiple(createRandomUser, {
    count: 5,
  });

  function editButton(){
    
  }

  function deleteButton(){

  }

  const buttons = {
    editButton : <button className="btn btn-primary" onClick={editButton}>Edit</button>,
    deleteButton: <button className="btn btn-danger" onClick={deleteButton}>Delete</button>
  }

  const tblUser = USERS.map((user, idx) => {
    return (
      <tr key={user.userId}>
        <th>{idx + 1}</th>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>{user.email}</td>
        <td>{buttons.editButton} {buttons.deleteButton}</td>
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
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {tblUser}
        </tbody>
      </table>
    </div>
  );
}

export default App;
