import React, { useState, useEffect } from "react";
import axios from "axios";

const Todos = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [totalCount, setTotalCount] = useState(0);
  const [todos, setTodos] = useState([]);

  //useEffect to run anything only one
  //useEffect when one particular state value changes
  useEffect(() => {
    const getTodo = async () => {
      let r = await axios.get(
        `http://localhost:8080/todos?_page=${page}&_limit=${limit}`
      );
      // let data = await r.json();
      // dont nedd to convert to json , it directly give data in json
      // console.log(r.data);
      setTodos(r.data);
      setTotalCount(Number(r.headers["x-total-count"]));
    };
    getTodo();
  }, [page, limit]);

  return (
    <div className="App">
      <button
        disabled={page <= 1}
        onClick={() => {
          setPage(page - 1);
        }}
      >
        {" "}
        {`<`}{" "}
      </button>
      {/* <input
          type="number"
          min={0}
          max={totalCount}
          onChange={({ target }) => setLimit(Number(target.value))}
        /> */}
      <select onClick={(e) => setLimit(Number(e.target.value))}>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
      </select>
      <button
        disabled={totalCount < page * limit}
        onClick={() => setPage(page + 1)}
      >
        {">"}
      </button>
      {todos.map((todo) => (
        <div key={todo.id}>
          {todo.id} {`:`} {todo.text}
        </div>
      ))}
    </div>
  );
};

export default Todos;
