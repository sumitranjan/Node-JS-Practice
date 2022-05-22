import React, { useState } from "react";

const TodoInput = ({ addTodo }) => {
  const [value, setValue] = useState("");
  return (
    <div>
      <input
        type="text"
         value={value}
        placeholder="new todo item"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button
        onClick={() => {
          console.log(value);
          addTodo(value);
          setValue("");
        }}
      >
        add
      </button>
    </div>
  );
};

export default TodoInput;
