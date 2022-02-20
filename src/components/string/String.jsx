import { useNavigate } from "react-router";
import style from "./String.module.css";

const String = (props) => {
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
  /* Обработчик события onClick, меняем url */
  let changeUrl = () => {
    props.getApplication(props.id);
    props.navigate("../applications/edit", { replace: true });
  };
  return (
    <div className={style.string} onClick={changeUrl}>
      <div className={style.priority}>{priority()}</div>
      <div className={style.id}>{props.id}</div>
      <div className={style.name}>
        <p>{props.name}</p>
      </div>
      <div className={style.status}>{status()}</div>
      <div className={style.executor}>{props.executorName}</div>
    </div>
  );
};

export const StringWithNavigate = (props) => {
  let navigate = useNavigate();
  return (
    <String
      navigate={navigate}
      key={props.key}
      prioritiesRgb={props.prioritiesRgb}
      statusRgb={props.statusRgb}
      id={props.id}
      name={props.name}
      statusName={props.statusName}
      executorName={props.executorName}
      getApplication={props.getApplication}
    />
  );
};
