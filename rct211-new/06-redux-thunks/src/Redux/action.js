import * as types from "./actionTypes";

//action Creators function
const getTasksRequest = () => {
  return {
    type: types.GET_TODOS_REQUEST,
  };
};

const getTasksSuccess = (payload) => {
  return {
    type: types.GET_TODOS_SUCCESS,
    payload,
  };
};

const getTasksFailure = () => {
  return {
    type: types.GET_TODOS_FAILURE,
  };
};
const addTaskRequest = () => {
  return {
    type: types.GET_TODOS_REQUEST,
  };
};

const addTaskSuccess = (payload) => {
  return {
    type: types.GET_TODOS_SUCCESS,
    payload,
  };
};

const addTaskFailure = () => {
  return {
    type: types.GET_TODOS_FAILURE,
  };
};

export {
  getTasksFailure,
  getTasksSuccess,
  getTasksRequest,
  addTaskRequest,
  addTaskSuccess,
  addTaskFailure,
};
