import { useState } from "react";
import './Counter.css'

function Counter(props) {
  const [count, SetCount] = useState(props.initialValue);
  return (
    <div>
      <h1>Counter</h1>
      <h2 className={`${count % 2 == 0? "evenCount" : "oddCount"}`}>{count}</h2>
      <button onClick={() => SetCount(count + 1)}>Increment</button>
      <button onClick={() => SetCount(count - 1)}>Decrement</button>
      <button onClick={() => SetCount(count * 2)}>Double</button>
    </div>
  );
}

export default Counter;
