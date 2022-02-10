import React from 'react';
import Header from './Header/Header';
import AboutUs from './AboutUs/AboutUs';
import UseCases from './UseCases/UseCases';
import ContactUs from './Contact Us/ContactUs ';
import Footer from './Footer/Footer';

const AuthenticateHomepage = () => {
    return <>
        <Header />
        <AboutUs/>
        <UseCases />
        <ContactUs />
        <Footer/>   
    </>;
};

export default AuthenticateHomepage;

