import React from 'react';
import Header from './Header/Header';
import AboutUs from './AboutUs/AboutUs';
import OurServices from './OurServices/OurServices';
import UseCases from './UseCases/UseCases';
import ContactUs from './Contact Us/ContactUs ';
import Footer from './Footer/Footer';
import { Box } from '@mui/system';




const Homepage = () => {
    return <>
        <Header />
        <AboutUs/>   
        <UseCases />
        <ContactUs />   
        <Footer/>
       
    </>;
};

export default Homepage;

