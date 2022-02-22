import "./Executor.css";
import React from "react";

//Создаем ссылки для получения данных введенные пользователем
let selectValue = React.createRef(); //Для названия заявки

export const Executor = (props) => {
  debugger;
  return (
    <select ref={selectValue}>
      <option key="10">{props.executorRigtNow}</option>
      {props.list.users.map((a) =>
        /* Значения статусов */
        a.name !== props.executorRigtNow ? (
          <option key={a.id}>{a.name}</option>
        ) : undefined
      )}
    </select>
  );
};
