import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';
import './Components/Login'
// import theme from './Components/Theme'
// import ButtonAppBar from './Components/NavBar';
import WorldClock from './Components/WorldClock';


function App() {
  return (
    <WorldClock/>
  )
}

export default App;