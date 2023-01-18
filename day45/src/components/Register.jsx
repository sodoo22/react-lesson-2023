import { Navigate } from "react-router-dom";
import { useState } from "react";
import Header from "./Header";

export default function Register() {
  const [formSub, setFormSub] = useState();

  if (formSub) {
    return <Navigate to={"/login"} />;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("TEST");
    setFormSub(true);
  };
  return (
    <div>
      <h1>Register Page</h1>
      <Header />
      <form onSubmit={handleSubmit}>
        <label htmlFor={"email"}>Email: </label>
        <input name="email" type="text" />
        <br></br>
        <label htmlFor={"username"}>User Name: </label>
        <input name="username" type="text" />
        <br></br>
        <label htmlFor={"password"}>Password: </label>
        <input name="password" type="password" />
        <br></br>
        <button>Register</button>
      </form>
    </div>
  );
}
