import React from "react";
import style from "./CreateNewApplication.module.css";

//Создаем ссылки для получения данных введенные пользователем
let nameValue = React.createRef(); //Для названия заявки
let discriptionValue = React.createRef(); //Для описания заявки

export const CreateNewApplication = (props) => {
  //Отправка данных в local state
  let sendName = () => props.name(nameValue.current.value); //текст названия
  let sendDiscription = () => props.discription(discriptionValue.current.value); //текст описания
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
        <div className={style.button} onClick={props.send}>
          <span>Сохранить</span>
        </div>
      </div>
    </div>
  );
};
