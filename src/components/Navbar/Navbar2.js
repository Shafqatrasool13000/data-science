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
        <li><Link to="about">About</Link></li>
        <li><Link to="use-cases">Use Cases</Link></li>
        <li><Link to="contact">Contact</Link></li>
        <Box display={{
        xs:'flex',sm:'none'
      }}
       columnGap='2rem' rowGap='2rem'>
        <Link to='use-cases'>
          <button variant="contained"
            className='save-btn'
          >
            Profile
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
        xs:'none',md:'flex'
      }}  columnGap='2rem' rowGap='2rem'>
        <Link to='use-cases'>
          <button variant="contained"
            className='save-btn'
          >
            Profile
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

