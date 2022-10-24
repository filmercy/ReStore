import { Container, CssBaseline, Typography } from "@mui/material";
import { useState, useEffect } from "react";

import { Product } from "../../product";
import Header from "./Header";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Route } from "react-router-dom";
import HomePage from "../../features/home/HomePage";
import AboutPage from "../../features/about/AboutPage";
import ContactPage from "../../features/contact/ContactPage";
import ProductDetails from "../../features/catalog/ProductDetails";
import Catalog from "../../features/catalog/Catalog";


function App() {

  const [darkMode, setDarkMode]= useState(false);
 
  const paletteType= darkMode? 'dark': 'light';
  const theme = createTheme({
    palette: {
      mode:paletteType,
      background:{
        default: paletteType ==='light'?'#eaeaea':'#121212'
      },
      primary: {
        light: '#ff5f52',
        main: '#c62828',
        dark: '#8e0000',
        contrastText: '#ffffff',
      },
      secondary: {
        light: '#ff833a',
        main: '#e65100',
        dark: '#ac1900',
        contrastText: '#000000',
      },
    },
  });
  

  function handleThemeChange(){
     setDarkMode(!darkMode);
  }

  return (
    
  <ThemeProvider theme={theme}>
    <> 
      <CssBaseline/>
      <Header darkMode={darkMode} setDarkMode={handleThemeChange}/>
      <Container>
        <Route exact path='/' component={HomePage}/> 
        <Route exact path='/catalog' component={Catalog}/>
        <Route path='/catalog/:id' component={ProductDetails}/>
        <Route path='/contact' component={ContactPage}/>
        <Route path='/about' component={AboutPage}/>

      </Container>
    </>
  </ThemeProvider>
  );
}

export default App;