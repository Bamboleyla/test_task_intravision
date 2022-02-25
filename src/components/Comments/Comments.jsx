import style from "./Comments.module.css";
/* Компонента которая выводит шаблон с коментарием */
export const Comments = (props) => {
  return (
    <div className={style.user}>
      <div className={style.avatar}></div>
      <div className={style.info}>
        {/* Один для всех пользователь который создает комментарии */}
        <p className={style.user_name}>Иванов Александр</p>
        {/* Одно время в котором будет фиксироватся время создания комментария */}
        <p className={style.when}>12 августаб 10:00 прокоментировал</p>
        <div className={style.wrapper}>
          <div className={style.comment}>{props.text}</div>
        </div>
      </div>
    </div>
  );
};
