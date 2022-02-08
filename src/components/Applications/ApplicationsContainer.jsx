import { Applications } from "./Applications";
import { connect } from "react-redux";
import { getApplications } from "../../redux/applicationsReducer";

/*************************Контейнерная компонента*****************************/
//Создаем функцию которая будет принимать через connect нужную часть state
let mapStateToProps = (state) => {
  debugger;
  return {
    applicationsList: state.applicationsPage.applications,
  };
};

export const ApplicationsContainer = connect(mapStateToProps, {
  getApplications,
})(Applications);
