import { Box,Stack } from '@mui/material';
import React from 'react';
import './Sidebar.css'

const Sidebar = () => {
  return <Box mt={{xs:'0rem',sm:'0rem'}}  height={{lg:'100vh',xs:'100%'}} className='sidebar-main'  
  >
    <Stack direction={{xs:'row',md:'column'}} gap={2} p='2rem'>
      <button>General Models</button>
      <button>Deep Learning</button>
      <button >Correlation</button>
      <button >Topic Modeling</button>
    </Stack>
  </Box>;
};

export default Sidebar;
