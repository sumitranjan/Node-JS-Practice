import "./App.css";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const { isLight } = useContext(ThemeContext);

  return (
    <div className={`App ${isLight ? "light" : "dark"}`}>
      <Navbar />
      <Body />
    </div>
  );
}

export default App;
