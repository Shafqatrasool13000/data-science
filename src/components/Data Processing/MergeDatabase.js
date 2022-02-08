import { Box,Stack} from '@mui/material';
import React from 'react';
import styles from './home.module.scss';
import LoadData from './LoadData';
import SelectMerge from './Select';
import './DataProcessing.css'

const MergeDatabase = () => {
  return <Box>
    <h2  className='data-transform-head'>
      Merge Two Datasets
    </h2>
    <Box mt='2rem'>

    <p  className='merge-subhead' >
      Select your table to merge on
    </p>
    </Box>
    <Box mt='1.6rem'>
    <LoadData />
    </Box>
    <Box mt='2rem'>
      <p  className='merge-subhead'>Select the merge type</p>
      <Box  className='merge-1'>

      <SelectMerge  />
      </Box>
    </Box>
    <Box mt='1.6rem'>
    <p  className='merge-subhead'>Keys to merge on</p>
    </Box>
    <Stack direction='row' columnGap={3} mt='2.3rem' >
      <Box className='merge-2' >
        <p  className='merge-subhead'>Left</p>
        <SelectMerge  />
      </Box>

      <Box className='merge-2'>
        <p  className='merge-subhead'>Right</p>
        <SelectMerge />
      </Box>
    </Stack>
    <Box mt='2.4rem'>
      <button  className={styles['btn-save']}>
        Save
      </button>
    </Box>
  </Box>;
};

export default MergeDatabase;
