import React from "react";
import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import TodoInput from "./TodoInput";
import axios from "axios";
import {
  getTodosFailure,
  getTodosRequest,
  getTodosSuccess,
  postTodoFailure,
  postTodoRequest,
  postTodoSuccess,
} from "../Redux/action";

const Todos = () => {
  const dispatch = useDispatch();

  const { todos } = useSelector((state) => {
    return {
      todos: state.todos,
      isLoading: state.isLoading,
      isError: state.isError,
    };
  }, shallowEqual);

  const getTodos = () => {
    dispatch(getTodosRequest());
    return axios
      .get("http://localhost:8080/todos")
      .then((r) => {
        dispatch(getTodosSuccess(r.data));
      })
      .catch((e) => {
        dispatch(getTodosFailure());
        console.log(e);
      });
  };

  const addTodo = (title) => {
    if (title) {
      const payload = {
        title,
        status: false,
      };
      dispatch(postTodoRequest());
      return axios
        .post("http://localhost:8080/todos", payload)
        .then((r) => {
          dispatch(postTodoSuccess());
        })
        .catch((e) => {
          dispatch(postTodoFailure);
        });
    }
  };

  const handleAddTodo = (text) => {
    addTodo(text)
      .then(() => getTodos())
      .then(() => {
        console.log("Process completed");
      });
  };

  useEffect(() => {
    getTodos();
  }, []);
  console.log("Todos component is Rendering");
  return (
    <div>
      <h1>Todos</h1>
      <TodoInput handleAddTodo={handleAddTodo} />
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
