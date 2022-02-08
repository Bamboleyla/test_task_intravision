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
}