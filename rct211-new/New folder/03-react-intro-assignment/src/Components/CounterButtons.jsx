import React from "react";
import { handleAddActionObj, handleReduceActionObj } from "../Redux/action";
import { store } from "../Redux/store";

const CounterButtons = () => {
  const { dispatch, subscribe } = store;
  return (
    <div>
      <button onClick={() => dispatch(handleAddActionObj(2))}>Add</button>
      <button onClick={() => dispatch(handleReduceActionObj(3))}>Reduce</button>
    </div>
  );
};

export default CounterButtons;
