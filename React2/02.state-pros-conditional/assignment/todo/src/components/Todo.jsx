import {TodoInput} from "./TodoInput"
import {useState} from "react"
import {TodoItem} from "./TodoItem"
import {nanoid} from "nanoid"
function Todo(){
    const [todosList, setTodosList] = useState([])

    const getData = (todo)=>{
        // console.log(":Received",todo)

        const payload = {
            title:todo,
            status:false,
            id:nanoid(5)
        }

        setTodosList([...todosList,payload])
    }

    const handleStatus=(id)=>{

        const newarr = todosList.map(e=>{
            if(e.id===id){
                return {
                    ...e,status: !e.status 
                }
            }
            return e
        })
        setTodosList(newarr)

        // setTodosList([...todosList.map((e)=>e.id===id ?{...e, status: !e.status}:e)])
    }
    return(
     <div>
            <TodoInput getData={getData} />
            {todosList.map((e)=>(
                // <div>{e}</div>
                <TodoItem handleStatus={handleStatus} todo={e}></TodoItem>
            ))}
        </div>
)
}

export {Todo}