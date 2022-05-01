import logo from './logo.svg';
import './App.css';
import {useState} from "react"

function App() {
  const [counter, setCounter] = useState(0)

  const handleChange = (value)=>{

      setCounter(counter+value)

  }
  return (
    <div className="App">
      <h3 className={`${counter%2===0 ? "evenCounter" : "oddCounter"}`}>Counter : {counter}</h3>
      <button className="addBtn"onClick = {()=>{handleChange(1)}}>Add 1</button>
      <button className="subBtn" onClick = {()=>{handleChange(-1)}}>Sub 1</button>
      <button className="doubBtn" onClick = {()=>{handleChange(counter*1)}}>Double</button>
    </div>
  );
}

export default App;
