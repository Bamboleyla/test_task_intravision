import { applicationsAPI } from "../api/api";
import { setApplicationsPrioritiesAC } from "./applicationsPrioritiesReducer ";

const GET_APPLICATIONS = 'GET_APPLICATIONS';

//Инициализационный state
let initialState = {
    /* Заявки */
    applications: [
        {
            id: 193710,
            name: 'Заказать обед',
            description: '<p style=\color: #e5e5e5;\>Уха</p> из трех видов рыб. Салат с телятиной. МОРС КЛЮКВЕННЫЙ',
            createdAt: '2022-02-07T07:34:08.2275098+03:00',
            updatedAt: '2022-02-07T07:34:08.2275098+03:00',
            price: 100.0,
            taskTypeId: 70630,
            taskTypeName: 'Стандартный',
            statusId: 121260,
            statusName: 'Открыта',
            statusRgb: '#fd5e53',
            priorityId: 104383,
            priorityName: 'Средний',
            serviceId: 70629,
            serviceName: 'Еда > Заказ обедов',
            resolutionDatePlan: '2022-02-07T07:34:08.2275098+03:00',
            initiatorId: 70631,
            initiatorName: 'Иванов Андрей',
            executorId: 70630,
            executorName: 'Петров Борис',
            executorGroupId: 70629,
            executorGroupName: 'Офис менеджеры',
            tags: [
                {
                    id: 104382,
                    name: 'Салат'
                },
                {
                    id: 104381,
                    name: 'Суп'
                }
            ]
        }
    ]
};

export const applicationsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_APPLICATIONS':
            return { ...state, applications: [...action.applications] }
        default: return state;
    }
};
/*****************************************************************************ACTION CREATORS*********************************************************************************************/
let getApplicationsAC = (applications) => ({ type: GET_APPLICATIONS, applications })
/*****************************************************************************THUNKS-CREATOR***********************************************************************************************/
//Получение списка заявок
export const getApplications = () => {
    //Возврашаем Thunk
    return (dispatch) => {
        debugger;
        //Делаем запрос на сервер за массивом с приоритетами заявок
        applicationsAPI.getApplicationsPriorities().then((data) => {
            /* И диспачем его в state через метод getApplicationsAC */
            dispatch(setApplicationsPrioritiesAC(data));
        });
        //Делаем запрос на сервер за массивом с заявками
        applicationsAPI.getApplications().then((data) => {
            /* И диспачем его в state через метод getApplicationsAC */
            dispatch(getApplicationsAC(data.value));
        });
    }
}
