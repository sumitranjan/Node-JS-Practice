
-React
    -useState 
        //Get two things : variable & updateFunction
        //create a state variable
        //update/rerender dom when the state variable is updated
    -useEffect 
    -useRef
    -styling library
        - .css 
        - .module.css 
        - styled-components 
        - chakra-UI
    -useReducer
        //Get these things : variable//dispatch which can monitored actions on change
        //create a state variable
        //update/rerender dom when the state variable is updated

Next 2 Weeks
How to make our life simpler.

-Controlled and uncontrolled State?
A: 

//Controlled State
function App() {
  const [counter, setCounter] = useState({value:""}); //value is given by us.so we are controlling value
  const handleOnChange = (e) =>{
    setCounter({value:e.target.value});
  };
  return (
    <div className="App">
        // We are controling input element  //value={counter.value}
      <input type="text" value={counter.value} onChange={handleOnChange}/>
    </div>
  );
}


//Uncontrolled State
function App() {
  const [counter, setCounter] = useState(); //value is undefined, so React is controlling value
  const handleOnChange = (e) =>{
    setCounter({value:e.target.value});
  };
  return (
    <div className="App">
        // React is controling the value , as value is undefined
      <input type="text"  onChange={handleOnChange}/>
    </div>
  );
}


