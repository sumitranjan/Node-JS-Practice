import React from "react";
import { useState } from "react";

const Stopwatch = () => {
  const [timerId, setTimerId] = useState(null);
  //timer id- Noting to do wuth dom updation
  //persistant across re-render
  const [watch, setWatch] = useState(0);

  const start = () => {
    if (!timerId) {
      let id = setInterval(() => {
        setWatch((prev) => prev + 1);
      }, 100);
      setTimerId(id);
    }
  };
  const pause = () => {
    clearInterval(timerId);
    setTimerId(null);
  };

  const reset = () => {
    clearInterval(timerId);
    setTimerId(null);
    setWatch(0);
  };
  return (
    <div>
      <h2>Stopwatch</h2>
      <h2>{watch}</h2>
      <div>
        <button onClick={start}>Start</button>
        <button onClick={pause}>Pause</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default Stopwatch;
