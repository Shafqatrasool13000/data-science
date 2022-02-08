import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Box, Container, createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import ContactUs from './components/Contact Us/ContactUs ';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import AboutUs from './components/AboutUs/AboutUs';
import UseCases from './components/UseCases/UseCases';
// import Homepage from './components/Homepage/Homepage';
import Navbar from './components/Navbar/Navbar';
import BlueLine from './components/Blue Line/BlueLine';
import DataProcessing from './components/Data Processing/DataProcessing';
import OurServices from './components/OurServices/OurServices';
import Modeling from './components/Modeling/Modeling';

function App() {
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
        main: '#0052cc',
      },
      secondary: {
        main: '#edf2ff',
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Header /> 
       <AboutUs/>
       <OurServices/>
       <UseCases/>
       <DataProcessing/>
        <Modeling />
     
      {/* <Container>
        <Router>
          <Box mt={10}>
            <Switch>
              <Route exact path="/">
                <Homepage />
              </Route>
              <Route exact path="/about">
                <AboutUs />
              </Route>
              <Route exact path="/use-cases">
                <UseCases />
              </Route>
              <Route exact path="/contact">
                <ContactUs />
              </Route>
            </Switch>
          </Box>
        </Router>
          {/* <SpecificKey />   */}
      {/* </Container>   */}
      {/* <ContactUs /> */}
      {/* <Footer/>  */}
    </ThemeProvider>
  );
}

export default App;
