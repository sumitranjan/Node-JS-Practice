import React from "react";
import { store } from "../Redux/store";

const CounterButtons = () => {
  const { dispatch, subscribe } = store;
  const handleAdd = () => {
    dispatch({ type: "ADD", payload: 1 });
    console.log("Dospatch", store.getState());
  };

  const handleReduce = () => {
    dispatch({ type: "REDUCE", payload: 1 });
    console.log("Dospatch", store.getState());
  };
  return (
    <div>
      <button onClick={handleAdd}>ADD</button>
      <button onClick={handleReduce}>Reduce</button>
    </div>
  );
};

export default CounterButtons;
