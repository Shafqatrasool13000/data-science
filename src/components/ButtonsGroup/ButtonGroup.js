import { Stack } from '@mui/material';
import React from 'react';
import './ButtonsGroup.css'

const ButtonGroup = () => {
  return <Stack mt={3} direction={{xs:'column', md:'row'}} className='btns-group' gap={3} >
  <button variant="outlined">Regression</button>
  <button variant="outlined">Classification</button>
  <button variant="outlined">Unsupervised</button>
</Stack>;
};

export default ButtonGroup;
