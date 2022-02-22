import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg'
import { Box } from '@mui/material';
import styles from './navbar.module.scss'
import { useHistory } from 'react-router-dom';
const Navbar = () => {
const history=useHistory()
  const moveToHome=()=>{
    history.push('/work-flows/home')
  }
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
        <li><Link to="#">About</Link></li>
        <li><Link to="/use-cases">Use Cases</Link></li>
        <li><Link to="/work-flows">Work Flows</Link></li>
        <li><Link to="#">Contact</Link></li>
      </ul>
    <Box display={{xs:'none',lg:'block'}} mt='0.5rem'>
    
     <button onClick={()=>moveToHome()} variant="contained" className='btn-blue'>
        Profile
      </button>
    </Box>
    
      <Box display='flex' alignItems='center'>
        <Box display={{xs:'block',lg:'none'}} mr='1.5rem'>

      <button onClick={()=>moveToHome()} variant="contained" className='btn-blue'>
        Profile
      </button>
        </Box>
      <label htmlFor="nav-toggle" className={styles["icon-burger"]}>
        <div className={styles["line"]}></div>
        <div className={styles["line"]}></div>
        <div className={styles["line"]}></div>
      </label>
      </Box>
    </nav>

  )
};

export default Navbar;

