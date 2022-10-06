import axios,{AxiosResponse} from 'axios';
import React, { useEffect, useState } from 'react'
import Header from './Header'
import TodosInput from './TodosInput'
import TodosItem from './TodosItem';

export interface ITodoItems {
  id: number;
  title: string;
  status: boolean;
}

const Todos = () => {
  const [todos, setTodos] = useState<ITodoItems[]>([]);
  
  // const handleAdd = (title:string) => {
  //   const payload = {
  //     id:todos.length+1,
  //     title,
  //     status: false,
  //   }
  //   setTodos([...todos, payload])
  // }

  const handleAdd = (title:string) => {
    const payload = {
      title,
      status: false,
    }
    axios.post('http://localhost:8080/todos',payload).then(getTodos)
  }

  const getTodos = () =>{
    //Method 1
    // axios.get('http://localhost:8080/todos')
    //   .then(({data}:{data:ITodoItems[]}) =>{
    //     setTodos(data)
    //   })

    //Method 2
    axios.get('http://localhost:8080/todos')
      .then((res:AxiosResponse<ITodoItems[]>)=>{
        setTodos(res.data);
      })
    // .then(res => {
    //   const {data} = res;
    //   setTodos(data);
    // })
  }

  useEffect(()=>{
    getTodos();
  },[])
  return (
    <div>
      <Header label="Todos"/>
      <TodosInput handleAdd={handleAdd}/>
      {todos.length > 0 && todos.map(item => {
        return <TodosItem key={item.id} {...item}/>
      })}
    </div>
  )
}

export default Todos