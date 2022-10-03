import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    //side-effects
    //MEMORY LEAK
    let id = setInterval(() => {
      console.log("Inside setInterval", Date.now());
    }, 1000);

    //unmounts
    return () => {
      clearInterval(id);
    };
  }, []);
  return (
    <div>
      <h1>Counter {count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>Add</button>
    </div>
  );
};

export default Counter;
