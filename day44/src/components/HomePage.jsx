import { Link, useLocation } from "react-router-dom";
export default function HomePage() {
  const location = useLocation();
  const state = location.state;
  console.log(state);
  return (
    <div>
      <h1>Home Page</h1>
      <h1>{state.message}</h1>
      <p>{state.timetamp}</p>
      <Link to={"/"}>BacK</Link>
    </div>
  );
}
