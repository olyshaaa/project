import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { MonthStatistics } from './pages/MarchStatistics/MonthStatistics';

import {Header} from '../src/shared/Header/Header'
import { PopUp } from './shared/PopUp/PopUp';

function App() {
  return (
    <div className='global-container'>
      {/* < PopUp/> */}
        <div className="container">
          <Header />
          <Routes>
              <Route path='/' Component={Home} />
              <Route path='month-statistics' Component={MonthStatistics} />
          </Routes>
    </div>
    </div>
  );
}

export default App;
