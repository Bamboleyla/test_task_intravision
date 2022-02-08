import { combineReducers, createStore } from "redux";
import { applicationsReducer } from "./applicationsReducer";

let redusers = combineReducers(
    { applicationsPage: applicationsReducer }
);
let store = createStore(redusers);

export default store;