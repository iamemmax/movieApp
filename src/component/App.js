import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { Container } from '@material-ui/core';
import Home from '../Pages/Home';
import { createTheme, ThemeProvider } from '@material-ui/core';

import Navbar from './Header/Navbar';
import Trend from '../Pages/Trend';
import Singlepage from '../Pages/Singlepage';



const theme = createTheme({
  palette:{
    primary:{
      main:"#131921",
      light:"#286076"
    },
    secondary:{
      main:"#e28904"
    }
    
  },
  typography:{
    h1:{
      fontFamily:" 'Poppins', sans-serif;font-family: 'Montserrat', sans-serif"
    },
    h2:{
      fontFamily:" 'Poppins', sans-serif;font-family: 'Montserrat', sans-serif"
    },
    h6:{
      fontFamily:" 'Poppins', sans-serif;font-family: 'Montserrat', sans-serif"
    },
    h5:{
      fontFamily:" 'Poppins', sans-serif;font-family: 'Montserrat', sans-serif"
    },
    body1:{
      fontFamily:" 'Poppins', sans-serif;font-family: 'Montserrat', sans-serif"
    },
    body2:{
      fontFamily:" 'Poppins', sans-serif;font-family: 'Montserrat', sans-serif"
    }
  }
})
console.log(theme);

const App = () => {
  return (
    <ThemeProvider theme={theme}>

  <Container>
      <Router>

        <header> <Navbar /></header>

        <main>
            <Routes>
                <Route  path="/"  element={<Home />}  />
                <Route  path="/trend"  element={<Trend />}  />
                <Route  path="/:name/:id"  element={<Singlepage />}  />
            </Routes>
        </main>    
      </Router>

  </Container>
  </ThemeProvider>
  );
};

export default App;
