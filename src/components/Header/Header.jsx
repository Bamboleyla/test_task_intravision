import style from "./Header.module.css";

export const Header = () => {
  return (
    <div className={style.field}>
      <label className={style.field__label}></label>
      <input className={style.field__input} type="text" name="serch"></input>
    </div>
  );
};
