import { Box } from '@mui/system'
import React from 'react'
import OurServices from '../HomePage/OurServices/OurServices'
import styles from '../Data Processing/home.module.scss';


const Home = () => {
    return (
        <Box mt='8rem'>
            <Box textAlign='center'>
            <h2 className={styles['heading-primary']} >
                My Profile
            </h2>
            </Box>
            <OurServices />
        </Box>
    )
}

export default Home