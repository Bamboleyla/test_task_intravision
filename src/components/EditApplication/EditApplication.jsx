import style from "./EditApplication.module.css";
import close from "./close.png";
import сalendar from "./сalendar.png";
import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import { Comments } from "../Comments/Comments";
import { Status } from "../Status/Status";
import { Executor } from "../Executor/Executor";

//Создаем ссылки для получения данных введенные пользователем
let commentValue = React.createRef(); //Для названия заявки
let discriptionValue = React.createRef(); //Для описания заявки

/*********** Компонента-форма для редактирования заявок ************/
export const EditApplication = (props) => {
  //Использование хука useState, для создания локального state
  let [comment, setComment] = useState(props.status); //Текст комментария введенный пользователем
  let [status, setStatus] = useState(props.editApplication.statusName); //Статус заявки выбранный пользователем
  let [executor, setExecutor] = useState(props.editApplication.executorName); //Исполнитель выбранный пользователем

  //Обработчики событий
  let addTextComment = () => setComment(commentValue.current.value); //Добавление комментария

  //Отправка измененых данных в карточке заявки в state
  let send = () => {
    //Отправляем комментарий, если он появился
    if (comment !== undefined) {
      props.addComment(props.editApplication.id, comment);
      props.setComment(comment);
      setComment("");
    }
    //Отправляем новый статус , если статус изменился
    if (status !== props.editApplication.statusName) {
      props.changeStatus(props.editApplication.id, status);
    }
    //Отправляем нового исполнителя , если исполнитель изменился
    if (executor !== props.editApplication.executorName) {
      props.changeExecutor(props.editApplication.id, executor);
    }
  };
  return (
    /* Границы формы */
    <div className={style.body_form}>
      {/* Заголовок формы */}
      <div className={style.header}>
        <div className={style.id}>{props.editApplication.id}</div>
        <div className={style.name}>
          <p>{props.editApplication.name}</p>
        </div>
        {/* Кнопка закрыть форму */}
        <div className={style.close}>
          <NavLink to="/applications">
            <img src={close} alt="close" />
          </NavLink>
        </div>
      </div>
      <div className={style.content}>
        {/* Поле с описанием */}
        <p className={style.discription}>Описание</p>
        <textarea
          className={style.discription_text}
          ref={discriptionValue}
          value={props.editApplication.description}
          readOnly></textarea>
        {/* Поле ввода комментариев */}
        <p className={style.add_comment}>Добавление комментариев</p>
        <textarea
          className={style.comment_text}
          ref={commentValue}
          onChange={addTextComment}
          value={comment}></textarea>
        {/* Кнопка Сохнанить */}
        <NavLink to="/applications">
          <div className={style.button} onClick={send}>
            <p>Сохранить</p>
          </div>
        </NavLink>
      </div>
      {/* Блок комментариев */}
      <div className={style.comments}>
        {props.editApplication.comment === undefined
          ? null
          : props.editApplication.comment.map((a) => (
              /* Комментарий */
              <Comments text={a} key={a.toString()} />
            ))}
      </div>
      {/* Информационная понель справа */}
      <div className={style.right}>
        {/* Статус */}
        <div className={style.status}>
          <div
            className={style.circle}
            style={{
              backgroundColor: props.editApplication.statusRgb,
            }}></div>
          <span className={style.status_name}>
            <Status
              status={props.editApplication.statusName}
              statusList={props.statusList}
              setStatus={setStatus}
            />
          </span>
        </div>
        {/* Заявитель */}
        <div className={style.applicant}>
          <p className={style.applicant_label}>Заявитель</p>
          <p className={style.applicant_name}>Александр Вознесенский</p>
        </div>
        {/* Создатель */}
        <div className={style.create}>
          <p className={style.create_label}>Создана</p>
          <p className={style.author}>{props.editApplication.initiatorName}</p>
        </div>
        {/* Испольнитель */}
        <div className={style.executor}>
          <p className={style.executor_label}>Исполнитель</p>
          <Executor
            list={props.usersList}
            executorRigtNow={props.editApplication.executorName}
            setExecutor={setExecutor}
          />
        </div>
        {/* Приоритет */}
        <div className={style.priority}>
          <p className={style.priority_label}>Приоритет</p>
          <p className={style.priority_name}>
            {props.editApplication.priorityName}
          </p>
        </div>
        {/* Срок */}
        <div className={style.term}>
          <p className={style.term_label}>Срок</p>
          <div className={style.term_calendar}>
            <img src={сalendar} alt="сalendar" />
          </div>
          <div className={style.term_date}>
            {props.editApplication.resolutionDatePlan.slice(0, 10)}
          </div>
        </div>
        {/* Теги */}
        <div className={style.tags}>
          <div className={style.tags_one}>
            {props.editApplication.tags[0].name}
          </div>
        </div>
      </div>
    </div>
  );
};
