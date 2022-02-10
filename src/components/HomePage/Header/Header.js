import React from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../../Navbar/Navbar'
import Navbar2 from '../../Navbar/Navbar2'
import './Header.css'
const Header = () => {
    const location = useLocation()
    console.log(location.pathname);
    return (
        <div id="hero-main" >
            {
                location.pathname === '/profile' ? <Navbar /> : <Navbar2 />
            }
            <div className="hero-container">
                <div>
                    <div className='hero-title-length'>
                        <p className='hero-title'> Empowering your business with Data Science and AI Technology</p>
                    </div>
                    <p className='hero-sub hero-sub-length'>Volutpat pellentesque molestie sed erat porta scelerisque massa augue. Elementum in malesuada sit nullam tortor consequat, elit quisque enim. Nisl, nec in consectetur felis odio.</p>


                </div>
            </div>
        </div>
    )
}

export default Header
