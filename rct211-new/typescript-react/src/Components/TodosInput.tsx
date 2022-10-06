import React, { useState } from 'react'
interface ITodosInputProps {
    handleAdd:(value:string)=>void;
}
const TodosInput = ({handleAdd}:ITodosInputProps) => {
    const [text, setText] = useState<string>('');

    const clickHandler = () =>{
        if(text !==''){
            handleAdd(text)
        }
    }

    //const x:string = "Masai"
    //function: type = () =>{}

    //onClick -> e.target.value?? -> target.value would not be present for onClick
    //.value input, text boxes,
    const changeHandler:React.ChangeEventHandler<HTMLInputElement>  = (e) =>{
        setText(e.target.value)
    }
  return (
    <div>
        <input type={'text'} value={text} onChange={changeHandler}/>
        <button onClick={clickHandler}>Add</button>
    </div>
  )
}

export default TodosInput