import style from "./String.module.css";

export const String = (props) => {
  //Поле с приоритетом заявки
  let priority = () => {
    return (
      <div
        className={style.prLabel}
        style={{
          backgroundColor: props.prioritiesRgb,
        }}
      />
    );
  };
  //Поле статуса заявки
  let status = () => {
    return (
      <div
        className={style.stLabel}
        style={{
          backgroundColor: props.statusRgb,
        }}>
        <span>{props.statusName}</span>
      </div>
    );
  };
  return (
    <div>
      <div className={style.priority}>{priority()}</div>
      <div className={style.id}>{props.id}</div>
      <div className={style.name}>{props.name}</div>
      <div className={style.status}>{status()}</div>
      <div className={style.executor}>{props.executorName}</div>
    </div>
  );
};
