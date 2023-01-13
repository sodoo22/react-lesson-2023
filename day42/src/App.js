import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  // const [firstname, setFirstname] = useState("");
  // const [lastname, setLastname] = useState("");
  // const [password, setPassword] = useState("");
  // const [conpassword, setConPassword] = useState("");

  function handleRegister(event) {
    event.preventDefault();
    console.log("Clicked");

    const user = {
      firstname: event.target.firstname.value,
      lastname: event.target.lastname.value,
      password: event.target.password.value,
      conpassword: event.target.conpassword.value,
    };

    setUsers([...users, user]);
    console.log(users);
  }

  return (
    <div className="App">
      <h1>Day-42-</h1>
      <form onSubmit={handleRegister} className="formClass">
        <div>
          <label htmlFor="">Firs Name</label>
          <input type="text" name="firstname" />
        </div>
        <div>
          <label htmlFor="">Last Name</label>
          <input type="text" name="lastname" />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input type="text" name="password" />
        </div>
        <div>
          <label htmlFor="">Confirm Password</label>
          <input type="text" name="conpassword" />
        </div>
        <button>Register</button>
        <input type="submit" value="Submit"></input>
        {/* <button onClick={handleRegister}>Register</button> */}
      </form>
      <h2> User Preview</h2>
      {users.map((u) => {
        return (
          <div>
            <div>{u.firstname}</div>
            <div>{u.lastname}</div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
