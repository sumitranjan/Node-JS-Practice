import React, { useState } from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import TodoList from "./TodoList";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = ( newTodo ) => {
    setTodos([...todos, newTodo]);
  };
  const deleteTodo = (value) => {
    setTodos(todos.filter((todo) => todo !== value));
  };
  //input
  //listing
  //todo item
  return (
    <div>
      TodoApp
      <TodoInput addTodo={addTodo} />
      <TodoList >
        <div value={ Date.now()}>
        {todos.map((todo) => (
          <TodoItem key={todo} value={todo} deleteTodo={deleteTodo} />
        ))}
        </div>
      </TodoList>
    </div>
  );
};

export default TodoApp;
