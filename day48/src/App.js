import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Input from "./components/Input";
import Anime from "./components/Anime";
import Button from "./components/Button";
import TopAnime from "./components/TopAnime";
import Ex from "./components/Ex";
import FindEvenOdd from "./components/Ex2";
import Pascal from "./components/Pascal";

function App() {
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }
  return (
    <div className="App">
      <h1>Day-48</h1>
      <Pascal />
      {/* <Ex /> */}
      <FindEvenOdd />
      {/* <TopAnime />
      <Anime />
      <br />
      <br />
      <Button />
      <br />
      <br />
      <Input
        type="text"
        label="First input"
        value={text}
        onChange={handleChange}
      />
      <Input
        type="text"
        label="First input"
        value={text}
        onChange={handleChange}
      /> */}
    </div>
  );
}

export default App;
