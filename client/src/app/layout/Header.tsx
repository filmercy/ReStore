import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { FormGroup, FormControlLabel, Switch } from '@mui/material';

interface Props {
  darkMode : boolean;
  setDarkMode: ()=>void;
}

export default function Header({darkMode, setDarkMode}:Props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ mb: 4 }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            ReStore
          </Typography>
          <FormGroup>
            <FormControlLabel control=
            {<Switch
              checked={darkMode}
              onChange={setDarkMode}
              inputProps={{ 'aria-label': 'controlled' }}
            />} label="DarkMode" />
          </FormGroup>

        </Toolbar>
      </AppBar>
    </Box>
  );
}
