import React, { useState, createContext } from 'react';
import './App.css';
import Dashboard from './Components/Dashboard';
// import Formval from './Components/Form';
// import Formval1 from './Components/Form1';
// import { Route, Routes } from 'react-router-dom';

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState(true);
  return (
    <div>
      {/* <ThemeContext.Provider value={{theme,setTheme}}>
      <button onClick={() => {setTheme(!theme)}} className='btn btn-secondary'>Use dark mode</button>
        <h1 className='justify-self-center'>Form</h1>
        <Routes>
          <Route path="/edit" element={<Formval></Formval>} />
          <Route path="/" element={<Formval1></Formval1>} />
        </Routes>
      </ThemeContext.Provider> */}
      <Dashboard></Dashboard>
      
    </div>
  );
}

export default App;
