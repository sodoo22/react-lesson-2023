import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Counter from "./components/Counter";

function App() {
  const [counter, setCounter] = useState(0);
  const [inputText, setInputText] = useState("");

  function handleClick() {
    console.log("clicked");
    setCounter(counter + 1);
  }

  function handleInput(event) {
    setInputText(event.target.value);
  }

  return (
    <div className="App">
      <h1>Day-41</h1>
      <div id="ex1">
        <p>{counter}</p>
        <button onClick={handleClick}>Add Counter</button>
      </div>
      <div id="ex2">
        <p>{inputText}</p>
        {/* <input onChange={handleInput}></input> */}
        <input
          value={inputText}
          onChange={(e) => {
            handleInput(e);
          }}
        />
      </div>
      <div>
        <Counter />
      </div>
    </div>
  );
}

export default App;
