import { useEffect, useState } from "react";

export const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await fetch("http://localhost:8080/todos").then((d) =>
      d.json()
    );
    setTodos(data);
    setLoading(false)
  };
  return loading ? (
    "Loading....."
  ) : (
    <div>
      <input
        onChange={(e) => setText(e.target.value)}
        type="text"
        placeholder="Enter todo"
      />
      <button
        onClick={() => {
          const payload = {
            title: text,
            status: false,
          };

          fetch("http://localhost:8080/todos", {
            method: "Post",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(payload),
          }).then(() => {
            getData();
          });
          //axios.post("http://localhost:8080/todos",payload)
          //same as above fetch request
        }}
      >
        Add todo
      </button>
      {todos.map((t) => (
        <div>{t.title}</div>
      ))}
    </div>
  );
};
