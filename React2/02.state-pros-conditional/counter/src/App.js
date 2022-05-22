import "./App.css";
import Counter from "./components/Counter";
import Todo from "./components/Todo";
import Todo2 from "./components/Todo2";

function App() {
  return (
    <div className="App">
      <Counter initalValue={1000} />
      <Todo />
      {/* <Todo2 /> */}
    </div>
  );
}

export default App;
