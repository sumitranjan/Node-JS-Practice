import { useContext } from "react";
import "./App.css";
import Body from "./components/Body";
import Navbar from "./components/Navbar";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const { isLight } = useContext(ThemeContext);
  //need a state variable with initial value = 0;
  //need a single place where this changes can be monitored
  return (
    <div className={`App ${isLight ? "light" : "dark"}`}>
      {/* Composition: Information flows from Parent to child and never from child to parent */}
      {/* Inheritance */}
      <Navbar />
      <Body />
    </div>
  );
}

export default App;
