import style from "./EditApplication.module.css";
import close from "./close.png";
import сalendar from "./сalendar.png";
import { NavLink } from "react-router-dom";

export const EditApplication = (props) => {
  debugger;
  return (
    <div className={style.body_form}>
      <div className={style.header}>
        <div className={style.id}>{props.editApplication.id}</div>
        <div className={style.name}>
          <p>{props.editApplication.name}</p>
        </div>
        <div className={style.close}>
          <NavLink to="/applications">
            <img src={close} alt="close" />
          </NavLink>
        </div>
      </div>
      <div className={style.content}>
        <p className={style.discription}>Описание</p>
        <p className={style.discription_text}>
          {props.editApplication.description}
        </p>
        <p className={style.add_comment}>Добавление комментариев</p>
        <p></p>
        <div className={style.button}>
          <p>Сохранить</p>
        </div>
      </div>
      {/* <div className={style.comments}>
        <div className={style.user}>
          <div className={style.avatar}></div>
          <div className={style.info}>
            <p className={style.user_name}>Иванов Александр</p>
            <p className={style.when}>12 августаб 10:00 прокоментировал</p>
            <div className={style.wrapper}>
              <div className={style.comment}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium rem ratione, doloribus asperiores sit incidunt
                sapiente iste. Odio eius ea quibusdam eligendi necessitatibus
                labore nihil fugiat quo ullam repellendus minus voluptates saepe
                explicabo laudantium modi a ut consequuntur, quidem perspiciatis
                nesciunt ex, nobis obcaecati? Quasi, sequi! Harum voluptatem
                nobis fugit.
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className={style.right}>
        <div className={style.status}>
          <div className={style.circle}></div>
          <span className={style.status_name}>
            {props.editApplication.statusName}
          </span>
        </div>
        <div className={style.applicant}>
          <p className={style.applicant_label}>Заявитель</p>
          <p className={style.applicant_name}>Александр Вознесенский</p>
        </div>
        <div className={style.create}>
          <p className={style.create_label}>Создана</p>
          <p className={style.author}>{props.editApplication.initiatorName}</p>
        </div>
        <div className={style.executor}>
          <p className={style.executor_label}>Исполнитель</p>
          <p className={style.executor_name}>
            {props.editApplication.executorName}
          </p>
        </div>
        <div className={style.priority}>
          <p className={style.priority_label}>Приоритет</p>
          <p className={style.priority_name}>
            {props.editApplication.priorityName}
          </p>
        </div>
        <div className={style.term}>
          <p className={style.term_label}>Срок</p>
          <div className={style.term_calendar}>
            <img src={сalendar} alt="сalendar" />
          </div>
          <div className={style.term_date}>
            {props.editApplication.resolutionDatePlan.slice(0, 10)}
          </div>
        </div>
        <div className={style.tags}>
          <div className={style.tags_one}>
            {props.editApplication.tags[0].name}
          </div>
        </div>
      </div>
    </div>
  );
};
