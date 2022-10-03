import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import { reducer as AppReducer } from "./AppReducer/reducer";
import { reducer as AuthReducer } from "./AuthReducer/reducer";

//useReducer(reducer, initialState)

const rootReducer = combineReducers({ AppReducer, AuthReducer });

// middleware
// next - refer to dispatch function
// action - action object
const logger1 = (store) => (next) => (action) => {
  //refers to the next middleware, if there is any , else the reducer function
  console.log("Inside logger 1-a");
  const temp = next(action);
  next(action);
  console.log("After logger 1-b", temp);
  return temp;
};

const logger2 = (store) => (next) => (action) => {
  //refers to the next middleware, if there is any , else the reducer function
  console.log("Inside logger 2-a");
  const temp = next(action);
  next(action);
  console.log("After logger 2-b", temp);
  return temp;
};

const store = legacy_createStore(
  rootReducer,
  applyMiddleware(logger1, logger2)
);

export { store };
