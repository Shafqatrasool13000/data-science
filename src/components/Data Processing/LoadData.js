import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import styles from './home.module.scss';


const LoadData = () => {
    return <Box className={styles['loadData-section']}>
        <h4 mt={2} className={styles['load-head']}>
            Load Data
        </h4>
        <Box mt='2.3rem' sx={{ display: 'flex', alignItems: 'center' }} gap={2}>
            <button variant="contained" className={styles['btn-blue']}>
                Choose File
            </button>
            <p className={styles['btn-blue-text']}>No file Choose</p>
        </Box>
    </Box>;
};

export default LoadData;

