import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: 'FFFFFF'
    },
    secondary: {
      main: 'D9D9D9'
    },
  },
  typography: {
    fontFamily: '"Poppins", sans-serif',
  }  
});

export default theme;