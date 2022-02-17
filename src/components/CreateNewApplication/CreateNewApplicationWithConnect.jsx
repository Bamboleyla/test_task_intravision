import { connect } from "react-redux";
import React from "react";
import { CreateNewApplicationWithNavigate } from "./CreateNewApplicationContainer";
import { getApplicationID } from "../../redux/editApplicationReducer";

/*************************Контейнерная компонента*****************************/
class BlockNewApplicationsAPI extends React.Component {
  render() {
    return (
      <CreateNewApplicationWithNavigate
        getApplicationID={this.props.getApplicationID}
      />
    );
  }
}
//Создаем функцию которая будет принимать через connect нужную часть state
let mapStateToProps = (state) => {
  return {
    editApplication: state.applicationEdit.edit,
  };
};
export const CreateNewApplicationWithConnect = connect(mapStateToProps, {
  getApplicationID,
})(BlockNewApplicationsAPI);
