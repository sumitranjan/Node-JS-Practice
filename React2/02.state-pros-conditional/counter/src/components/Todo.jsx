import React, { useState } from "react";

const Todo = () => {
  const [value, setValue] = useState("");

  const [todos, setTodos] = useState([]);
  return (
    <div>
      Todo
      <input
        // value={value}-->pass initial value to input and remove from input
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setTodos([...todos, { id: Date.now(), value: value }]);
          setValue("");
        }}
      >
        Submit
      </button>
      {/*TODOS*/}
      {todos.map((todo) => (
        <div>
          <input type="checkbox" />
          <div key={todo.id}>{todo.value}</div>
        </div>
      ))}
    </div>
  );
};

export default Todo;
