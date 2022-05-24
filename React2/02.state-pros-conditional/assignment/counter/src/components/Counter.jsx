import React, { useState } from "react";
import "./counter.css";

const Counter = (props) => {
  const [count, setCount] = useState(props.initalValue);
  return (
    <div>
      <h1>Counter</h1>
      <h2 className={`${count % 2 === 0 ? "evenCount" : "oddCount"}`}>
        {count}
      </h2>
      <button className="addBtn" onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button className="subBtn" onClick={() => setCount(count - 1)}>
        Decrement
      </button>
      <div>
        <button className="doubBtn" onClick={() => setCount(count * 2)}>
          Double
        </button>
      </div>

      <div>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
