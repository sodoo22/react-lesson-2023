import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import FeedbackForm from "./components/FeedbackForm";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Usukhuu from "./components/about/Usukhuu";
import Khangai from "./components/about/Khangai";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div>
      {/* <FeedbackForm />; */}
      <h1>Day-43-React Router</h1>
      <div id="navbar">
        <Link to={"/"}>Home</Link>
        <Link to={"./about"}>About</Link>
        <Link to={"./login"}>Login</Link>
        <Link to={"./register"}>Register</Link>
        <Link to={"./feedback"}>Feedback</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/*" element={<About />}>
          <Route path="usukhuu" element={<Usukhuu />} />
          <Route path="khangai" element={<Khangai />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/feedback" element={<FeedbackForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
