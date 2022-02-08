import { Box, Container, Grid } from '@mui/material';
import React from 'react';
import aboutus from '../../assets/aboutUs.svg'
import BlueLine from '../Blue Line/BlueLine';

import './AboutUs.css'


const AboutUs = () => {
    return (
        <Box className='aboutus-main'>
            <Container className='about-us'>
                <Grid container alignItems='center' justifyContent='center' id='about-us' columnGap={10}
                    rowGap='3rem'>
                    <Grid item md={5} >
                        <img src={aboutus} alt="about-us" />
                    </Grid>

                    <Grid item md={6} className='text-area'>
                        <h2 className='heading'>About Us</h2>
                        <Box mt={2}>
                            <BlueLine />
                        </Box>
                        <p className='sub-heading'>Volutpat pellentesque molestie sed erat porta scelerisque massa augue. Elementum in malesuada sit nullam tortor consequat, elit quisque enim. Nisl, nec in consectetur felis odio. Volutpat pellentesque molestie sed erat porta scelerisque massa augue. Elementum in malesuada sit nullam tortor consequat, elit quisque enim. Nisl, nec in consectetur felis odio. Elementum in malesuada sit nullam tortor consequat,</p>

                    </Grid>
                </Grid>
            </Container>
        </Box>

    )
};

export default AboutUs;
