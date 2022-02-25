import { applicationsAPI } from "../api/api";
import { getApplicationsAC } from "./applicationsReducer";

const SET_APPLICATION = 'SET_APPLICATION';
const ADD_COMMENT = 'ADD_COMMENT';

//Инициализационный state
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
            return action.data;
        case 'ADD_COMMENT':
            const newComment = { ...state };
            if (newComment.comment === undefined) {
                newComment.comment = [action.data];
            }
            else newComment.comment.push(action.data)
            return newComment;
        default: return state;
    }
};

/*****************************************************************************ACTION CREATORS*********************************************************************************************/
export let setApplicationsAC = (data) => ({ type: SET_APPLICATION, data })
export let setCommentAC = (data) => ({ type: ADD_COMMENT, data })

/*****************************************************************************THUNKS-CREATOR***********************************************************************************************/

export const getApplicationID = (pattern) => async (dispatch) => {
    //Получаем id заявки с api
    const idApplication = await applicationsAPI.setNewApplication(pattern)
    //Делаем запрос на сервер за формой заявки по id
    const Application = await applicationsAPI.getApplication(idApplication)
    /* И диспачем его в state через метод getApplicationsAC */
    dispatch(setApplicationsAC(Application));
    //Делаем запрос на сервер за новым списком заявок
    const ApplicationsList = await applicationsAPI.getApplications();
    dispatch(getApplicationsAC(ApplicationsList.value));
}