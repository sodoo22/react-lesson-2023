import logo from "./logo.svg";
import "./App.css";
import UserRegisterForm from "./components/UserRegisterForm";
import { Route, Routes } from "react-router-dom";
import Users from "./components/Users";

function App() {
  return (
    <div className="App">
      <h1>DAY-62 USER-CRUD-LOGIN</h1>
      <h5>User Register Form</h5>

      <Routes>
        <Route path="/register" element={<UserRegisterForm />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  );
}

export default App;
