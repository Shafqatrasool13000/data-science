import { Box, Stack } from '@mui/material';
import React from 'react';
import LoadData from './LoadData';
import Select from './Select';
import './DataProcessing.css'

const MergeDatabase = () => {
  const options = ['How', 'Left on', 'Right on']
  const leftOnOptions = ['Left on', 'How', 'Right on']
  const RightOnOptions = ['Right on', 'How', 'Right on']
  return <Box>
    <h2 className='data-transform-head'>
      Merge Two Datasets
    </h2>
    <Box mt='2rem'>

      <p className='merge-subhead' >
        Select your table to merge on
      </p>
    </Box>
    <Box mt='1.6rem'>
      <LoadData />
    </Box>
    <Box mt='2rem'>
      <p className='merge-subhead'>Select the merge type</p>
      <Box className='merge-1'>

        <Select options={options} />
      </Box>
    </Box>
    <Box mt='1.6rem'>
      <p className='merge-subhead'>Keys to merge on</p>
    </Box>
    <Stack direction='row' columnGap={3} mt='2.3rem' >
      <Box className='merge-2' >
        <p className='merge-subhead'>Left</p>
        <Select options={leftOnOptions} />
      </Box>

      <Box className='merge-2'>
        <p className='merge-subhead'>Right</p>
        <Select options={RightOnOptions} />
      </Box>
    </Stack>
    <Box mt='2.4rem'>

      <button variant="contained"

        className='save-btn'
      >
        Save
      </button>
    </Box>
  </Box>;
};

export default MergeDatabase;
