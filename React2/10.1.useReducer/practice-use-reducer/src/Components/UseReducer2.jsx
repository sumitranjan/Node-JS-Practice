import React, { useReducer } from "react";

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "INCREMENT": {
      return { ...state, counter: state.counter + payload };
    }
    case "DECREMENT": {
      return { ...state, counter: state.counter - payload };
    }
    default: {
      console.log("Type incorrect", type);
      return state;
    }
  }
};

const UseReduecr2 = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 10 });
  return (
    <div>
      <h2>use Reducer type 2</h2>
      Counter : {state.counter}
      <div className="btn-component">
        <button onClick={() => dispatch({ type: "DECREMENT", payload: 1 })}>
          Decrement
        </button>
        <button onClick={() => dispatch({ type: "INCREMENT", payload: 10 })}>
          Increment
        </button>
      </div>{" "}
    </div>
  );
};

export default UseReduecr2;
