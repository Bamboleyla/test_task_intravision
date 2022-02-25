import { App } from "./App"
import { connect } from "react-redux";
import { getApplications } from './redux/applicationsReducer'
import { getStatuses } from './redux/applicationsStatusesReducer'
import { getUsers } from './redux/usersReducer'

/* Контейнерная компонента, с помошью еоторой пробрасываю методы для предзагрузки данных в компоненту App и оборачиваю их connect-ом */
export const AppContainer = connect(
  null, { getApplications, getStatuses, getUsers }
)(App);


