import { String } from "../string/String";
import style from "./Applications.module.css";

export const Applications = (props) => {
  debugger;
  return (
    <div className={style.content}>
      {/* Кнопка Создать заявку */}
      <div className={style.createApplocation}>
        <p>Создать заявку</p>
      </div>
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
            statusRgb={a.priority}
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
