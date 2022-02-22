import { applicationsAPI } from "../api/api";
import { setApplicationsPrioritiesAC } from "./applicationsPrioritiesReducer ";

const GET_APPLICATIONS = 'GET_APPLICATIONS';
const SAVE_COMMENT = 'SAVE_COMMENT';
const SET_STATUS = 'SET_STATUS';
const SET_EXECUTOR = 'SET_EXECUTOR';

//Инициализационный state
let initialState = {
    /* Заявки */
    applications: [
        {
            'id': 193710,
            'name': 'Заказать обед',
            'description': '<p style=\color: #e5e5e5;\>Уха</p> из трех видов рыб. Салат с телятиной. МОРС КЛЮКВЕННЫЙ',
            'createdAt': '2022-02-07T07:34:08.2275098+03:00',
            'updatedAt': '2022-02-07T07:34:08.2275098+03:00',
            'price': 100.0,
            'taskTypeId': 70630,
            'taskTypeName': 'Стандартный',
            'statusId': 121260,
            'statusName': 'Открыта',
            'statusRgb': '#fd5e53',
            'priorityId': 104383,
            'priorityName': 'Средний',
            'serviceId': 70629,
            'serviceName': 'Еда > Заказ обедов',
            'resolutionDatePlan': '2022-02-07T07:34:08.2275098+03:00',
            'initiatorId': 70631,
            'initiatorName': 'Иванов Андрей',
            'executorId': 70630,
            'executorName': 'Петров Борис',
            'executorGroupId': 70629,
            'executorGroupName': 'Офис менеджеры',
            'tags': [
                {
                    'id': 104382,
                    'name': 'Салат'
                },
                {
                    'id': 104381,
                    'name': 'Суп'
                }
            ]
        }
    ]
};

export const applicationsReducer = (state = initialState, action) => {
    debugger;
    switch (action.type) {
        case 'GET_APPLICATIONS':
            return { ...state, applications: [...action.applications] }
        case 'SAVE_COMMENT':
            for (let i = 0; i < state.applications.length; i++) {
                if (state.applications[i].id === action.id) {
                    state.applications[i].comment === undefined ?
                        state.applications[i].comment = action.comment :
                        state.applications[i].comment.push(action.comment);
                    return state
                }
            }
            return state;
        case 'SET_STATUS':
            for (let i = 0; i < state.applications.length; i++) {
                if (state.applications[i].id === action.id) {
                    state.applications[i].statusName = action.status
                    return state
                }
            }
            return state;
        case 'SET_EXECUTOR':
            for (let i = 0; i < state.applications.length; i++) {
                if (state.applications[i].id === action.id) {
                    state.applications[i].executorName = action.executor
                    return state
                }
            }
            return state;
        default: return state;
    }
};
/*****************************************************************************ACTION CREATORS*********************************************************************************************/
export let getApplicationsAC = (applications) => ({ type: GET_APPLICATIONS, applications });
let addCommentAC = (id, text) => ({ type: SAVE_COMMENT, id, text });
export let setStatusAC = (id, status) => ({ type: SET_STATUS, id, status });
export let setExecutorAC = (id, executor) => ({ type: SET_EXECUTOR, id, executor });

/*****************************************************************************THUNKS-CREATOR***********************************************************************************************/
//Получение списка заявок
export const getApplications = () => async (dispatch) => {
    const preopities = await applicationsAPI.getApplicationsPriorities();
    dispatch(setApplicationsPrioritiesAC(preopities))
    const applications = await applicationsAPI.getApplications();
    dispatch(getApplicationsAC(applications.value));
};

export const addComment = (id, text) => {
    return (dispatch) => {
        dispatch(addCommentAC(id, text))
    }
};