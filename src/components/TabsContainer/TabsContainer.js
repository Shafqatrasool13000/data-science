import React from 'react'
import { Tab, Tabs } from '@mui/material';
import Divider from '@mui/material/Divider';

import './TabsContainer.css'
import { Box } from '@mui/system';
const TabsContainer = ({ tabs }) => {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    }
    return (
        <Box>
        <Tabs value={value} indicatorColor='primary' textColor='none' onChange={handleChange} className='tabs-container' >
            {
                tabs.map((tab, index) => (
                    <Tab className='tab'  key={index} label={tab} />
                    ))
                }

        </Tabs>
        <Divider color='#E3E3E3' />
                </Box>
    )
}

export default TabsContainer