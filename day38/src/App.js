import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button";
import Toolbar from "./components/Toolbar";
import ToolbarNext from "./components/ToolbarNext";
import ParentToolbar from "./components/ParentToolbar";
import SingUp from "./components/SignUp";

function App() {
  return (
    <div className="App">
      <h1>Day-38 Reace Event</h1>
      <Button />
      <Toolbar />
      <ToolbarNext />
      <ParentToolbar />
      <SingUp />
    </div>
  );
}

export default App;
