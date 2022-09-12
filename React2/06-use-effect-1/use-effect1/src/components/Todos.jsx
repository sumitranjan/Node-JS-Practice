import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Todos = () => {
  const [newTodo, setNewTodos] = useState("");
  const [todos, setTodos] = useState([]);
  function saveInfo() {
    fetch("http://localhost:8080/todos", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        text: newTodo,
        isCompleted: false,
      }),
    })
      .then((r) => r.json())
      .then((d) => {
        setTodos([...todos, d]);
        setNewTodos("");
      });
  }

  useEffect(() => {
    fetch("http://localhost:8080/todos")
      .then((r) => r.json())
      .then((d) => {
        setTodos(d);
      });
  }, []);
 
  return (
    <div>
      Todos
      <div>
        <input
          value={newTodo}
          onChange={({ target }) => setNewTodos(target.value)}
        />
        <button onClick={saveInfo}>+</button>
      </div>
      {todos.map((todo) => (
        <div key={todo.id}>{todo.text}</div>
      ))}
    </div>
  );
};

export default Todos;
