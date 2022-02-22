import React from 'react';
import Header from './Header/Header';
import AboutUs from './AboutUs/AboutUs';
import UseCases from './UseCases/UseCases';
import ContactUs from './Contact Us/ContactUs ';
import Footer from './Footer/Footer';
import { useLocation } from 'react-router-dom';
import Footer2 from './Footer/Footer2';




const Homepage = () => {
    const location=useLocation()
    
    return <>
        <Header />
        <AboutUs/>   
        <UseCases />
        <ContactUs />   
{location.pathname==='/'||location.pathname==='/profile'?
        <Footer/>:<Footer2/>}
       
    </>;
};

export default Homepage;

