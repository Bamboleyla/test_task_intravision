import { connect } from "react-redux";
import { addComment } from "../../redux/applicationsReducer";
import { addCommentPropertyAC } from "../../redux/editApplicationReducer";
import { EditApplication } from "./EditApplication";

//Создаем функцию которая будет принимать через connect нужную часть state
let mapStateToProps = (state) => {
  return {
    editApplication: state.applicationEdit,
    statusList: state.applicationsStatuses,
  };
};
let mapDispathToProps = (dispatch) => {
  return {
    addComment,
    setComment: (text) => dispatch(addCommentPropertyAC(text)),
  };
};

export const EditApplicationContainer = connect(
  mapStateToProps,
  mapDispathToProps
)(EditApplication);
