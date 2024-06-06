import React from 'react';
import WorldClock from '../Components/WorldClock';
import { Route, Routes } from 'react-router-dom';
import { Login } from '@mui/icons-material';
import HomePage from '../Components/HomePage';
import AboutPage from '../Components/About';
import ContactPage from '../Components/Contact';
import SignIn from '../Components/Login';
import BackgroundImage from '../Components/BackgroundImage';

function AppRoutes() {
  return (
    <div>
    <Routes>
    <Route path='/' element={<HomePage/>} /> 
    {/* <Route path='/worldclock' element={<WorldClock/>} />  */}
    <Route path='/worldclock' element={<BackgroundImage background={'../Images/clockPage.png'}/>} />
    <Route path='/login' element={<SignIn/>} /> 
    <Route path='/about' element={<AboutPage/>} /> 
    <Route path='/contact' element={<ContactPage/>} />
    </Routes>
    </div>
  )
}

export default AppRoutes;