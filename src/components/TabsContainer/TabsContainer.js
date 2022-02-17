import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Divider } from "@mui/material";
import './TabsContainer.css'

export default function BasicTabs({ tabs, sendTabValue }) {
//   const tabs = [
//     "Cleaning",
//     "Transformations",
//     "Calculations",
//     "Text Processing",
//     "Custom"
//   ];
  const [value, setValue] = React.useState(1);

  
  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log();
   sendTabValue(event.target.innerText)

  };

  return (
    <>
      <Tabs  variant="scrollable" indicatorColor='primary' className='tabs-container' value={value} onChange={handleChange}>
        {tabs.map((tab, index) => (
          <Tab style={{ color: '#e7e7e7' }}
            
            className="tab"
            key={index}
            label={tab}
          />
        ))}
      </Tabs>
      <Divider color='#E3E3E3' />
    </>
  );
}

































// import React, { useEffect } from 'react'
// import { Tab, Tabs } from '@mui/material';
// import Divider from '@mui/material/Divider';

// import './TabsContainer.css'
// import { Box } from '@mui/system';
// const TabsContainer = ({ tabs, sendTabValue }) => {
//     const [value, setValue] = React.useState(1);
//     const [tabName, setTabName] = React.useState('');

    

//     const handleChange = (event, newValue) => {
//         setValue(newValue);
//         console.log(event)
//         setTabName(event.target.innerText)
//         sendTabValue(tabName)
//         console.log(tabName)
//     }
//     return (
//         <Box>
//             <Tabs value={value} indicatorColor='primary' variant="scrollable" onChange={handleChange} className='tabs-container' >
//                 {
//                     tabs.map((tab, index) => (
//                         <Tab style={{ color: '#e7e7e7' }} className='tab' key={index} label={tab} />
//                     ))
//                 }

//             </Tabs>
//             
//         </Box>
//     )
// }

// export default TabsContainer