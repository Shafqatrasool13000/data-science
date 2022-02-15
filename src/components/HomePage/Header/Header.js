import React from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../../Navbar/Navbar'
import Navbar2 from '../../Navbar/Navbar2'
import './Header.css'
import sideLine from '../../../assets/sideLine.svg';
import { Container } from '@mui/material'
import { Box } from '@mui/system'
const Header = () => {
    const location = useLocation()
    console.log(location.pathname);
    return (
        <div id="hero-main" >
            {
                location.pathname === '/profile' ? <Navbar /> : <Navbar2 />
            }
            <div className="hero-container">
                <Box display={{
                  xs:'none',lg:'unset'
              }}>
                <div className='hero-img-container'>
                    <img src={sideLine} alt="sideLine" />
                </div>
                </Box>
              <Box display={{
                  xs:'none',lg:'unset'
              }}>

                <div className='hero-img-container1'>
                    <img src={sideLine} alt="sideLine" />
                </div>
              </Box>



                <Container>
                    <div className='hero-title-length'>
                        <p className='hero-title'> Empowering your business with Data Science and AI Technology</p>
                    </div>
                    <p className='hero-sub hero-sub-length'>Volutpat pellentesque molestie sed erat porta scelerisque massa augue. Elementum in malesuada sit nullam tortor consequat, elit quisque enim. Nisl, nec in consectetur felis odio.</p>


                </Container>

            </div>

        </div>
    )
}

export default Header
