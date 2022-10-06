import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addTaskSuccess,
  getTasksFailure,
  addTaskRequest,
} from "../Redux/action";
import Todos from "./Todos";

const TodoInput = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState("");

  const addTodo = () => {
    if (task) {
      const payload = {
        title: task,
        status: false,
      };
      dispatch(addTaskRequest());
      axios
        .post("http://localhost:8080/todos", payload)
        .then((r) => {
          dispatch(addTaskSuccess(r.data));
        })
        .catch((e) => {
          dispatch(getTasksFailure(e));
        });
    }
  };
  useEffect(() => {
    if (Todos.length === 0) {
      getTasksFailure();
    }
  }, []);
  return (
    <div>
      <input value={task} onChange={(e) => setTask(e.target.value)} />
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
};

export default TodoInput;
