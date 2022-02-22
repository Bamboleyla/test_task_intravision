import * as axios from "axios";

/*************************Здесь делаем все запросы к API*****************************/
const instance = axios.create({
    baseURL: 'http://intravision-task.test01.intravision.ru'
})
//Мой tenantguid
const TENANTGUID = 'f4ab007d-4315-4f51-8fee-5dbd07dcd788';

//Запросы связанные с заявками
export const applicationsAPI = {
    //Получение списка заявок
    getApplications() {
        return instance.get(`/odata/tasks?tenantguid=${TENANTGUID}`).then(response => response.data)
    },
    //Получение приоритетов по заявкам
    getApplicationsPriorities() {
        return instance.get(`/api/${TENANTGUID}/Priorities`).then(response => response.data)
    },
    //Отправка новой заявки
    setNewApplication(patern) {
        return instance.post(`/api/${TENANTGUID}/Tasks`, patern).then(response => response.data)
    },
    //Получение заявки по id
    getApplication(id) {
        return instance.get(`/api/${TENANTGUID}/Tasks/${id}`).then(response => response.data)
    },
    //Получение списка статусов
    getApplicationsStatuses() {
        return instance.get(`/api/${TENANTGUID}/Tags`).then(response => response.data)
    },
    //Получение списка пользователей
    getUsers() {
        return instance.get(`/api/${TENANTGUID}/Users`).then(response => response.data)
    },
}