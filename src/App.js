import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import Food from './Components/Food/Dashboard';
import Paginate from './Components/pagination/Dasboard';
import Traslation from './Components/translation/Dashboard1';
import Errorhandling from './Components/ErrorHandling/Errorhandle';
import Dashboard from './Components/Dashboard';
import Formval from './Components/Form/Form';
import Formval1 from './Components/Form/Form1';

function App() {
  return (
    <div className='App scroll'>
      <Routes>
          <Route path="/" element={<Dashboard></Dashboard>} />
          <Route path="/food" element={<Food></Food>} />
          <Route path="/form" element={<Formval1></Formval1>} />
          <Route path="/edit" element={<Formval></Formval>} />
          <Route path="/pagination" element={<Paginate></Paginate>} />
          <Route path="/translation" element={<Traslation></Traslation>} />
          <Route path="/errorhandling" element={<Errorhandling></Errorhandling>} />
        </Routes>
    </div>
  );
}

export default App;
