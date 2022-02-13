import style from "./EditApplication.module.css";
import close from "./close.png";

export const EditApplication = () => {
  return (
    <div className={style.body_form}>
      <div className={style.header}>
        <div className={style.id}>№67304</div>
        <div className={style.name}>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
            veniam, omnis voluptatibus doloremque eos velit adipisci!
          </p>
        </div>
        <div className={style.close}>
          <img src={close} alt="close" />
        </div>
      </div>
      <div className={style.content}>
        <p className={style.discription}>Описание</p>
        <p className={style.discription_text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          deleniti dolorem soluta, nam quae ullam quod non fugiat quo veritatis
          ad in culpa recusandae tempore hic beatae! Esse, voluptas quidem.
        </p>
        <p className={style.add_comment}>Добавление комментариев</p>
        <p></p>
        <div className={style.button}>
          <p>Сохранить</p>
        </div>
      </div>
      <div className={style.comments}>
        <div className={style.user}>
          <div className={style.avatar}></div>
          <div className={style.info}>
            <p className={style.user_name}>Иванов Александр</p>
            <p className={style.when}>12 августаб 10:00 прокоментировал</p>
            <div className={style.comment}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium rem ratione, doloribus asperiores sit incidunt
              sapiente iste. Odio eius ea quibusdam eligendi necessitatibus
              labore nihil fugiat quo ullam repellendus minus voluptates saepe
              explicabo laudantium modi a ut consequuntur, quidem perspiciatis
              nesciunt ex, nobis obcaecati? Quasi, sequi! Harum voluptatem nobis
              fugit.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
