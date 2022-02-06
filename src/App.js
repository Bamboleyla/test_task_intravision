import './App.css';
import { Applications } from './components/Applications/Applications';
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

export const App = () => {
  return (
    <div className="App">
      {/* Верхний блок с поиском */}
      <Header />
      {/* Левая боковая понель с кнопками навигации */}
      <Navigation />
      < div className='app-content' >
        <Routes>
          < Route path='/knowledgebase' element={< KnowledgeBase />} /> {/* База знаний*/}
          < Route path='/applications' element={< Applications />} /> {/* Страница Сообщений */}
          < Route path='/assets' element={< Assets />} /> {/* Страница Сообщений */}
          < Route path='/clients' element={< Clients />} /> {/* Страница Сообщений */}
          < Route path='/employees' element={< Employees />} /> {/* Страница Сообщений */}
          < Route path='/settings' element={< Settings />} /> {/* Страница Сообщений */}
        </Routes>
      </div>
    </div>
  );
};
