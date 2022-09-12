import React from "react";
import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import TodoList from "./TodoList";

const Todo = () => {
  const [todo, setTodo] = useState([]);
  const addTodo = (newTodo) => {
    setTodo([...todo, newTodo]);
  };
  const deleteTodo = (value) => {
    setTodo(todo.filter((todo) => todo !== value));
  };
  return (
    <div>
      TodoApp
      <TodoInput addTodo={addTodo} />
    {console.log(todo)}
      <TodoList>
        <div value={Date.now()}>
          {todo.map((todo) => (
            <TodoItem key={todo} value={todo} deleteTodo={deleteTodo} />
          ))}
        </div>
      </TodoList>
    </div>
  );
};

export default Todo;
