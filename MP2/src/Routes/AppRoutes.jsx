import React from 'react';
import WorldClock from '../Components/WorldClock';
import { Route, Routes } from 'react-router-dom';
import { Login } from '@mui/icons-material';
import HomePage from '../Components/HomePage';

function AppRoutes() {
  return (
    <div>
    <Routes>
    <Route path='/' element={<HomePage/>} /> 
    <Route path='/worldclock' element={<WorldClock/>} /> 
    <Route path='/login' element={<Login/>} /> 
    </Routes>
    </div>
  )
}

export default AppRoutes;