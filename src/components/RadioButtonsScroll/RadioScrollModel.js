import React, { useContext, useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import './RadioButtonsScroll.css'
import { Box } from '@mui/material';
import { modelLabelContext,getValueContext } from '../Modeling/ModelingRightSide';


const RadioScrollModel = () => {
    const labels=useContext(modelLabelContext);
    const sendValue=useContext(getValueContext);



    const handleChange = (value) => {
      
        document.getElementById('process-default-btn').style = null;
        sendValue(value)
     
    }
    return <Box className='radio-button-main'>
        <FormControl >
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
            >{
                labels.map((value, index) =>{
                    const {title,check}=value
                   
                    return(
                        <FormControlLabel key={index} className='radio-label' value={title} control={<Radio  value={title} onChange={(event) => handleChange(event.target.value)} color="primary" />} sx={{
                            fontSize: '1.6rem'
                        }} label={title} />
                    )
                }
                       
                    )
                }

            </RadioGroup>
        </FormControl>

    </Box>;
};

export default RadioScrollModel;
