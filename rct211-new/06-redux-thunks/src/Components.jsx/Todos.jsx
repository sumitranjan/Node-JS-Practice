import React, { useEffect } from "react";
import TodoInput from "./TodoInput";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  getTasksRequest,
  getTasksSuccess,
  getTasksFailure,
} from "../Redux/action";

const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const getTasks = () => {
    dispatch(getTasksRequest());
    return axios
      .get("http://localhost:8080/todos")
      .then((r) => {
        dispatch(getTasksSuccess(r.data));
      })
      .catch((e) => {
        dispatch(getTasksFailure(e));
      });
  };

  useEffect(() => {
    if (todos.length === 0) {
      getTasks();
    }
  }, [ ]);
  return (
    <div>
      Todos
      <TodoInput />
      {todos.length > 0 &&
        todos.map((item) => {
          return (
            <div key={item.id}>
              {item.title} - {item.status ? "True" : "False"}
            </div>
          );
        })}
    </div>
  );
};

export default Todos;
