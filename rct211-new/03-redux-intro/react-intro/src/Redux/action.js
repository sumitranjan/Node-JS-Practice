import { ADD, REDUCE } from "./actionTypes";

const handleAddActionObj = (payload) => {
  return {
    type: ADD,
    payload,
  };
};

const handleReduceActionObj = (payload) => {
  return {
    type: REDUCE,
    payload,
  };
};

export { handleAddActionObj, handleReduceActionObj };
