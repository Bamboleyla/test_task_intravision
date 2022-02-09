import { combineReducers, createStore } from "redux";
import { applicationsPrioritiesReducer } from "./applicationsPrioritiesReducer ";
import { applicationsReducer } from "./applicationsReducer";

let redusers = combineReducers(
    {
        applicationsPage: applicationsReducer,
        applicationsPriorities: applicationsPrioritiesReducer,
    }
);
let store = createStore(redusers);

export default store;