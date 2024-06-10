import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { NavLink } from 'react-router-dom';
import { useUserContext } from '../Context/UserContext';
import '../App.css';

export default function ButtonAppBar() {
  const {currentUser}=useUserContext()
  return (
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor: 'transparent'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <NavLink id="link" to="/">Home</NavLink>
            <NavLink id="link" to="/worldclock"> World Clock</NavLink>
            <NavLink id="link" to="/about">About</NavLink>
            <NavLink id="link" to="/contact">Contact</NavLink>
            {currentUser?.email}
          </Typography>   
          <button class="button"><a href="/login">Login</a></button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
