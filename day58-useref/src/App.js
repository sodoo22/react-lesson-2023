import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import List from "./components/List";
import StopWatch from "./components/StopWatch";
import InputFocus from "./components/InputFocus";
import VideoPlayer from "./components/VideoPlayer";

function App() {
  const [isLarge, setIsLarge] = useState(false);
  const imageSize = isLarge ? 150 : 100;

  return (
    <div className="App">
      <h1>Day-58-useRef</h1>
      <VideoPlayer />
      {/* <InputFocus /> */}
      {/* <StopWatch /> */}
      {/* <label>
        <input
          type="checkbox"
          checked={isLarge}
          onChange={(e) => setIsLarge(e.target.checked)}
        />
        Use large Image <hr />
      </label>
      <List imageSize={imageSize} /> */}
    </div>
  );
}

export default App;
