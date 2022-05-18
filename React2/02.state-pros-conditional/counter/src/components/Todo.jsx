import React, { useState } from "react";

const Todo = () => {
  const [value, setValue] = useState("");

  const [todos, setTodos] = useState(["Hello", "Ritesh"]);
  return (
    <div>
      Todo
      <input
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button
        onChange={() => {
          setTodos([...todos, { value: value }]);
          setValue("");
        }}
      ></button>
      {/*TODOS*/}
      {todos.map((todo) => (
        <div>{todo}</div>
      ))}
    </div>
  );
};

export default Todo;
