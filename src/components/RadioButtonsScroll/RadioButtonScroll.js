import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import './RadioButtonsScroll.css'
import { Box } from '@mui/material';

const RadioButtonScroll = () => {
    const labels = [
        'Cut', 'Merge', 'Other', 'Other', 'Other', 'Other', 'Other', 'Other', 'Other', 'Other', 'Other', 'Other', 'Other', 'Other', 'Other', 'Other', 'Other', 'Other',
    ]
    return <Box className='radio-button-main'>
        <FormControl >
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
            >{
                    labels.map((value, index) =>
                        <FormControlLabel key={index} className='radio-label' value={value} control={<Radio className='radio-transform' />} sx={{
                            fontSize: '1.6rem'
                        }} label={value} />
                    )
                }

            </RadioGroup>
        </FormControl>
    </Box>;
};

export default RadioButtonScroll;
