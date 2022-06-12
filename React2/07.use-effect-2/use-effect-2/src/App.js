import React from "react";
import "./App.css";
import Stopwatch from "./Components/Stopwatch";
import Timer from "./Components/Timer";
import Todos from "./Components/Todos";

const App = () => {
  return (
    <div className="App">
      {/* <Todos /> */}
      {/* <Timer /> */}
      <Stopwatch />
    </div>
  );
};

export default App;
