import { Link, useLocation } from "react-router-dom";
export default function About() {
  const location = useLocation();
  const state = location.state;
  console.log(state);

  return (
    <div>
      <h1>About Page</h1>
      <h1>{state.message}</h1>
      <p>{state.timetamp}</p>
      <Link to={"/"}>BacK</Link>
    </div>
  );
}
