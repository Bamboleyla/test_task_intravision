import style from "./String.module.css";

export const String = (props) => {
  debugger;
  return (
    <div>
      <div className={style.priority}>{props.priority}</div>
      <div className={style.id}>{props.id}</div>
      <div className={style.name}>{props.name}</div>
      <div className={style.status}>{props.statusName}</div>
      <div className={style.executor}>{props.executorName}</div>
    </div>
  );
};
