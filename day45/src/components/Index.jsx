import { Link } from "react-router-dom";
export default function Index() {
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
      <h1>Home Dynamic Routing</h1>
      <nav>
        <Link to={"/home"} state={homePageData}>
          Home Page
        </Link>
        <Link to={"/about"} state={aboutPageData}>
          About Page
        </Link>
        <Link to={"/login"} classNamea="active">
          Login
        </Link>
        <Link to={"/register"}>Register</Link>
        <Link to={"/accordion"}>Accordion Page</Link>
        <Link to={"/accordion2"}>Accordion 2</Link>
        <Link to={"/movies"}>Movies Page</Link>
        <Link to={"/gallery"}>Gallery Page</Link>
        <Link to={"/toaster"}>Toaster Page</Link>
      </nav>
    </div>
  );
}
