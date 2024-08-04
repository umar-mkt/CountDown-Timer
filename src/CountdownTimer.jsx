import React, { useEffect, useRef, useState } from "react";
import "./CountdownTimer.css";

const CountdownTimer = () => {
  const [running, setRunning] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef(null);

  const mainDay = "August, 29, 2024";

  const getTime = () => {
    const time = Date.parse(mainDay) - Date.now();
    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / (1000 * 60)) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => getTime(), 1000);
    }
    return () => clearInterval(intervalRef.current);
  }, [running]);

  function start() {
    setRunning(true);
  }

  function pause() {
    setRunning(false);
  }

  return (
    <div className="CountTimer">
      <h1>
        {days} days : {hours} hours : {minutes} min : {seconds} sec
      </h1>

      <button onClick={start} className="btn" type="button">
        Start
      </button>
      <button onClick={pause} className="btn" type="button">
        Pause
      </button>
      {/* <button className="btn" type="button">
        Reset
      </button> */}
    </div>
  );
};

export default CountdownTimer;
