import style from "./Comments.module.css";
export const Comments = (props) => {
  return (
    <div className={style.user}>
      <div className={style.avatar}></div>
      <div className={style.info}>
        <p className={style.user_name}>Иванов Александр</p>
        <p className={style.when}>12 августаб 10:00 прокоментировал</p>
        <div className={style.wrapper}>
          <div className={style.comment}>{props.text}</div>
        </div>
      </div>
    </div>
  );
};
