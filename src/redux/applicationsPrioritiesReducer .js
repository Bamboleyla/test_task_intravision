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