import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleAddActionObj, handleReduceActionObj } from "../Redux/action";

const Counter = () => {
  //help us ACCESS the data inside our Redux store.
  const count = useSelector((store) => {
    return store.count;
  });

  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter : {count}</h1>
      <button onClick={() => dispatch(handleAddActionObj(3))}>ADD</button>
      <button onClick={() => dispatch(handleReduceActionObj(2))}>Reduce</button>
    </div>
  );
};

export default Counter;
