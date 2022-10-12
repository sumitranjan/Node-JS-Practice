import React, { useState } from "react";
import { store } from "../Redux/store";
import CounterButtons from "./CounterButtons";

const Counter = () => {
  const { dispatch, subscribe } = store;
  const { count } = store.getState(); //{count : 10}
  const [update, setUpdate] = useState(0);

  subscribe(() => {
    console.log("State inside redux has changed", store.getState());

    setUpdate((prev) => prev + 1);
  });

  return (
    <div>
      Counter : {count}
      <CounterButtons />
    </div>
  );
};

export default Counter;
