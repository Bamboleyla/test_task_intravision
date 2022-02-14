import { connect } from "react-redux";
import { EditApplication } from "./EditApplication";

//Создаем функцию которая будет принимать через connect нужную часть state
let mapStateToProps = (state) => {
  return {
    editApplication: state.applicationEdit.edit[0],
  };
};

export const EditApplicationContainer = connect(
  mapStateToProps,
  {}
)(EditApplication);
