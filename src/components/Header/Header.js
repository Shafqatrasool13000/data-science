
import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Header.css'
const Header = () => {
    return (
        <div id="hero-main" >
            <Navbar />
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
