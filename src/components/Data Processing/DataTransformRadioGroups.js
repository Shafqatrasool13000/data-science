import * as React from 'react';

import { Box} from '@mui/material';
import './DataProcessing.css'
import RadioButtonScroll from '../RadioButtonsScroll/RadioButtonScroll';

export default function TransformRadioButtonsGroup() {
  const labels = [
        'Concat', 'Cut', 'Group By', 'Merge Datasets', 'Melt', 'Shift', 'Pivot', 'Other', 'Other', 'Other', 'Other', 'Other', 'Other', 'Other', 'Other', 'Other', 'Other', 'Other',
    ]
    
    return (
        <Box>
            <h2 className='data-transform-head' variant="h3" >
                Data Transformations
            </h2>
            <Box mt='2rem'>
            <RadioButtonScroll id='data-processing' dataLabels={labels}/>
            </Box>
        </Box>
    );
}
