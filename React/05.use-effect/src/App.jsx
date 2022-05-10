import "./App.css";
import { Hello } from "./components/Hello";
import { Todos } from "./components/Todos";
import { useEffect, useState } from "react";

//Use effect

// function App() {
//   const [show, setShow] = useState(true);

//   console.log("Before");

//   //effects are synchronous
//   useEffect(() => {
//     console.log("Inside effect 1");
//   });

//   useEffect(() => {
//     console.log("Inside effect 2");
//   });

//   console.log("After");

//   return (
//     <div className="App">
//       {show ? <Hello /> : null}
//       <button
//         onClick={() => {
//           setShow(!show);
//         }}
//       >
//         Toggle component
//       </button>
//     </div>
//   );
// }


//////////////////////////////////////////////////////////////////
// function App() {
//   const [todos, setTodos] = useState([]);

//   //useEffect is synchronous
//   useEffect(() => {
//     fetch("http://localhost:8080/todos")
//       .then((d) => d.json())
//       .then((data) => {
//         console.log("Todos:", data);
//         setTodos(data);
//       });
//   }, []); //empty array: call only once!
//   //If you miss empty array, useEffect will go to infinite loop

//   return (
//     <div className="App">
//       {todos.map((todo) => (
//         <div>{todo.id}.{todo.title}</div>
//       ))}
//     </div>
//   );
// }


/////////////////////////////////////////////////////////////////
// //Counter
// function App() {
//   const [counter, setCounter] = useState(0);
//   const [age, setAge] = useState(0);

//   //Three way to call useEffect
//   //1. empty useEffect => just call back function
//   useEffect(() => {
//     console.log("Inside effect 1");
//   }); //not giving array?  call every single time.

//   //2. All UseEffect is called when it is called from mounted
//   useEffect(() => {
//     console.log("Inside effect 1");
//   },[]); //call only once

//   useEffect(() => {
//     console.log("Inside effect 2");
//   }, [age]); // only when age changes

//   // useEffect(() => {
//   //   console.log("Inside effect 1");
//   // },[counter])

//   //UseEffect executes at least once!

//   return (
//     <div className="App">
//       <h3>Counter: {counter}</h3>
//       <button
//         onClick={() => {
//           setCounter(counter + 1);
//         }}
//       >
//         Add 1
//       </button>
//       <button
//         onClick={() => {
//           setAge(age + 2);
//         }}
//       >
//         change age
//       </button>
//     </div>
//   );
// }

/////////////////////////////////////////////////////////

// function App() {
//   const [counter, setCounter] = useState(0);

//   const [todo, setTodos] = useState([]);

//   useEffect(() => {
//     async function getData() {
//       const data = await fetch("http://localhost:8080/todos").then((d) =>
//         d.json()
//       );
//       setTodos(data);
//     }
//     getData();
//   }, []);

//   //2. All UseEffect is called when it is called from mounted
//   useEffect(() => {
//     console.log("Inside effect 1");
//   }, []); //call only once

//   // useEffect(() => {
//   //   console.log("Inside effect 2");
//   // }, [age]); // only when age changes

//   // useEffect(() => {
//   //   console.log("Inside effect 1");
//   // },[counter])

//   //UseEffect executes at least once!

//   return (
//     <div className="App">
//       <h3>Counter: {counter}</h3>
//       <button
//         onClick={() => {
//           setCounter(counter + 1);
//         }}
//       >
//         Add 1
//       </button>
//       {/* <button
//         onClick={() => {
//           setAge(age + 2);
//         }}
//       >
//         change age
//       </button> */}

//       {todo.map((d) => (
//         <div>{d.title}</div>
//       ))}
//     </div>
//   );
// }

function App() {
  return <div className="App">
    <Todos/>
  </div>;
}

export default App;

//Hooks are alwasys to be in the root of the function

//json-server gives a fake server to interact with backend
//so, no need to install express, mongoose
//use only for testing purpose
//Run this command
//npm install -g json-server
//json-server db.json --port 8080
//json-server db.json --port 8080 --watch
//--watch will automatically run the server every time there is change in code




//npm create vite
//go to react than react
//open project in code
//npm i
//npm run dev


//create-ract-app myapp
//change react version to 17.0.2
//npm start