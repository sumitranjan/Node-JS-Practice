import { legacy_createStore } from "redux";
import { reducer } from "./reducer";

//useReducer(reducer, initialState)
const store = legacy_createStore(reducer);

export { store };
