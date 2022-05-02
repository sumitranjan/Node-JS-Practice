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
//child 1 & child 2 dont't know about each other.
function App() {
  const [message, setMessage] = useState(""); //states

  const getData = (data) =>{
    console.log("Got Data from child : ",data);  
    setMessage(data);
  }
  return (
    <div className="App">
      <First dataFn = {getData}/>
      <Second message = {message}/> 
      {/* second component will re-render */}
    </div>
  );
}

function First({dataFn}){ 
 const data = "Hello c1";
 
  return(
    <div>
      First Child
      <button
        onClick={()=>{
          dataFn(data);
        }}
        >
        Send data
      </button>
      </div>
    
  ) 
}

function Second({message}){
  console.log("Got data from sibling:", message)
  return <div>Second Child, {message}</div>
}

export default App;
