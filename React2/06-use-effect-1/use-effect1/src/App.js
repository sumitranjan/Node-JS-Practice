import axios from "axios";
import React from "react";
import { useEffect } from "react";
import "./App.css";
import Stopwatch from "./components/Stopwatch";
import Stopwatch2 from "./components/Stopwatch2";
import Timer from "./components/Timer";
import Todos from "./components/Todos";
import Todos2 from "./components/Todos2";

function App() {
 
  return (
    <div className="App">
      {/* <Todos /> */}
      {/* <Todos2 /> */}
      {/* <Timer/> */}
      {/* <Stopwatch/> */}
      <Stopwatch2/>
    </div>
  );
}

export default App;
