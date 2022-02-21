import React, { useContext, useRef, useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import './RadioButtonsScroll.css'
import { Box, FormLabel } from '@mui/material';
import { modelLabelContext, getValueContext } from '../Modeling/ModelingRightSide';
import { useEffect } from 'react';


const RadioScrollModel = ({ newLabels }) => {
    const labels = useContext(modelLabelContext);
    const sendValue = useContext(getValueContext);
    const [selectedValue, setSelectedValue] = useState(null);

    // const radioReset = useRef(null)
    useEffect(() => {
        setSelectedValue(newLabels?.labels[0])
    }, [newLabels?.labels])

    // console.log(selectedValue)
    // const handleChange = (value) => {
    //     sendValue(value)

    //     console.log(value)


    // }
console.log(selectedValue,"selected Value")


const handleChange = (value) => {
    sendValue(value)
    
  };
  
    return (
        <Box className='radio-button-main'>
    {
        !newLabels?labels.map((value, index) =>(
            <Box mt='2.2rem' display='flex' alignItems='center'>
            <label class="container">{value}
  <input value={value} onChange={(event)=>handleChange(event.target.value)} type="radio"  name="radio"/>
  <span class="checkmark"></span>
</label>
</Box>
        )):

        newLabels.labels.map((value, index) =>(
            <Box mt='2.2rem' display='flex' alignItems='center'>
            <label class="container">{value}
  <input value={value} onChange={(event)=>handleChange(event.target.value)} type="radio"  name="radio"/>
  <span class="checkmark"></span>
</label>
</Box>)
        )       

    }
    </Box>
    )
};


export default RadioScrollModel;








// const [value, setValue] = React.useState('male');

// const handleChange = (event) => {
//   setValue(event.target.value);
  
// };

// <FormControl>
// <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
// <RadioGroup
//   aria-labelledby="demo-controlled-radio-buttons-group"
//   name="controlled-radio-buttons-group"
//   value={value}
//   onChange={handleChange}
// >
//   <FormControlLabel value="female" control={<Radio />} label="Female" />
//   <FormControlLabel value="male" control={<Radio />} label="Male" />
// </RadioGroup>
// </FormControl>

