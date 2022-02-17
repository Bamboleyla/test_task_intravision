import React from "react";
import style from "./CreateNewApplication.module.css";
import { useNavigate } from "react-router";

//Создаем ссылки для получения данных введенные пользователем
let nameValue = React.createRef(); //Для названия заявки
let discriptionValue = React.createRef(); //Для описания заявки

const Button = (props) => {
  return (
    <div
      className={style.button}
      onClick={props.send /* props.navigate("../edit", { replace: true }) */}>
      <span>Сохранить</span>
    </div>
  );
};

export const CreateNewApplication = (props) => {
  //Отправка данных в local state
  let sendName = () => props.name(nameValue.current.value); //текст названия
  let sendDiscription = () => props.discription(discriptionValue.current.value); //текст описания
  let navigate = useNavigate();
  return (
    <div className={style.bodyForm}>
      <div className={style.head}>
        <p>Новая заявка</p>
      </div>
      <div className={style.content}>
        <div className={style.name}>
          <p>Название</p>
          {/* Поле названия заявки */}
          <textarea
            name="name"
            id="nameApplication"
            ref={nameValue}
            onChange={sendName}></textarea>
        </div>
        <div className={style.discription}>
          <p>Описание</p>
          {/* Поле описания заявки */}
          <textarea
            name="discription"
            id="discriptionApplication"
            ref={discriptionValue}
            onChange={sendDiscription}></textarea>
        </div>
        {/* Кновка сохранить */}
        <Button navigate={navigate} send={props.send} />
      </div>
    </div>
  );
};
