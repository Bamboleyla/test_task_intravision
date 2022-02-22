import { App } from "./App"
import { connect } from "react-redux";
import { getApplications } from './redux/applicationsReducer'
import { getStatuses } from './redux/applicationsStatusesReducer'
import { getUsers } from './redux/usersReducer'


export const AppContainer = connect(
  null, { getApplications, getStatuses, getUsers }
)(App);


