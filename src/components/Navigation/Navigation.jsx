import style from "./Navigation.module.css";
import logo from "./logo.png";
import knowledge_base from "./knowledge_base.png";
import applications from "./applications.png";
import employees from "./employees.png";
import clients from "./clients.png";
import assets from "./assets.png";
import settings from "./settings.png";
import { NavLink } from "react-router-dom";

//Навигация
export const Navigation = () => {
  return (
    <div className={style.menu}>
      <img src={logo} alt="logo" className={style.logo} />
      <div className={style.knowledge_base}>
        <NavLink to="/knowledgebase" activeClassName={style.turnOn}>
          <img src={knowledge_base} alt="knowledge_base" />
          <p>База знаний</p>
        </NavLink>
      </div>
      <div className={style.applications}>
        <img src={applications} alt="applications" />
        <p>Заявки</p>
      </div>
      <div className={style.employees}>
        <img src={employees} alt="employees" />
        <p>Сотрудники</p>
      </div>
      <div className={style.clients}>
        <img src={clients} alt="clients" />
        <p>Клиенты</p>
      </div>
      <div className={style.assets}>
        <img src={assets} alt="assets" />
        <p>Активы</p>
      </div>
      <div className={style.settings}>
        <img src={settings} alt="settings" />
        <p>Настройки</p>
      </div>
    </div>
  );
};
