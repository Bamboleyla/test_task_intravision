import "./Navigation.css";
import logo from "./logo.png";
import knowledge_base from "./knowledge_base.png";
import applications from "./applications.png";
import employees from "./employees.png";
import clients from "./clients.png";
import assets from "./assets.png";
import settings from "./settings.png";
import { NavLink } from "react-router-dom";

//Компонента отвечающая за Навигацию по сайту
export const Navigation = () => {
  return (
    <div className="menu">
      <img src={logo} alt="logo" className="logo" />
      <NavLink to="/knowledgebase">
        {" "}
        {/* Отправка пользователя на страницу База знаний */}
        <div className="knowledge_base">
          <img src={knowledge_base} alt="knowledge_base" />
          <p>База знаний</p>
        </div>
      </NavLink>
      <NavLink to="/applications">
        {" "}
        {/* Отправка пользователя на страницу Заявки*/}
        <div className="applications">
          <img src={applications} alt="applications" />
          <p>Заявки</p>
        </div>
      </NavLink>
      <NavLink to="/employees">
        {" "}
        {/* Отправка пользователя на страницу Сотрудники */}
        <div className="employees">
          <img src={employees} alt="employees" />
          <p>Сотрудники</p>
        </div>
      </NavLink>
      <NavLink to="/clients">
        {" "}
        {/* Отправка пользователя на страницу Клиенты */}
        <div className="clients">
          <img src={clients} alt="clients" />
          <p>Клиенты</p>
        </div>
      </NavLink>
      <NavLink to="/assets">
        {" "}
        {/* Отправка пользователя на страницу Активы */}
        <div className="assets">
          <img src={assets} alt="assets" />
          <p>Активы</p>
        </div>
      </NavLink>
      <NavLink to="/settings">
        {" "}
        {/* Отправка пользователя на страницу Настройки */}
        <div className="settings">
          <img src={settings} alt="settings" />
          <p>Настройки</p>
        </div>
      </NavLink>
    </div>
  );
};
