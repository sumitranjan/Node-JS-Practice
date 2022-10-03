import {ADD, REDUCE} from './actionTypes'
const reducer = (oldState, action) => {
  const { type, payload } = action;

  //   console.log("Inside Reducer.js", type, payload);
  switch (type) {
    case ADD:
      return { ...oldState, count: oldState.count + payload };
    case REDUCE:
      return { ...oldState, count: oldState.count - payload };
    default:
      return oldState;
  }
};

export { reducer };
