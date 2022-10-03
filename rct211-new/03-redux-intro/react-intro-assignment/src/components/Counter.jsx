import React, { useState } from "react";
import CounterButtons from "./CounterButtons";
import CounterValue from "./CounterValue";
import { store } from "../Redux/store";

const Counter = () => {
  const { subscribe } = store;
  const [state, setState] = useState(0);
  const forceUpdate = () => setState((prev) => prev + 1);
  subscribe(() => {
    forceUpdate();
  });
  return (
    <div>
      counter : <CounterValue />
      <CounterButtons />
    </div>
  );
};

export default Counter;
