import { connect } from "react-redux";
import { EditApplication } from "./EditApplication";

//Создаем функцию которая будет принимать через connect нужную часть state
let mapStateToProps = (state) => {
  debugger;
  return {
    editApplication: state.applicationEdit,
  };
};

export const EditApplicationContainer = connect(
  mapStateToProps,
  {}
)(EditApplication);
