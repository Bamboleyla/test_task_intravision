import { applicationsAPI } from "../api/api";

const SET_STATUSES = 'SET_STATUSES';

//Инициализационный state
let initialState = {
    /* Приоритеты заявок */
    statuses:
        [
            {
                "id": 104381,
                "name": "Суп"
            },
        ]
};

export const applicationsStatusesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_STATUSES':
            return { ...state, statuses: [...action.statuses] }
        default: return state;
    }
};
/*****************************************************************************ACTION CREATORS*********************************************************************************************/
export let setApplicationsStatusesAC = (statuses) => ({ type: SET_STATUSES, statuses })
/*****************************************************************************THUNKS-CREATOR***********************************************************************************************/
//Получение списка статусов
export const getStatuses = () => {
    //Возврашаем Thunk
    return (dispatch) => {
        //Делаем запрос на сервер за массивом с приоритетами заявок
        applicationsAPI.getApplicationsStatuses().then((data) => {
            dispatch(setApplicationsStatusesAC(data));
        });
    }
};