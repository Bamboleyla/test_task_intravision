import style from "./Applications.module.css";
import { Link, Outlet } from "react-router-dom";
import { StringWithNavigate } from "../string/String";

export const Applications = (props) => {
  debugger;
  //Поиск приоритета заявки по id
  let findPrioriti = (id) => props.priorities.find((el) => el.id === id);
  return (
    <div className={style.content}>
      <div className={style.list}>
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
            <div key={a.id}>
              <StringWithNavigate
                getApplication={props.getApplication}
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
            </div>
          ))}
        </div>
      </div>
      <Outlet />
    </div>
  );
};
