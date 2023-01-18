import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
export default function Login() {
  const [user, setUser] = useState({
    loginName: "Sodoo",
    password: "123",
  });

  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.username.value);
    console.log(e.target.password.value);
    if (
      user.loginName === e.target.username.value &&
      user.password === e.target.password.value
    ) {
      toast("User is premitted");
      navigate("/", { replace: true, state: { bookName: "Home" } });
    } else {
      toast("User is no premitted");
      navigate("/register", { replace: true, state: { bookName: "Home" } });
    }
  };
  return (
    <div>
      <h1>Login Page</h1>
      <Header />
      <form onSubmit={onSubmit}>
        <label htmlFor={"username"}>Login Name: </label>
        <input name="username" type="text" />
        <br></br>
        <label htmlFor={"password"}>Password: </label>
        <input name="password" type="password" />
        <br></br>
        <button>Sign In</button>
      </form>
      <ToastContainer position="bottom-right" />
    </div>
  );
}
