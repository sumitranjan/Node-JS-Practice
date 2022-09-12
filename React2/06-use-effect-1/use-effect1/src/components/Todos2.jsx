import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const Todos2 = () => {
  const [todos, setTodos] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [totalCount, setTotalCount] = useState(0);

  //useEfect to run anything only one
  //useEffect when one particular state value changes
  useEffect(() => {
    const getTodo = async () => {
      let r = await axios.get(
        `http://localhost:8080/todos?_page=${page}&_limit=${limit}`
      );
      setTodos(r.data);
      setTotalCount(Number(r.headers["x-total-count"]));
    };
    getTodo();
  }, [page, limit]);

  return (
    <div>
      <button
        disabled={page <= 1}
        onClick={() => {
          setPage(page - 1);
        }}
      >
        {`<`}
      </button>
      <input
        type="number"
        value={limit}
        min={0}
        max={totalCount}
        onChange={({ target }) => setLimit(Number(target.value))}
      />
      <button
        disabled={totalCount < page * 5}
        onClick={() => setPage(page + 1)}
      >
        {`>`}
      </button>
      {todos.map((todo, index) => (
        <div key={todo.id}>
          <h2>
            {index} {` : `}
            {todo.value}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default Todos2;
