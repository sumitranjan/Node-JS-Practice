import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import "../App.css";

function Stopwatch2() {
  const timerId = useRef(null);
  const [watch, setWatch] = useState(0);

  const start = () => {
    if (!timerId.current) {
      let id = setInterval(() => {
        setWatch((prev) => prev + 1);
      }, 1000);
      timerId.current = id;
    }
  };
  const pause = () => {
    clearInterval(timerId);
    timerId.current = null;
  };
  const reset = () => {
    clearInterval(timerId);
    setWatch(0);
    timerId.current = null;
  };

  useEffect(()=>{
    return reset;
  },[])
  return (
    <div className="App">
      <h2>Stopwatch</h2>
      <h1>{watch}</h1>
      <div>
        <button onClick={start}>Start</button>
        <button onClick={pause}>Pause</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default Stopwatch2;
