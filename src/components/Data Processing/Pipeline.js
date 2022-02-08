import { Grid, Tab, Tabs, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import './home.module.scss';


const Pipeline = () => {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    }
    return <Box className='pipeline' sx={{ borderBottom: 1, borderColor: 'rgba(255, 255, 255, 0.28);' }}>
        <p mt={2} style={{
           fontSize: '2rem',
           fontWeight: 600,
           lineHeight: '1.5rem'  ,
           color:'white',
           marginTop:'3rem'
        }} className='heading'>
            Create pipeline
        </p>
        <Tabs value={value} textColor='common.white' onChange={handleChange} sx={{
            color:'white',textTransform:'Captilize'
           
        }} >
           <Grid container>

                <Tab className='tab'  label="Cleaning" />
                <Tab className='tab' label="Transformations" />
                <Tab className='tab' label="Calculations" />
                <Tab className='tab' label="Text Processing" />
                <Tab className='tab' label="Custom" />
          
           </Grid>
        </Tabs>
    </Box>;
};

export default Pipeline;
