import { applicationsAPI } from "../api/api";

const SET_USERS = 'SET_USERS';
//Инициализационный state
let initialState = {
    users: [
        {
            "id": 70629,
            "name": "Сидоров Иван"
        },
    ]
};
export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USERS':
            return { ...state, users: [...action.list] }
        default: return state;
    }
};
/*****************************************************************************ACTION CREATORS*********************************************************************************************/
export let setUsersListAC = (list) => ({ type: SET_USERS, list })
/*****************************************************************************THUNKS-CREATOR***********************************************************************************************/
//Получение списка пользователей
export const getUsers = () => {
    //Возврашаем Thunk
    return (dispatch) => {
        //Делаем запрос на сервер за массивом с пользователями
        applicationsAPI.getUsers().then((data) => {
            /* И диспачем его в state через метод setUsersListAC */
            dispatch(setUsersListAC(data));
        });
    }
};