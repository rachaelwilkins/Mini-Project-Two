import React from 'react';
import WorldClock from '../Components/WorldClock';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../Components/HomePage';
import AboutPage from '../Components/About';
import ContactPage from '../Components/Contact';
import SignIn from '../Components/Login';

function AppRoutes() {
  return (
    <div>
    <Routes>
    <Route path='/' element={<HomePage/>} /> 
    <Route path='/worldclock' element={<WorldClock/>} />
    <Route path='/login' element={<SignIn/>} /> 
    <Route path='/about' element={<AboutPage/>} /> 
    <Route path='/contact' element={<ContactPage/>} />
    </Routes>
    </div>
  )
}

export default AppRoutes;