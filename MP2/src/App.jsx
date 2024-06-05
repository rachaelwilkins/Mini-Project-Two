import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';
import './Components/Login'
// import theme from './Components/Theme'
// import ButtonAppBar from './Components/NavBar';
import WorldClock from './Components/WorldClock';
import ButtonAppBar from './Components/NavBar';
import AppRoutes from './Routes/AppRoutes';


function App() {
  return (
    <div>
    <ButtonAppBar/>
    <AppRoutes/>
    </div>
  )
}

export default App;