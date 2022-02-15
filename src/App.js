import './App.css';
import {
  Switch,
  Route,
} from "react-router-dom";
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import Homepage from './components/HomePage/Homepage';
import AboutUs from './components/HomePage/AboutUs/AboutUs';
import ContactUs from './components/HomePage/Contact Us/ContactUs ';
import DataProcessBtns from './components/Data Processing/DataProcessBtns';
import AuthenticateHomepage from './components/HomePage/AuthenticateHomepage';
import Navbar from './components/Navbar/Navbar';
import { useLocation } from 'react-router-dom';


function App() {
  const location = useLocation()
  const theme = createTheme({
    typography: {
      htmlFontSize: 10,
      fontFamily: [
        'Raleway',
        'Poppins',
        'sans-serif',
      ].join(','),

    },
    palette: {
      primary: {
        main: '#009EE1'
      }
    }
  });
  return (
    <ThemeProvider theme={theme}>
      {
        location.pathname === '/use-cases' ?
          <Navbar /> : ''
      }
      <Switch>
        <Route exact path="/">
          <AuthenticateHomepage />
        </Route>
        <Route path="/profile">
          <Homepage />
        </Route>
        <Route exact path="/about">
          <AboutUs />
        </Route>
        <Route exact path="/use-cases">
          <DataProcessBtns />
        </Route>
        <Route exact path="/contact">
          <ContactUs />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
