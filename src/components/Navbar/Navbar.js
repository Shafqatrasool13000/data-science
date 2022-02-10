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
      <ul className={styles["links"]}>
        <li><Link to="about">About</Link></li>
        <li><Link to="use-cases">Use Cases</Link></li>
        <li><Link to="contact">Contact</Link></li>
      </ul>
    
     <button variant="contained" className='btn-blue'>
        Profile
      </button>
    

      <label htmlFor="nav-toggle" className={styles["icon-burger"]}>
        <div className={styles["line"]}></div>
        <div className={styles["line"]}></div>
        <div className={styles["line"]}></div>
      </label>
    </nav>

  )
};

export default Navbar;

