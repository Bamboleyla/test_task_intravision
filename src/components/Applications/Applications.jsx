import { String } from "../string/String";
import style from "./Applications.module.css";
import { Link, NavLink } from "react-router-dom";

export const Applications = (props) => {
  //Поиск приоритета заявки по id
  let findPrioriti = (id) => props.priorities.find((el) => el.id === id);
  return (
    <div className={style.content}>
      {/* Кнопка Создать заявку */}
      <Link to="create">
        <div className={style.createApplocation}>
          <p>Создать заявку</p>
        </div>
      </Link>
      {/* Таблица */}
      <div className={style.caption}>
        {/* Заголовок таблицы */}
        <div className={style.thead}>
          <div className={style.priority}></div>
          <div className={style.id}>
            <p>ID</p>
          </div>
          <div className={style.name}>
            <p>Название</p>
          </div>
          <div className={style.status}>
            <p>Статус</p>
          </div>
          <div className={style.executor}>
            <p>Исполнитель</p>
          </div>
        </div>
        {/* Тело таблицы */}
        <div className={style.body}></div>
        {props.applicationsList.map((a) => (
          /* Строки таблицы */
          <String
            key={a.id}
            prioritiesRgb={
              findPrioriti(a.priorityId) === undefined
                ? undefined
                : findPrioriti(a.priorityId).rgb
            }
            statusRgb={a.statusRgb}
            id={a.id}
            name={a.name}
            statusName={a.statusName}
            executorName={a.executorName}
          />
        ))}
      </div>
    </div>
  );
};
