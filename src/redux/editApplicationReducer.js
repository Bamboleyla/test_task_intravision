import { applicationsAPI } from "../api/api";
import { getApplicationsAC } from "./applicationsReducer";

const SET_APPLICATION = 'SET_APPLICATION';
const ADD_COMMENT = 'ADD_COMMENT';

let initialState = {
    'id': 194722,
    'name': "hello!",
    'description': "world!",
    'createdAt': "2022-02-13T06:36:24.5105477",
    'updatedAt': "2022-02-13T06:36:24.5105477",
    'price': 0,
    'taskTypeId': 70629,
    'taskTypeName': "Запрос на изменение",
    'statusId': 121256,
    'statusName': "Закрыта",
    'statusRgb': "#3cb371",
    'priorityId': 104381,
    'priorityName': "Очень низкий",
    'serviceId': 70629,
    'serviceName': "Еда > Заказ обедов",
    'resolutionDatePlan': "2022-02-12T16:08:20.268",
    'tags': [
        {
            'id': 104383,
            'name': "Сервер"
        }
    ],
    'initiatorId': 70629,
    'initiatorName': "Сидоров Иван",
    'executorId': 70629,
    'executorName': "Сидоров Иван",
    'executorGroupId': 70629,
    'executorGroupName': "Офис менеджеры",
    'lifetimeItems': [
        {
            'id': 149021,
            'userName': "f4ab007d-4315-4f51-8fee-5dbd07dcd788",
            'lifetimeType': 20,
            'createdAt': "2022-02-13T06:36:24.5105477",
            'comment': "string",
            'fieldName': null,
            'oldFieldValue': null,
            'newFieldValue': null
        }
    ]
};

export const editApplicationReducer = (state = initialState, action) => {
    debugger;
    switch (action.type) {
        case 'SET_APPLICATION':
            state = action.data
            return state;
        case 'ADD_COMMENT':
            if (state.comment === undefined) {
                state.comment = [];
                state.comment.push(action.data)
            }
            else state.comment.push(action.data)

            return state;
        default: return state;
    }
};

/*****************************************************************************ACTION CREATORS*********************************************************************************************/
export let setApplicationsAC = (data) => ({ type: SET_APPLICATION, data })
export let addCommentPropertyAC = (data) => ({ type: ADD_COMMENT, data })

/*****************************************************************************THUNKS-CREATOR***********************************************************************************************/

//Получение заявки по id
export const getApplicationID = (pattern) => async (dispatch) => {
    //Возврашаем Thunk
    const idApplication = await applicationsAPI.setNewApplication(pattern)
    //Делаем запрос на сервер за массивом с заявками
    const Application = await applicationsAPI.getApplication(idApplication)
    /* И диспачем его в state через метод getApplicationsAC */
    dispatch(setApplicationsAC(Application));
    const ApplicationsList = await applicationsAPI.getApplications();
    dispatch(getApplicationsAC(ApplicationsList.value));
}