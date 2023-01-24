import { useEffect, useState } from "react";
import timerData from "../data/data";
import Timer from "./Timer";
import TimerForm from "./TimerForm";
console.log(timerData);
export default function TimerDashboard() {
  const [timers, setTimers] = useState([]);
  const [runningTime, setRunningTime] = useState(0);

  useEffect(
    () => {
      setTimers(timerData);
      setInterval(() => {
        setRunningTime(runningTime + 1);
      }, 1000);
    },
    { timers }
  );
  console.log(timerData);

  return (
    <div>
      <h1>Timers</h1>
      {timerData &&
        timerData.map((data) => {
          return (
            <Timer
              project={data.project}
              title={data.title}
              elapsed={data.elapsed}
              runningSince={data.runningSince}
              runningTime={runningTime}
            />
          );
        })}
      <TimerForm title={"title"} project={"project"} />
    </div>
  );
}
