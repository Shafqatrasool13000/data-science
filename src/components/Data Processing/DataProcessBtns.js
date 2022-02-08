import React from 'react';
import {Stack, Box } from '@mui/material';
import styles from './home.module.scss';
import BlueLine from '../Blue Line/BlueLine';


const DataProcessBtns = () => {
    return (
        <Box className='data-process-btn-main' sx={{
            display: 'flex', alignItems: 'center', flexDirection: 'column'
        }}>
            <h2 className={styles['heading-primary']} variant="h3">
                Data Processing
            </h2>
            <Box mt='2rem'>
            <BlueLine/>
            </Box>
            <Box mt='5.2rem'>

            
            </Box>
        </Box>
    )

};

export default DataProcessBtns;
