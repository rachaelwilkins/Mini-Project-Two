import React from 'react';
import WorldClock from '../Components/WorldClock';
import { Route, Routes } from 'react-router-dom';

function AppRoutes() {
  return (
    <div>
    <Routes>
    <Route path='/worldclock' element={<WorldClock/>} />    
    </Routes>
    </div>
  )
}

export default AppRoutes;