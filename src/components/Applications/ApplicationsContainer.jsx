import { Applications } from "./Applications";
import { connect } from "react-redux";
import React from "react";
import { setApplicationsAC } from "../../redux/editApplicationReducer";

/*************************Контейнерная компонента для Application.jsx*****************************/
class BlockApplicationsAPI extends React.Component {
  /* Создаем thunk который будет изменять в state.applicationEdit, который отвечает за информацию выводимую пользователю в карточку редактирования заявки */
  getApplicationWithID = (id) => {
    let application = this.props.applicationsList.find((el) => el.id === id);
    this.props.setEditApplication(application);
  };
  render() {
    return (
      /* Пробрасываем в Applications методы priorities, priorities */
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
//Создаем функцию которая будет принимать через connect нужную часть thunk
let mapDispathToProps = (dispatch) => {
  return {
    /* Метод устанавливающий выбранную заявку в state.applicationEdit, который отвечает за информацию выводимую пользователю в карточку редактирования заявки */
    setEditApplication: (app) => {
      dispatch(setApplicationsAC(app));
    },
  };
};
//Оборачиваем connect компоненту BlockApplicationsAPI
export const ApplicationsContainer = connect(
  mapStateToProps,
  mapDispathToProps
)(BlockApplicationsAPI);
