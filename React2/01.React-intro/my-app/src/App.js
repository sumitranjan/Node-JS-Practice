import "./App.css";
import Hello from "./components/Hello";
import { Answer } from "./components/Answer";
function App() {
  let info = [
    { from: "Ritesh", place: "India", infox:{
      a:1, b:2,
    } },
    { from: "Aman", place: "USA" },
    { from: "Pragati", place: "Russai" },
    { from: "Gaurav", place: "Dubai" },
    { from: "Vivek", place: "Australia" },
    { from: "Sandeep", place: "USA" },
    { from: "Pankaj", place: "India" },
  ];
  return (
    <div className="App">
      <Hello></Hello>
      <h1>New : 1</h1>
      {info.map((user) => (
        <div key= {user.name}>
          {/* <Answer name={user.name} place={user.place} /> */}
          <Answer {...user} />// Spred all the key and value

        </div>
      ))}
      {/* <Answer {...info[0]} />
      <Answer {...info[1]} />
      <Answer {...info[2]} />
      <Answer {...info[3]} />
      <Answer {...info[4]} />
      <Answer {...info[5]} />
      <Answer {...info[6]} /> */}
    </div>
  );
}

export default App;
