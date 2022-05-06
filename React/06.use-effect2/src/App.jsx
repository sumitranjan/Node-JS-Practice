import { Todos } from "./components/Todos";
import { useState } from "react";
import "./App.css";

function App() {
  const [show, setShow] = useState(true);

  return (
    <div className="App">
      {show ? <Todos /> : null}

      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        {show ? "Hide" : "Show"} Todos
      </button>
    </div>
  );
}

export default App;

// make `page` state
//use ?_page={page}&_limit=5 for getting the data
//use page as dependency of useEffect
//inc/dec page on next/prev button click
