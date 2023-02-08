import logo from "./logo.svg";
import "./App.css";
import { useContext, useState } from "react";
import List from "./components/List";
import { PlaceContext } from "./context/PlaceContext";

function App() {
  const [isLarge, setIsLarge, imageSize] = useContext(PlaceContext);

  return (
    <div className="App">
      <h1>Day-58-useRef</h1>
      <label>
        <input
          type="checkbox"
          checked={isLarge}
          onChange={(e) => setIsLarge(e.target.checked)}
        />
        Use large Image <hr />
      </label>
      <List />
    </div>
  );
}

export default App;
