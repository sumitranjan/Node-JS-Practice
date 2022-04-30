import {useState} from "react";
import './App.css';

function App() {
  return (
    <div className="App">
      <First/>
      <Second/>
    </div>
  );
}

function First(){
  const [x,setX] = useState(30)
  return <div>First Child, {x}</div>
}

function Second(){
  return <div>Second Child</div>
}
export default App;
