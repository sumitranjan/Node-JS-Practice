import {useState} from "react"

export const TodoInput = ({getData}) => {
    const [text, setText] = useState("");
    // console.log(text)
    return (
        <div>
            <input onChange={(e) => {
                setText(e.target.value)
            }} 
            type="text" 
            placeholder="Enter Todo" />
            <button 
            onClick ={()=>{
                
                getData(text)
                console.log("Button Click")
            }} >Add Todo</button>
            {/* {text} */}
        </div>
    )
}