import "./App.css";
import Counter from "./components/Counter";
import Todo from "./components/Todo";

function App() {
  return (
    <div className="App">
      <Counter initalValue={1000} />
      <Todo />
    </div>
  );
}

export default App;   
