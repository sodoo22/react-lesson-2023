import { useEffect } from "react";
import { useState } from "react";
import timerData from "../data/data";
import EditableTimerList from "./EditableTimerList";
import ToggableTimerForm from "./ToggleableTimerForm";
import { newTimer } from "./Helpers";

export default function TimerDashBoard() {
  const [timers, setTimers] = useState({ timers: [] });
  useEffect(() => {
    setInterval(() => setTimers({ timers: timerData }), 5000);
  }, []);
  function handleStartClick(timerId) {
    startTimer(timerId);
  }

  function startTimer(timerId) {
    const now = Date.now();

    setTimers({
      timers: timers.timers.map((timer) => {
        if (timer.id === timerId) {
          timer.runningSince = now;
          return timer;
        } else {
          return timer;
        }
      }),
    });
  }
  function handleStopClick(timerId) {
    stopTimer(timerId);
  }

  function stopTimer(timerId) {
    const now = Date.now();
    setTimers({
      timers: timers.timers.map((timer) => {
        if (timer.id === timerId) {
          const lastElapsed = now - timer.runningSince;
          timer.elapsed = timer.elapsed + lastElapsed;
          timer.runningSince = null;
        }
        return timer;
      }),
    });
  }

  function handleTrashClick(timerId) {
    deleteTimer(timerId);
  }

  function deleteTimer(timerId) {
    setTimers({
      timers: timers.timers.filter((t) => t.id !== timerId),
    });
  }
  function handleEditFormSubmit(timer) {
    updateTimer(timer);
  }
  function handleCreateFormSubmit(timer) {
    createTimer(timer);
  }
  function createTimer(timer) {
    const t = newTimer(timer);
    setTimers({
      timers: timers.timers.concat(t),
    });
  }

  function updateTimer(attributes) {
    setTimers({
      timers: timers.timers.map((timer) => {
        if (timer.idd === attributes.id) {
          timer.title = attributes.title;
          timer.project = attributes.project;
        }
        return timer;
      }),
    });
  }

  return (
    <div>
      <h1 className="margin-auto">Timer Dashboard</h1>

      {timers.timers && (
        <div>
          <EditableTimerList
            timers={timers.timers}
            onTrashClick={handleTrashClick}
            onStartClick={handleStartClick}
            onStopClick={handleStopClick}
            onFormSubmit={handleEditFormSubmit}
          />
          <ToggableTimerForm onFormSubmit={handleCreateFormSubmit} />
        </div>
      )}
    </div>
  );
}
