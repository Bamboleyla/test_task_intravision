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
import { CreateNewApplication } from './components/CreateNewApplication/CreateNewApplication';

export const App = () => {
  return (
    <div className="App">
      {/* Верхний блок с поиском */}
      <Header />
      {/* Левая боковая понель с кнопками навигации */}
      <Navigation />
      < div className='app-content' >
        <Routes>
          < Route path='knowledgebase' element={< KnowledgeBase />} /> {/* База знаний*/}
          < Route path='applications' element={< ApplicationsContainer />} /> {/* Заявки */}
          < Route path='assets' element={< Assets />} /> {/* Активы */}
          < Route path='clients' element={< Clients />} /> {/* Клиенты */}
          < Route path='employees' element={< Employees />} /> {/* Сотрудники */}
          < Route path='settings' element={< Settings />} /> {/* Настройки */}
          < Route path='applications/:create' element={< CreateNewApplication />} /> {/* Настройки */}
        </Routes>
      </div>
    </div>
  );
};
