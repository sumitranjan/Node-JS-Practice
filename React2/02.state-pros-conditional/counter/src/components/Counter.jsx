import React from "react";

const Counter = ({ initalValue }) => {
  //hooks use useState
  //hooks are set of inbuild react functions used to interact with VDOM

  //usestate is a hook in React
  //useState is used to inform VDOM of the changes that need to be rendered
  //which is used to inform VDOM of the changes that needs to be rendered

  //it returns 2 things in an array
  //variable and a function to update that variable

  //state
  //state is a info that is changing on DOM

  const [count, setCount] = React.useState(initalValue); //initial value from count

  //tree like structure from a component
  return (
    <div>
      <h1>Counter App {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button
        onClick={() => {
          if (count > 0) {
            setCount(count - 1);
          }
        }}
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
