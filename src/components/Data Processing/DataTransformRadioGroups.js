import * as React from 'react';

import { Box} from '@mui/material';
import './DataProcessing.css'
import RadioButtonScroll from '../RadioButtonsScroll/RadioButtonScroll';

export default function TransformRadioButtonsGroup() {
    
    return (
        <Box>
            <h2 className='data-transform-head' variant="h3" >
                Data Transformations
            </h2>
            <Box mt='2rem'>

            <RadioButtonScroll/>
            </Box>
        </Box>
    );
}
