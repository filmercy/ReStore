import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { FormGroup, FormControlLabel, Switch, ListItem, List, Badge } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { ShoppingCart } from '@mui/icons-material';

interface Props {
  darkMode : boolean;
  setDarkMode: ()=>void;
}

const midLinks= [
  {title:'catalog', path:'/catalog'},
  {title:'about', path:'/about'},
  {title:'contact', path:'/contact'},
]

const rightLinks= [
  {title:'login', path:'/login'},
  {title:'register', path:'/register'},
]

const navStyles= {
  textDecoration:'none',
  color:'inherit',
  typography:'h6',
  '&:hover':{
    color:'grey.500'
  },
  '&.active':{
    color:'text.secondary'
  }
}

export default function Header({darkMode, setDarkMode}:Props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ mb: 4 }}>
        <Toolbar sx={{display:'flex', justifyContent:'space-between'}}>
          <Box display='flex' alignItems='center'>
            <Typography variant="h6" component={NavLink} to='/' exact sx={navStyles}>
              ReStore
            </Typography>
            <Switch
                checked={darkMode}
                onChange={setDarkMode}
                inputProps={{ 'aria-label': 'controlled' }}
            />
         </Box>
         <Box display='flex' alignItems='center'>
            <List sx={{display:'flex'}}>
                  {
                    midLinks.map( item => (
                        <ListItem
                          component={NavLink}
                          to={item.path}
                          key={item.path}
                          sx={navStyles}
                        >
                          {item.title.toUpperCase()}
                        </ListItem>
                    ))}
              </List>
         </Box>

        <Box display='flex' alignItems='center'>
          <IconButton size='large' sx={{color:'inherit'}}>
            <Badge badgeContent={4} color='info'>
                    <ShoppingCart />
            </Badge> 
          </IconButton>


          <List sx={{display:'flex'}}>
              {
                rightLinks.map( item => (
                    <ListItem
                      component={NavLink}
                      to={item.path}
                      key={item.path}
                      sx={navStyles}
                    >
                      {item.title.toUpperCase()}
                    </ListItem>
                ))}
          </List>
        </Box>

        </Toolbar>
      </AppBar>
    </Box>
  );
}
