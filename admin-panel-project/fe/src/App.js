import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Users from "./pages/Users";
import Home from "./components/Home";
import Products from "./pages/Products";

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
