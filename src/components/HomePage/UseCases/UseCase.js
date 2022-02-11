import { Box, Paper } from '@mui/material';
import React from 'react';
import useCases from '../../../assets/useCases.svg'
import './UseCase.css'

const UseCase = () => {
  return (
    <Box mt='1.9rem'>
      <Paper>
        <img src={useCases} alt="usecases" />
        <Box  pb='2rem'
          className='usecase-text-container'
        >
          <h3  className='usecase-title'>Machine Learning-Based Fraud Detection in Healthcare"
          </h3>
          <Box mt='1.3rem'>
            <p className='usecase-subheading'>Pulvinar eu fusce elementum nunc natoque auctor dictum. Cras eget imperdiet vel sit gravida faucibus tellus, quis eu. Gravida nisi, gravida arcu tristique.'</p>
          </Box>
          <Box mt='1.9rem'>
            <a className='usecase-link-text' href='#'>Learn More &#62;</a>

          </Box>
        </Box>
      </Paper>
    </Box>

  );
};

export default UseCase;
