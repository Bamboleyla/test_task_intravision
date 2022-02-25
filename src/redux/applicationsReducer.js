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
            'description': 'МОРС КЛЮКВЕННЫЙ',
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
    ],
    'rerender': false,
};

export const applicationsReducer = (state = initialState, action) => {
    debugger
    switch (action.type) {
        case 'GET_APPLICATIONS':
            return { ...state, applications: [...action.applications] }
        case 'SAVE_COMMENT':
            const newComment = {
                applications: state.applications.map((app) =>
                    app.id === action.id
                        ? app.comment === undefined ? { ...app, comment: [action.comment] } : { ...app, comment: [...app.comment, action.comment] }
                        : app
                ),
            };
            return newComment;
        case 'SET_STATUS':
            const newStatus = {
                applications: state.applications.map((app) =>
                    app.id === action.id
                        ? { ...app, statusName: action.status }
                        : app
                ),
            };
            return newStatus;
        case 'SET_EXECUTOR':
            const newExecutor = {
                applications: state.applications.map((app) =>
                    app.id === action.id
                        ? { ...app, executorName: action.executor }
                        : app
                ),
            };
            return newExecutor;
        default: return state;
    }
};
/*****************************************************************************ACTION CREATORS*********************************************************************************************/
export let getApplicationsAC = (applications) => ({ type: GET_APPLICATIONS, applications });
export let addCommentAC = (id, comment) => ({ type: SAVE_COMMENT, id, comment });
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