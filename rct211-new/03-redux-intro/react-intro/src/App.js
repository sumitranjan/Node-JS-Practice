import { useEffect, useState } from "react";
import { store } from "./Redux/store";
import { handleAddActionObj, handleReduceActionObj } from "./Redux/action";
import "./App.css";

function App() {
  //const [count, setCount] = useState(4);
  //count = count+1 //wrong
  //setCount(count +1) //right
  const { dispatch, subscribe } = store;
  const { count } = store.getState(); //{count : 10}

  //hack to re-render the React component
  const [update, setUpdate] = useState(0);

  //subscribe() will get triggered everytime anything inside redux store changes
  subscribe(() => {
    //state we have in our redux store.
    console.log("State inside redux has changed", store.getState());

    //just for re-rendering
    //this is telling react that some state has
    //changed and you need to re-render this component.
    setUpdate((prev) => prev + 1);
  });

  // const handleAdd = () => {
  //   dispatch(handleAddActionObj({ type: "ADD", payload: 1 }));
  // };

  // const handleReduce = () => {
  //   dispatch(handleReduceActionObj({ type: "REDUCE", payload: 1 }));
  // };

  useEffect(() => {}, [count]);

  return (
    <div className="App">
      <h1>Counter : {count}</h1>
      {/* <button onClick={() => setCount((prev) => prev + 1)}>Add</button>
      <button onClick={() => setCount((prev) => prev - 1)}>Reduce</button> */}

      <button onClick={()=>dispatch(handleAddActionObj(2))}>Add</button>
      <button onClick={()=>dispatch(handleReduceActionObj(1))}>Reduce</button>
    </div>
  );
}

export default App;
