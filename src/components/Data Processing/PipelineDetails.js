import * as React from 'react';

import { Box} from '@mui/material';
import './DataProcessing.css'
import RadioScrollProcess from '../RadioButtonsScroll/RadioScrollProcess';

export default function PipelineDetails({value,newLabels}) {
    console.log(newLabels)
 
 
    return (
        <Box>
            <h2 className='data-transform-head' variant="h3" >
                {
                    !newLabels ?' Data Transformations':newLabels.title
                }
               
            </h2>
            <Box mt='2rem'>
            <RadioScrollProcess newLabels={newLabels}   />
            </Box>
        </Box>
    );
}
