import React, { useState, createContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Page from './Page'
export const ThemeContext = createContext();

function Paginate() {
    const [theme, setTheme] = useState(true);
    const [text, setText] = useState(true);
    const notify = () => {
    if(theme){
        toast("dark mode activated!!!")
    }
    else{
        toast("light mode activated!!!")
    }
    }
  return (
    <div>
        <ThemeContext.Provider value={{theme,setTheme,text, setText}}>
            <div className='d-flex'>
                <div className='container'><Page></Page></div>
                <div>
                    <label className="switch m-2">
                    <input onClick={() => {setTheme(!theme); setText(!text); notify()}} type="checkbox" />
                    <span className="slider round"></span>
                    </label>
                    <ToastContainer />
                </div>
            </div>
        </ThemeContext.Provider>
    </div>
  )
}

export default Paginate