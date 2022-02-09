import { Applications } from "./Applications";
import { connect } from "react-redux";
import { getApplications } from "../../redux/applicationsReducer";

/*************************Контейнерная компонента*****************************/
//Создаем функцию которая будет принимать через connect нужную часть state
let mapStateToProps = (state) => {
  return {
    applicationsList: state.applicationsPage.applications,
    priorities: state.applicationsPriorities.priorities,
  };
};

export const ApplicationsContainer = connect(mapStateToProps, {
  getApplications,
})(Applications);
