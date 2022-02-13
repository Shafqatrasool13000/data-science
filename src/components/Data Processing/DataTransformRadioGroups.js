import * as React from 'react';

import { Box} from '@mui/material';
import './DataProcessing.css'
import RadioScrollProcess from '../RadioButtonsScroll/RadioScrollProcess';

export default function TransformRadioButtonsGroup() {
 
 
    return (
        <Box>
            <h2 className='data-transform-head' variant="h3" >
                Data Transformations
            </h2>
            <Box mt='2rem'>
            <RadioScrollProcess />
            </Box>
        </Box>
    );
}
