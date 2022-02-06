import style from "./Header.module.css";
import search from "./search.png";

export const Header = () => {
  return (
    <div className={style.base}>
      <img src={search} alt="search" className={style.search} />
    </div>
  );
};
