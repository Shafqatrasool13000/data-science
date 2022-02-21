import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg'
import { Box } from '@mui/material';
import styles from './navbar.module.scss'
const Navbar = () => {
  return (
    <nav>
      <input id="nav-toggle" hidden type="checkbox" />
      <Box mb='0.7rem' display='flex' alignItems='center' className='logo'>
        <Link to="/">
          <img src={logo} alt="data-science-logo" />
        </Link>
        <p className='nav-heading' >Data Science
        </p>
      </Box>
      <ul className={styles["links"]} px='2rem'>
        <li><Link to="#">About</Link></li>
        <li><Link to="/use-cases">Use Cases</Link></li>
        <li><Link to="work-flows">Work Flows</Link></li>
        <li><Link to="#">Contact</Link></li>
        <Box ml={{
          xs:'1.5rem',lg:'0'
        }} display={{
        xs:'flex',lg:'none'
      }}
       columnGap={{
        xs:'0',lg:'2rem'
      }} rowGap='2rem'>
        <Link to='/profile'>
          <button variant="contained"
          style={{
            marginRight:'-3rem'
          }}
            className='save-btn'
          >
            Login
          </button>
          </Link>
        
        <button variant="contained"

          className='register-btn'
        >
          Register
        </button>
      </Box>
      </ul>
      <Box display={{
        xs:'none',lg:'flex'
      }}  columnGap='2rem' rowGap='2rem'>
        <Link to='/profile'>
          <button variant="contained"
            className='save-btn'
          >
            Login
          </button>
        </Link>
        <button variant="contained"

          className='register-btn'
        >
          Register
        </button>
      </Box>


      <label htmlFor="nav-toggle" className={styles["icon-burger"]}>
        <div className={styles["line"]}></div>
        <div className={styles["line"]}></div>
        <div className={styles["line"]}></div>
      </label>
    </nav>

  )
};

export default Navbar;

