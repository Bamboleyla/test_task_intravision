import { applicationsAPI } from "../api/api";

const SET_APPLICATION = 'SET_APPLICATIONS';

let initialState = {
    /* Редактируемая заявка */
    edit: [
        {
            id: 194722,
            name: "hello!",
            description: "world!",
            createdAt: "2022-02-13T06:36:24.5105477",
            updatedAt: "2022-02-13T06:36:24.5105477",
            price: 0,
            taskTypeId: 70629,
            taskTypeName: "Запрос на изменение",
            statusId: 121256,
            statusName: "Закрыта",
            statusRgb: "#3cb371",
            priorityId: 104381,
            priorityName: "Очень низкий",
            serviceId: 70629,
            serviceName: "Еда > Заказ обедов",
            resolutionDatePlan: "2022-02-12T16:08:20.268",
            tags: [
                {
                    id: 104383,
                    name: "Сервер"
                }
            ],
            initiatorId: 70629,
            initiatorName: "Сидоров Иван",
            executorId: 70629,
            executorName: "Сидоров Иван",
            executorGroupId: 70629,
            executorGroupName: "Офис менеджеры",
            lifetimeItems: [
                {
                    id: 149021,
                    userName: "f4ab007d-4315-4f51-8fee-5dbd07dcd788",
                    lifetimeType: 20,
                    createdAt: "2022-02-13T06:36:24.5105477",
                    comment: "string",
                    fieldName: null,
                    oldFieldValue: null,
                    newFieldValue: null
                }
            ]
        }]
};

export const editApplicationReducer = (state = initialState, action) => {
    debugger;
    switch (action.type) {
        case 'SET_APPLICATION':
            return { ...state, edit: [...action.application] }
        default: return state;
    }
};

/*****************************************************************************ACTION CREATORS*********************************************************************************************/
let setApplicationsAC = (applications) => ({ type: SET_APPLICATION, applications })
/*****************************************************************************THUNKS-CREATOR***********************************************************************************************/
//Получение заявки по id
export const getApplicationID = (numID) => {
    debugger;
    //Возврашаем Thunk
    return (dispatch) => {
        //Делаем запрос на сервер за массивом с заявками
        applicationsAPI.getApplication(numID).then((data) => {
            debugger;
            /* И диспачем его в state через метод getApplicationsAC */
            dispatch(setApplicationsAC(data.value));
        });
    }
}