import { useReducer, useState } from "react";
import "./App.css";

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "INCREMENT": {
//       return state + action.payload;
//     }
//     case "DECREMENT": {
//       return state - action.payload;
//     }
//     default: {
//       console.log("Type incorrect", action.type);
//       return state;
//     }
//   }
// };
// function App() {
//  //need a state variable with initial value = 0;
//  //need a single place where this state changes can be monitored
//   const [counter, dispatch] = useReducer(reducer, 0);
//   return (
//     <div className="App">
//       Counter : {counter}
//       <div>
//         {/* DECREMENT & INCREMENT is the action */}
//         <button onClick={() => dispatch({ type: "DECREMENT", payload: 1 })}>
//           -
//         </button>
//         <button onClick={() => dispatch({ type: "INCREMENT", payload: 100 })}>
//           +
//         </button>
//       </div>
//     </div>
//   );
// }

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

function App() {
  //dispatch function is used to triger the reducer
  const [state, dispatch] = useReducer(reducer, { counter: 1 });
  return (
    <div className="App">
      Counter : {state.counter}
      <div>
        {/* DECREMENT & INCREMENT is the action */}
        <button onClick={() => dispatch({ type: "DECREMENT", payload: 1 })}>
          -
        </button>
        <button onClick={() => dispatch({ type: "INCREMENT", payload: 100 })}>
          +
        </button>
      </div>
    </div>
  );
}

export default App;
