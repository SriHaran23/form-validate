import React, { createContext, useState } from 'react'
import Formval from './Form';
import Formval1 from './Form1';
import { Route, Routes } from 'react-router-dom';

function Form() {
    return (
    <div>
            <h1 className='justify-self-center'>Form</h1>
            <Routes>
                <Route path="/form/" element={<Formval1></Formval1>} />
                <Route path="/edit" element={<Formval></Formval>} />
            </Routes>
    </div>
  )
}

export default Form