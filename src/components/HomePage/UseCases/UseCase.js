import { Box, Button, Card, CardHeader, CardMedia } from '@mui/material';
import React from 'react';
import useCases from '../../../assets/useCases.svg'
import './UseCase.css'

const UseCase = () => {
  return (
    <Box pb='2rem'>
      <Card >
        <CardMedia
          component="img"
          image={useCases}
          alt="Paella dish"
        />
        <CardHeader className='usecase-title'
          title="Machine Learning-Based Fraud Detection in Healthcare"
          subheader='  Pulvinar eu fusce elementum nunc natoque auctor dictum. Cras eget imperdiet vel sit gravida faucibus tellus, quis eu. Gravida nisi, gravida arcu tristique.'
        />
        <Box ml='1rem' fontWeight='bold'  fontSize='2rem' color='blue' >
          <Button size="small">Learn More</Button>
          &#62;
        </Box>
      </Card>
    </Box>

  );
};

export default UseCase;
