import { Container, CssBaseline, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import Catalog from "../../features/catalog/Catalog";
import { Product } from "../../product";
import Header from "./Header";
import { ThemeProvider, createTheme } from '@mui/material/styles';


function App() {

  const [darkMode, setDarkMode]= useState(false);
  const [products, setProducts]= useState<Product[]>([
    ]);
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
  

  useEffect(()=>{
    fetch('http://localhost:5000/api/products')
    .then(response=>response.json())
    .then(data =>setProducts(data))
  }, [])  


  function handleThemeChange(){
     setDarkMode(!darkMode);
  }

  return (
    
  <ThemeProvider theme={theme}>
    <> 
      <CssBaseline/>
      <Header darkMode={darkMode} setDarkMode={handleThemeChange}/>
      <Container>
        <Catalog  products={products}/>
      </Container>
    </>
  </ThemeProvider>
  );
}

export default App;