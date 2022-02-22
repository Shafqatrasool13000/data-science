import { Box } from '@mui/system'
import React from 'react'
import OurServices from '../HomePage/OurServices/OurServices'
import styles from '../Data Processing/home.module.scss';
import BlueLine from '../Blue Line/BlueLine';
import Footer2 from '../HomePage/Footer/Footer2'

const Home = () => {
    return (
        <>
        <Box mt='8rem'>
            <Box textAlign='center'>
            <h2 className={styles['heading-primary']} >
                My Profile
            </h2>
            <Box mt='2rem' display='flex' justifyContent='center'>
                    <BlueLine />
                </Box>
            </Box>
            <OurServices />
        </Box>
        <Footer2/>
        </>
    )
}

export default Home