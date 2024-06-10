import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';
import './Components/Login'
// import ButtonAppBar from './Components/NavBar';
import WorldClock from './Components/WorldClock';
import ButtonAppBar from './Components/NavBar';
import AppRoutes from './Routes/AppRoutes';
import { UserProvider } from './Context/UserContext';


function App() {
  return (
    <div>
    <UserProvider>
    <ButtonAppBar/>
    <AppRoutes/>
    </UserProvider>  
    </div>
  )
}

export default App;