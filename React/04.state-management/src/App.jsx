import {useState} from "react";
import './App.css';
// //Parent=> child
// function App() {
//   const data = "hello c1";
//   return (
//     <div className="App">
//       <First data ={data}/>
//       <Second/>
//     </div>
//   );
// }

// function First({data}){ 
//   console.log("Received from parent ", data)
//   return <div>First Child</div>
// }

// function Second(){
//   return <div>Second Child</div>
// }





// //Child ==> Parent
// function App() {
//   const getData = (data) =>{
//     console.log("Got Data from child : ",data);
//   }
//   return (
//     <div className="App">
//       <First dataFn ={getData}/>
//       <Second/>
//     </div>
//   );
// }

// function First({dataFn}){ 
//  const data = "Hello c1";
//  dataFn(data);
//   return <div>First Child</div>
// }

// function Second(){
//   return <div>Second Child</div>
// }





//siblings : child1-->parent-->child2
function App() {
const [message, setMessage] = useState("Hello c1");

  const getData = (data) =>{
    console.log("Got Data from child : ",data);  
    setMessage(data);
  }
  return (
    <div className="App">
      <First dataFn ={getData}/>
      <Second message ={message}/>
    </div>
  );
}

function First({dataFn}){ 
 const data = "Hello c1";
 dataFn(data);
  return <div>First Child</div>
}

function Second({message}){
  console.log("Got data from sibling:", message)
  return <div>Second Child, {message}</div>
}

export default App;
