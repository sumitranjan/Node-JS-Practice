import React from "react";
import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import TodoList from "./TodoList";

const Todo = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };
  const deleteTodo = (value) => {
    setTodos(todos.filter((todo) => todo !== value));
  };
  return (
    <div>
      Todo
      <TodoInput addTodo={addTodo} />
      <TodoList value={Date.now()} />
      {todos.map((todo) => (
        <TodoItem key={todo} value={todo} deleteTodo={deleteTodo} />
      ))}
    </div>
  );
};

export default Todo;
