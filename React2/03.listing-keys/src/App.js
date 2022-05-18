import "./App.css";
import { useState } from "react";

function App() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setToggle(!toggle)}>
        {toggle ? "Show Todo app" : "Show Counter App"}
      </button>
      {toggle ? <Counter /> : <Counter />}
    </div>
  );
}

export default App;
