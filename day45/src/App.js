import logo from "./logo.svg";
import "./App.css";
import Accordion from "./components/Accordion";
import Accordion2 from "./components/Accordion2";
import { Route, Routes } from "react-router-dom";
import Index from "./components/Index";
import HomePage from "./components/HomePage";
import AboutPage from "./components/About";
import Movies from "./components/Movies";
import Movie from "./components/Movie";
import Gallery from "./components/Gallery";
import ToasterPage from "./components/ToasterPage";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <div className="App">
      <h1>Day-45</h1>
      <Routes>
        <Route path={"/"} element={<Index />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/register"} element={<Register />} />

        <Route path={"/accordion"} element={<Accordion />} />
        <Route path={"/accordion2"} element={<Accordion2 />} />
        <Route path={"/home"} element={<HomePage />} />
        <Route path={"/about"} element={<AboutPage />} />
        <Route path={"/gallery"} element={<Gallery />} />
        <Route path={"/toaster"} element={<ToasterPage />} />
        <Route path={"/movies"} element={<Movies />} />
        <Route path={"/movies/:id"} element={<Movie />} />
      </Routes>
    </div>
  );
}

export default App;
