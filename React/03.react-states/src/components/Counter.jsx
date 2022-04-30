import  {useState} from "react";

function Counter(){
    const [counter, setCounter] = useState(0);//setCounter is a function
    //const [name, setName] = useState("javascript");

    // const handleAdd = () => {
    //     // if(counter >= 10){
    //     //     return;
    //     // }
    //     setCounter(counter + 1)
    // }

    // const handleSubtract = () => {
    //     //Do not go below zero
    //     // if(counter <= 0){
    //     //     return;
    //     // }
    //     setCounter(counter - 1)
    // }

    const handleChange = (value) => {
        //condition
        if(counter <= -2){
            alert("Counter reached to minimum value");
            return;
        }
        setCounter(counter + value);
    }
    if(counter >= 10){
        return  <h4>Counter reached maximum value</h4>
    }
    return (
        <div className="Counter">
            <h3>Counter: {counter}</h3>
            <button onClick={() => handleChange(1)}> Add 1 </button>

            {/* <button onclick={han}
                onClick={()=>{
                    //counter++;
                    // console.log("Counter changed", counter );
                    if(counter >= 10){
                        return;
                    }
                    setCounter(counter + 1)
                }}
            >
                add 1
            </button> */}
            <button onClick={() => handleChange(-1)}> sub 1 </button>

            <div>Number is {counter % 2 === 0 ? "Even" : "Odd"}</div>
        </div>
    )
}
export {Counter} 