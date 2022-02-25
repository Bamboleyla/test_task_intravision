import { connect } from "react-redux";
import {
  addCommentAC,
  setExecutorAC,
  setStatusAC,
} from "../../redux/applicationsReducer";
import { setCommentAC } from "../../redux/editApplicationReducer";
import { EditApplication } from "./EditApplication";

//Создаем функцию которая будет принимать через connect нужную часть state
let mapStateToProps = (state) => {
  return {
    editApplication: state.applicationEdit,
    statusList: state.applicationsStatuses,
    usersList: state.usersList,
  };
};
//Создаем функцию которая будет принимать через connect нужную часть thunk
let mapDispathToProps = (dispatch) => {
  return {
    addComment: (id, text) => dispatch(addCommentAC(id, text)), //Добавление комментария в список с заявками
    changeStatus: (id, status) => dispatch(setStatusAC(id, status)), //Изменение статуса
    changeExecutor: (id, executor) => dispatch(setExecutorAC(id, executor)), //Изменение исполнителя
    setComment: (text) => dispatch(setCommentAC(text)), //установка комментария в reducer который отвечает за хранение редактируемой заявки
  };
};
//Оборачиваем connect компоненту EditApplication
export const EditApplicationContainer = connect(
  mapStateToProps,
  mapDispathToProps
)(EditApplication);
