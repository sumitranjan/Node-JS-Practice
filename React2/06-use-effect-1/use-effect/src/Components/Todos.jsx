import { useEffect } from "react";
import { useState } from "react";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  //fetch("https://m6g3bt.sse.codestandbox.io/todos")
  //   fetch("http://localhost:8080/todos")
  //     .then((r) => r.json())
  //     .then((d) => {
  //       setTodos(d);
  //     });

  useEffect(() => {
    //fetch("http://localhost:8080/todos?_page=1&_limit=2")
    fetch("http://localhost:8080/todos")
      .then((r) => r.json())
      .then((d) => {
        setTodos(d);
      });
  }, []);

  const saveInfo = () => {
    //call api to save this information in backend
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
        setNewTodo("");
      });
  };
  return (
    <div>
      <h3>Todos</h3>
      <div>
        <input
          value={newTodo}
          onChange={({ target }) => setNewTodo(target.value)}
        />
        <button onClick={saveInfo}>+</button>
        {todos.map((todo) => (
          <div key={todo.id}>{todo.text}</div>
        ))}
      </div>
    </div>
  );
};

export default Todos;
