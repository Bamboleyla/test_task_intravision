import "./Executor.css";
import React from "react";

//Создаем ссылки для получения данных введенные пользователем
let selectValue = React.createRef(); //Для названия заявки

//Компонента отображающая возможность выбора исполнителя заявки из списка пользователей
export const Executor = (props) => {
  //Обработчик кототый отправит на верх информацию о выбранном исполнителе
  let changeExecutor = () => {
    props.setExecutor(selectValue.current.value);
  };
  return (
    <select ref={selectValue} onChange={changeExecutor}>
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
