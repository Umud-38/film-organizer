import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import ListPage from './pages/ListPage/ListPage';

import './reset.css';
import './common.css';

const App = () => {
   return (
      <div className="app">
         <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/list/:user" element={<ListPage />} />
         </Routes>
      </div>
   );
}

export default App;
