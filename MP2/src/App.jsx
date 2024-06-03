import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';
import './Components/Login'
import theme from './Components/Theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HomePage/>
    </ThemeProvider>
  );
}

export default App;