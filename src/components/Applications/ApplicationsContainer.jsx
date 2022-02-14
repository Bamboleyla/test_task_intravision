import { Applications } from "./Applications";
import { connect } from "react-redux";
import { getApplications } from "../../redux/applicationsReducer";
import React from "react";

/*************************Контейнерная компонента*****************************/
class BlockApplicationsAPI extends React.Component {
  /* Вызываем метод жизненного цикла компонента */
  componentDidMount() {
    //Получаем массив с заявками
    this.props.getApplications();
  }
  render() {
    debugger;
    return (
      <Applications
        applicationsList={this.props.applicationsList}
        priorities={this.props.priorities}
      />
    );
  }
}
//Создаем функцию которая будет принимать через connect нужную часть state
let mapStateToProps = (state) => {
  return {
    applicationsList: state.applicationsPage.applications,
    priorities: state.applicationsPriorities.priorities,
  };
};

export const ApplicationsContainer = connect(mapStateToProps, {
  getApplications,
})(BlockApplicationsAPI);
