import * as types from "./actionTypes";
const initialState = {
  todos: [],
  isloading: false,
  isError: false,
};

const reducer = (oldState = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_TODOS_REQUEST:
      return {
        ...oldState,
        isloading: true,
      };
    case types.GET_TODOS_SUCCESS:
      return {
        ...oldState,
        isloading: false,
        todos: payload,
      };
    case types.GET_TODOS_FAILURE:
      return {
        ...oldState,
        isloading: true,
        isError: true,
      };
    case types.ADD_TODO_REQUEST:
      return {
        ...oldState,
        isloading: true,
      };
    case types.ADD_TODO_SUCCESS:
      console.log("current todos", oldState);
      console.log("payload", payload);
      return {
        ...oldState,
        isloading: false,
        todos: [...oldState.todos, payload],
      };
    case types.ADD_TODO_FAILURE:
      return {
        ...oldState,
        isloading: true,
        isError: true,
      };
    default:
      return oldState;
  }
};

export { reducer };
