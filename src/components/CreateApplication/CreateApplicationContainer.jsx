import { connect } from "react-redux";
import React from "react";
import { getApplicationID } from "../../redux/editApplicationReducer";
import { Outlet, useNavigate } from "react-router";
import { CreateNewApplication } from "../CreateNewApplication/CreateNewApplication";

// Шаблон для отправки новой заявки через api
let applicationTemplate = {
  name: "string",
  description: "string",
  comment: "string",
  price: 0,
  taskTypeId: 0,
  statusId: 0,
  priorityId: 0,
  serviceId: 0,
  resolutionDatePlan: "2022-02-12T16:08:20.268Z",
  tags: [104383],
  initiatorId: 0,
  executorId: 0,
  executorGroupId: 0,
};
const AddNavigate = (props) => {
  let navigate = useNavigate();
  let changeUrl = () => {
    navigate("../edit", { replace: true });
  };
  return (
    <CreateNewApplication
      name={props.name}
      discription={props.description}
      send={props.send}
      navigate={changeUrl}
    />
  );
};

/*************************Контейнерная компонента*****************************/
class BlockNewApplicationsAPI extends React.Component {
  constructor(props) {
    super(props);
    /* Создаем локальный state в котором будем хранить вводимое значение пользователя */
    this.state = {
      name: "",
      discription: "",
    };
  }
  //Вносит изменения в название заявки
  changeName = (text) => {
    this.setState({
      name: text,
    });
  };
  //Вносит изменения в описание заявки
  changeDiscription = (text) => {
    this.setState({
      discription: text,
    });
  };
  send = () => {
    applicationTemplate.name = this.state.name;
    applicationTemplate.description = this.state.discription;
    debugger;
    this.props.getApplicationID(applicationTemplate);
  };

  render() {
    return (
      <div>
        <Outlet />
        <AddNavigate
          name={this.changeName}
          discription={this.changeDiscription}
          send={this.send}
        />
      </div>
    );
  }
}
//Создаем функцию которая будет принимать через connect нужную часть state
let mapStateToProps = (state) => {
  return {
    editApplication: state.applicationEdit.edit,
  };
};
export const CreateApplicationContainer = connect(mapStateToProps, {
  getApplicationID,
})(BlockNewApplicationsAPI);
