import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT": {
      return state + action.payload;
    }
    case "DECREMENT": {
      return state - action.payload;
    }
    default: {
      console.log("Type incorrect", action.type);
      return state;
    }
  }
};
const UseReducer1 = () => {
  const [counter, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <h2>use Reducer type 1</h2>
      Counter : {counter}
      <div className="btn-component">
        <button onClick={() => dispatch({ type: "DECREMENT", payload: 1 })}>
          Decrement
        </button>
        <button onClick={() => dispatch({ type: "INCREMENT", payload: 1 })}>
          Increment
        </button>
      </div>{" "}
    </div>
  );
};

export default UseReducer1;
