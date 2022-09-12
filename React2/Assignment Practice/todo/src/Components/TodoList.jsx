import React from "react";

const TodoList = ({ children }) => {
  return (
    <div>
      <h1>Here is your TODO List</h1>
      <ul>{children}</ul>
    </div>
  );
};

export default TodoList;
