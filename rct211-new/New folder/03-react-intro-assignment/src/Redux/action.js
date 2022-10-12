import { ADD, REDUCE } from "./actionType";

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
