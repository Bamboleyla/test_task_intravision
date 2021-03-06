import { combineReducers, createStore, applyMiddleware } from "redux";
import { applicationsPrioritiesReducer } from "./applicationsPrioritiesReducer ";
import { applicationsReducer } from "./applicationsReducer";
import thunkMiddleware from 'redux-thunk';
import { editApplicationReducer } from "./editApplicationReducer";
import { applicationsStatusesReducer } from "./applicationsStatusesReducer";
import { usersReducer } from "./usersReducer";

let reducers = combineReducers(
    {
        applicationsPage: applicationsReducer, //Список заявок
        applicationsPriorities: applicationsPrioritiesReducer, //Список приоритетов
        applicationEdit: editApplicationReducer, //Форма редактируемой заявки
        applicationsStatuses: applicationsStatusesReducer, //Список статусов заявок
        usersList: usersReducer //Список пользователей
    }
);
let store = createStore(reducers, applyMiddleware(thunkMiddleware));

//Что бы достучаться к store из консоли
window.store = store.getState;

export default store;