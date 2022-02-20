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
            {
                "id": 104382,
                "name": "Салат"
            },
            {
                "id": 104383,
                "name": "Сервер"
            },
            {
                "id": 104384,
                "name": "Важно"
            },
            {
                "id": 104385,
                "name": "Проверить"
            }
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
//Получение списка заявок
export const getStatuses = () => {
    //Возврашаем Thunk
    return (dispatch) => {
        //Делаем запрос на сервер за массивом с приоритетами заявок
        applicationsAPI.getApplicationsStatuses().then((data) => {
            /* И диспачем его в state через метод getApplicationsAC */
            dispatch(setApplicationsStatusesAC(data));
        });
    }
};