import { useEffect, useState } from "react";
import timerData from "../data/data";
import EditableTimerList from "./EditableTimerList";

export default function TimerDashboard() {
  const [timers, setTimers] = useState({ timers: [] });

  useEffect(() => {
    setInterval(() => setTimers({ timers: timerData }), 1000);
  }, []);

  return (
    <div>
      <h1>Timers</h1>
      {timers.timers && (
        <div>
          <EditableTimerList timers={timers.timers} />
        </div>
      )}
    </div>
  );
}
