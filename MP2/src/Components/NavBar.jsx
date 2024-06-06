import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import { useUserContext } from '../Context/UserContext';

export default function ButtonAppBar() {
  const {currentUser}=useUserContext()
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <NavLink id="link" to="/worldclock">Home</NavLink>
            About
            FAQs 
            Contact 
            {currentUser?.email}
          </Typography>
          <button class="button"><a href="/login">Login</a></button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
