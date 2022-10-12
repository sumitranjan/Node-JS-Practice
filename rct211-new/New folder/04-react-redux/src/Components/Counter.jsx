import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleAddActionObj, handleReduceActionObj } from "../Redux/action";

const Counter = () => {
  const count = useSelector((store) => {
    return store.count;
  });

  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter : {count}</h1>
      <button onClick={() => dispatch(handleAddActionObj(2))}>ADD</button>
      <button onClick={() => dispatch(handleReduceActionObj(1))}>ADD</button>
    </div>
  );
};

export default Counter;
