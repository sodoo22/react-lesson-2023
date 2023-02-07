import "./App.css";
import { TimerContextProvider } from "./contexts/TimerContext";

import TimersDashboard from "./components/TimersDashboard";

export default function App() {
  return (
    <div>
      <h1>Timer App</h1>
      <TimerContextProvider>
        <TimersDashboard />
      </TimerContextProvider>
    </div>
  );
}
