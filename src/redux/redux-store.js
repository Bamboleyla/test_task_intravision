import { combineReducers, createStore, applyMiddleware } from "redux";
import { applicationsPrioritiesReducer } from "./applicationsPrioritiesReducer ";
import { applicationsReducer } from "./applicationsReducer";
import thunkMiddleware from 'redux-thunk';
import { editApplicationReducer } from "./editApplicationReducer";
import { applicationsStatusesReducer } from "./applicationsStatusesReducer";

let reducers = combineReducers(
    {
        applicationsPage: applicationsReducer,
        applicationsPriorities: applicationsPrioritiesReducer,
        applicationEdit: editApplicationReducer,
        applicationsStatuses: applicationsStatusesReducer
    }
);
let store = createStore(reducers, applyMiddleware(thunkMiddleware));

//Что бы достучаться к store из консоли
window.store = store.getState;

export default store;