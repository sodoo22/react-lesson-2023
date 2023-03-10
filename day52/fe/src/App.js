import "./App.css";
import { useEffect, useState } from "react";
import {
  fetchAllData,
  deleteUser,
  updateUser,
  createUser,
} from "./services/axiosUsersServices";

function App() {
  const URL = "http://localhost:8080/users";
  const newUser = { id: "", username: "", age: "" };
  const [users, setUsers] = useState();
  const [isUpdate, setIsUpdate] = useState(false);
  const [currentUser, setCurrentUser] = useState(newUser);

  useEffect(() => {
    fetchAllData(URL, setUsers);
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!isUpdate) {
      createUser(e, URL, setUsers);
    } else {
      updateUser(
        currentUser,
        URL,
        setUsers,
        setIsUpdate,
        setCurrentUser,
        newUser
      );
    }
  }

  async function handleDelete(id) {
    deleteUser(id, URL, setUsers);
  }

  async function handleEdit(userId) {
    setIsUpdate(true);
    const filteredUser = users.filter((user) => user.id === userId)[0];
    if (filteredUser) {
      setCurrentUser({
        ...currentUser,
        id: filteredUser.id,
        username: filteredUser.username,
        age: filteredUser.age,
      });
    }
  }

  function handleUserName(e) {
    setCurrentUser({
      ...currentUser,
      username: e.target.value,
    });
  }

  function handleUserAge(e) {
    setCurrentUser({
      ...currentUser,
      age: e.target.value,
    });
  }

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
            onChange={handleUserName}
          />
        </label>
        <br />
        <label htmlFor="">
          Age:
          <input
            type="test"
            name="age"
            value={currentUser.age}
            onChange={handleUserAge}
          />
        </label>
        <br />
        <button>{isUpdate ? "Update" : "Submit"}</button>
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
    </div>
  );
}

export default App;
