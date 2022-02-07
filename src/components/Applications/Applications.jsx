import style from "./Applications.module.css";
export const Applications = () => {
  return (
    <div className={style.content}>
      <div className={style.createApplocation}>
        <p>Создать заявку</p>
      </div>
      <div className={style.caption}>
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
      </div>
    </div>
  );
};
