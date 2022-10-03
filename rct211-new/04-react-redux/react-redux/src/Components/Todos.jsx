import React from "react";
import TodoInput from "./TodoInput";
import { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import axios from "axios";
import {
  getTodosFailure,
  getTodosRequest,
  getTodosSuccess,
  postTodoRequest,
  postTodoSuccess,
  postTodoFailure,
} from "../Redux/action";

const Todos = () => {
  const dispatch = useDispatch();
  //   const todos = useSelector((state) => state.todos);
  const { todos, isLoading, isError } = useSelector((state) => {
    return {
      todos: state.todos,
      isLoading: state.isLoading,
      isError: state.isError,
    };
  }, shallowEqual);
  //shallowEqual : if data is not changed then there will be no re-rendering
  //If counter component is changed then Todos component is not re-rendering
  const getTodos = () => {
    //Request
    dispatch(getTodosRequest()); //loading indicator
    return axios
      .get("http://localhost:8080/todos")
      .then((r) => {
        //successful
        dispatch(getTodosSuccess(r.data));
      })
      .catch((e) => {
        //Failure
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

  //To Display Todo List after adding
  const handleAddTodo = (text) => {
    addTodo(text)
      .then(() => getTodos())
      .then(() => {
        console.log("Process completed");
      });
  };

  //get all the todos we have in db.json
  useEffect(() => {
    getTodos();
  }, []);

  console.log("Todos component is Rendering");
  return (
    <div>
      Todos
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
