import { createContext } from "react";
import { useEffect, useState } from "react";
import timerData from "../data/data";
import { useContext } from "react";

const TimerContext = createContext(null);

const TimerContextProvider = ({ children }) => {
  const [timers, setTimers] = useState({ timers: [] });
  useEffect(() => {
    setInterval(() => setTimers({ timers: timerData }), 1000);
  }, []);
  return (
    <TimerContext.Provider value={[timers, setTimers]}>
      {children}
    </TimerContext.Provider>
  );
};

export { TimerContextProvider, TimerContext };
