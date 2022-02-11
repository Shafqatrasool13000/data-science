import React,{useEffect} from 'react';
import { Box,Stack } from '@mui/material';
import './Sidebar.css'

const Sidebar = () => {
  useEffect(() => {
    document.getElementById("sidebar-default-btn").click();
    document.getElementById("sidebar-default-btn").style.border='2px solid rgba(255, 255, 255, 0.08)';
    document.getElementById("sidebar-default-btn").style.background='rgba(255, 255, 255, 0.08)';
 
}, []);
const handleChange=()=>{
  document.getElementById('sidebar-default-btn').style=null;
}
  return <Box mt={{xs:'0rem',sm:'0rem'}}  height={{lg:'100vh',xs:'100%'}} className='sidebar-main'  
  >
    <Stack direction={{xs:'row',md:'column'}} className='sidebar-btns' gap={2} p='2rem'>
      <button id='sidebar-default-btn' onClick={()=>handleChange()}>General Models</button>
      <button onClick={()=>handleChange()}>Deep Learning</button>
      <button onClick={()=>handleChange()}>Correlation</button>
      <button onClick={()=>handleChange()}>Topic Modeling</button>
    </Stack>
  </Box>;
};

export default Sidebar;
