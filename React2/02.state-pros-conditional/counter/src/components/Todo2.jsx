import React, { useState } from "react";
import styles from"./todo.module.css"

const Todo2 = () => {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);

  //   const handleChange = (e) => {
  //     setValue(e.target.value);
  //   };
  return (
    <div>
      Todo2
      <input
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setTodos([
            ...todos,
            {
              id: Date.now(),
              value: value,
              isCompleted: false,
            },
          ]);
          setValue("");
        }}
      >
        Add
      </button>
      {/* {TODOS} */}
      <div>
        {todos.map((todo) => (
          <div className={styles.todo} key={todo.id}>
            <input type="checkbox" />
            <div>{todo.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo2;
