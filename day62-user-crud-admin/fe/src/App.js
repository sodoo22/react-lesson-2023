import logo from "./logo.svg";
import "./App.css";
import UserRegisterForm from "./components/UserRegisterForm";
import { Route, Routes } from "react-router-dom";
import Users from "./components/Users";
import LoginForm from "./components/LoginForm";
import { ToastContainer, toast } from "react-toastify";

function App() {
  return (
    <div className="App">
      <h1>DAY-62 USER-CRUD-LOGIN</h1>
      <h5>User Register Form</h5>

      <Routes>
        <Route path="/register" element={<UserRegisterForm />} />
        <Route path="/users" element={<Users />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
