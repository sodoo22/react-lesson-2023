import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <h1>Day-47</h1>
      <div className="con">
        <Counter />
        <Counter />
      </div>
    </div>
  );
}

export default App;
