import { Stack } from '@mui/material';
import React,{useEffect} from 'react';
import './ButtonsGroup.css'

const ButtonGroup = () => {
  useEffect(() => {
    document.getElementById("btn-group-default-btn").click();
    document.getElementById("btn-group-default-btn").style.border='2px solid #3134DB';
 
}, []);
const handleChange=()=>{
  document.getElementById('btn-group-default-btn').style=null;
}
  return <Stack mt={3} direction={{xs:'column', md:'row'}} className='btns-group'  gap={3} >
  <button variant="outlined " id='btn-group-default-btn'onClick={()=>handleChange()}>Regression</button>
  <button variant="outlined" onClick={()=>handleChange()}>Classification</button>
  <button variant="outlined" onClick={()=>handleChange()}>Unsupervised</button>
</Stack>;
};

export default ButtonGroup;
