import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Users from "./pages/Users";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      {/* <h1>Admin Panel Project</h1> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  );
}

export default App;
