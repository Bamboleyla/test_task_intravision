import style from "./Header.module.css";

//Компонента шапка
export const Header = () => {
  return (
    /* Кастомный input */
    <div className={style.field}>
      <label className={style.field__label}></label>
      <input className={style.field__input} type="text" name="serch"></input>
    </div>
  );
};
