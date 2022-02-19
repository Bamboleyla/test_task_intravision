import { applicationsAPI } from "../api/api";
//На всякий случай создадим свой dispatch на тот случай если вызов THUNK-CREATOR будет производится из компоненты находящаяся вне connect

const SET_PRIORITIES = 'SET_PRIORITIES';

//Инициализационный state
let initialState = {
    /* Приоритеты заявок */
    priorities:
        [
            {
                "rgb": '#5d5d5d',
                "id": 193710,
                "name": "Очень низкий"
            },
        ]
};

export const applicationsPrioritiesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PRIORITIES':
            return { ...state, priorities: [...action.priorities] }
        default: return state;
    }
};
/*****************************************************************************ACTION CREATORS*********************************************************************************************/
export let setApplicationsPrioritiesAC = (priorities) => ({ type: SET_PRIORITIES, priorities })
/*****************************************************************************THUNKS-CREATOR***********************************************************************************************/
//Получение списка заявок
export const getPriorities = () => {
    //Возврашаем Thunk
    return (dispatch) => {
        //Делаем запрос на сервер за массивом с приоритетами заявок
        applicationsAPI.getApplicationsPriorities().then((data) => {
            /* И диспачем его в state через метод getApplicationsAC */
            dispatch(setApplicationsPrioritiesAC(data.value));
        });
    }
};