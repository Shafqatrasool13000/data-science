import { Box } from '@mui/system';
import React from 'react';
import TabsContainer from '../TabsContainer/TabsContainer';


const Pipeline = () => {
    const tabs=['Cleaning','Transformations','Calculations','Text Processing','Custom']
    
    return <Box className='pipeline'>
      
        <p mt={2} style={{
           fontSize: '2rem',
           fontWeight: 600,
           lineHeight: '1.5rem'  ,
           color:'white',
           marginTop:'3rem'
        }} className='heading'>
            Create pipeline
        </p>
        <Box mt='2.3rem'>
            <TabsContainer tabs={tabs}/>
            
        
        </Box>
    </Box>;
};

export default Pipeline;
