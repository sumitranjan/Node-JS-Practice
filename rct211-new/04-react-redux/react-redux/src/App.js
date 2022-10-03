import { useEffect, useState } from "react";
import "./App.css";
import { store } from "./Redux/store";
import { useSelector, useDispatch } from "react-redux";
import { handleAddActionObj, handleReduceActionObj } from "./Redux/action";
import Counter from "./Components/Counter";
import Todos from "./Components/Todos";

function App() {
  // const { dispatch, subscribe } = store;
  // const { count } = store.getState(); //{count: 10}
  // const [update, setUpdate] = useState(0);

  // subscribe(() => {
  //   console.log("State inside redux has changed", store.getState());
  //   setUpdate((prev) => prev + 1);
  // });

  // const handleAdd = () => {
  //   dispatch({ type: "ADD", payload: 1 });
  //   console.log(store.getState());
  // };
  // const handleReduce = () => {
  //   dispatch({ type: "REDUCE", payload: 1 });
  //   console.log(store.getState());
  // };
  // useEffect(() => {}, [count]);

  return (
    <div className="App">
      <Counter />
      <Todos />
    </div>
  );
}

export default App;
