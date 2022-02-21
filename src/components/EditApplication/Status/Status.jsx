import "./Status.css";
import React from "react";

//Создаем ссылки для получения данных введенные пользователем
let selectValue = React.createRef(); //Для названия заявки

export const Status = (props) => {
  debugger;
  return (
    <select ref={selectValue}>
      <option key="100">{props.status}</option>
      {props.statusList.statuses.map((a) => (
        /* Значения статусов */
        <option key={a.id}>{a.name}</option>
      ))}
    </select>
  );
};
