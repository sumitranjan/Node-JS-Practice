import "./App.css";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <Counter initalValue={1000} />
    </div>
  );
}

export default App;
