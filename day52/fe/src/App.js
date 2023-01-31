import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const URL = "http://localhost:8080/users";

  const [users, setUsers] = useState();
  const [currentUser, serCurrentUser] = useState({
    id: "",
    username: "",
    age: "",
  });

  useEffect(() => {
    fetchAllData();
  }, []);

  async function fetchAllData() {
    const FETCHED_DATA = await fetch(URL); // Response
    const FETCHED_JSON = await FETCHED_DATA.json(); // {status: 'success, data: [{id: ...}]}
    console.log(FETCHED_JSON);
    setUsers(FETCHED_JSON.data);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const postData = {
      username: e.target.username.value,
      age: e.target.age.value,
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    };

    const FETCHED_DATA = await fetch(URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    console.log(FETCHED_JSON);
    // fetchAllData();
    // const users = FETCHED_JSON.data;
    setUsers(FETCHED_JSON.data);
  }

  async function handleDelete(id) {
    console.log(id);
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: id,
      }),
    };
    const FETCHED_DATA = await fetch(URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setUsers(FETCHED_JSON.data);
  }

  function name(params) {}

  return (
    <div className="App">
      <h1>Day-52 - NodeJS FS Module</h1>
      <h3>Create User Form</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">
          User Name:
          <input
            type="test"
            name="username"
            value={currentUser.username}
            onChange={handleNameChange}
          />
        </label>
        <br />
        <label htmlFor="">
          Age:
          <input
            type="test"
            name="age"
            value={currentUser.age}
            onChange={handleAgeChange}
          />
        </label>
        <br />
        <button>Submit</button>
      </form>
      <h3>User List</h3>
      {users &&
        users.map((user, index) => {
          return (
            <p key={index}>
              {user.username} : {user.age}
              <button onClick={() => handleEdit(user.id)}>Edit</button>{" "}
              <button onClick={() => handleDelete(user.id)}>Delete</button>
            </p>
          );
        })}
      <div>
        <h3>Update form</h3>
        <form>
          <label htmlFor="">
            User Name:
            <input
              type="text"
              name="name"
              placeholder="Name"
              // value={user.name}
              // onChange={handleFormName}
            />
          </label>
          <br />
          <label htmlFor="">
            Age:
            <input type="test" name="age" />
          </label>
          <br />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
