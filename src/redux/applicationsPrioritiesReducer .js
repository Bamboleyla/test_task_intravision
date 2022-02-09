import { applicationsAPI } from "../api/api";

const GET_PRIORITIES = 'SET_PRIORITIES';

//Инициализационный state
let initialState = {
    /* Приоритеты заявок */
    priorities:
        [
            {
                "rgb": 'rgba(52, 52, 52, 0.8)',
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
export let getApplicationsPrioritiesAC = (priorities) => ({ type: GET_PRIORITIES, priorities })
/*****************************************************************************THUNKS-CREATOR***********************************************************************************************/
//Получение списка заявок
export const getApplicationsPriorities = () => {
    //Возврашаем Thunk
    return (dispatch) => {
        //Делаем запрос на сервер за массивом с заявками
        applicationsAPI.getApplicationsPriorities().then((data) => {
            /* И диспачем его в state через метод getApplicationsAC */
            dispatch(getApplicationsPrioritiesAC(data.value));
        });
    }
}