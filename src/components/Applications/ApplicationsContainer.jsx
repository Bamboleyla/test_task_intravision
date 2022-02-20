import { Applications } from "./Applications";
import { connect } from "react-redux";
import React from "react";
import { setApplicationsAC } from "../../redux/editApplicationReducer";

/*************************Контейнерная компонента*****************************/
class BlockApplicationsAPI extends React.Component {
  getApplicationWithID = (id) => {
    let application = this.props.applicationsList.find((el) => el.id === id);
    debugger;
    this.props.setEditApplication(application);
  };
  render() {
    return (
      <Applications
        applicationsList={this.props.applicationsList}
        priorities={this.props.priorities}
        getApplication={this.getApplicationWithID}
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
let mapDispathToProps = (dispatch) => {
  return {
    setEditApplication: (app) => {
      dispatch(setApplicationsAC(app));
    },
  };
};

export const ApplicationsContainer = connect(
  mapStateToProps,
  mapDispathToProps
)(BlockApplicationsAPI);
