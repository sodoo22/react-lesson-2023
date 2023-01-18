import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [activeIndex, setActiveIndex] = useState(0);
  const aboutPageData = {
    from: "Index",
    message: "Welcome to About Page",
    timetamp: Date.now(),
  };
  const homePageData = {
    from: "Index",
    message: "Welcome to Home Page",
    timetamp: Date.now(),
  };
  return (
    <div>
      <h1>Header</h1>
      <nav>
        <Link to={"/home"} state={homePageData}>
          Home Page
        </Link>
        <Link to={"/about"} state={aboutPageData}>
          About Page
        </Link>
        <Link
          to={"/login"}
          className={activeIndex === 0 ? "active" : ""}
          replace={true}
          onClick={() => {
            setActiveIndex(0);
          }}
        >
          Login
        </Link>
        <Link
          to={"/register"}
          className={activeIndex === 1 ? "active" : ""}
          onClick={() => {
            setActiveIndex(1);
          }}
        >
          Register
        </Link>
        <Link to={"/accordion"}>Accordion Page</Link>
        <Link to={"/accordion2"}>Accordion 2</Link>
        <Link to={"/movies"}>Movies Page</Link>
        <Link to={"/gallery"}>Gallery Page</Link>
        <Link to={"/toaster"}>Toaster Page</Link>
      </nav>
    </div>
  );
}
