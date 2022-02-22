import './App.css';
import { ApplicationsContainer } from './components/Applications/ApplicationsContainer';
import { Employees } from './components/Employees/Employees';
import { Header } from './components/Header/Header'
import { KnowledgeBase } from './components/KnowledgeBase/KnowledgeBase';
import { Navigation } from './components/Navigation/Navigation';
import { Clients } from './components/Clients/Clients';
import { Assets } from './components/Assets/Assets';
import { Settings } from './components/Settings/Settings';
import {
  Routes,
  Route
} from "react-router-dom"
import { EditApplicationContainer } from './components/EditApplication/EditApplicationContainer';
import { CreateApplicationContainer } from './components/CreateApplication/CreateApplicationContainer';
import React from "react";

export class App extends React.Component {
  /* Вызываем метод жизненного цикла компонента */
  componentDidMount() {
    //Получаем массив с заявками и приоритетами
    this.props.getApplications();
    //Получаем массив с статусами заявок
    this.props.getStatuses();
    //Получаем список пользователей
    this.props.getUsers();
  }

  render() {
    return (
      <div className='display'>
        <div className="App">
          {/* Верхний блок с поиском */}
          <Header />
          {/* Левая боковая понель с кнопками навигации */}
          <Navigation />
          < div className='content' >
            {/* Роуты */}
            <Routes>
              < Route path='knowledgebase' element={< KnowledgeBase />} /> {/* База знаний*/}
              < Route path='applications' element={< ApplicationsContainer />} > {/* Заявки */}
                < Route path='create' element={< CreateApplicationContainer />} /> {/* Создать заявку */}
                < Route path='edit' element={< EditApplicationContainer />} /> {/* Редактировать заявку */}
                < Route path='create/edit' element={< EditApplicationContainer />} /> {/* Редактировать заявку */}
              </Route>
              < Route path='assets' element={< Assets />} /> {/* Активы */}
              < Route path='clients' element={< Clients />} /> {/* Клиенты */}
              < Route path='employees' element={< Employees />} /> {/* Сотрудники */}
              < Route path='settings' element={< Settings />} /> {/* Настройки */}
            </Routes>
          </div>
        </div >
      </div>
    );
  }
};
