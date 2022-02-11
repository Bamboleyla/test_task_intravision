import style from "./CreateNewApplication.module.css";

export const CreateNewApplication = () => {
  return (
    <div className={style.bodyForm}>
      <div className={style.head}>
        <p>Новая заявка</p>
      </div>
      <div className={style.content}>
        <div className={style.name}>
          <p>Название</p>
          <textarea name="name" id="nameApplication"></textarea>
        </div>
        <div className={style.discription}>
          <p>Описание</p>
          <textarea name="discription" id="discriptionApplication"></textarea>
        </div>
        <div className={style.button}>
          <span>Сохранить</span>
        </div>
      </div>
    </div>
  );
};
