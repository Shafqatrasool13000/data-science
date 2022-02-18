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

const [value, setValue] = React.useState('Dual');

const handleChange = (value) => {
    setValue(value);
    sendValue(value)
    
  };
  
    return <Box className='radio-button-main'>
<FormControl>
<RadioGroup
  aria-labelledby="demo-controlled-radio-buttons-group"
  name="controlled-radio-buttons-group"
  value={value}
  onChange={handleChange}
>
    {
        !newLabels?labels.map((value, index) =>(
            <FormControlLabel key={index} value={value} control={<Radio value={value} />} label={value} />
        )):(
            newLabels.labels.map((value, index) => (
                <FormControlLabel key={index}  className='radio-label' value={value} control={<Radio name='radio-scroll-model' value={value}  onChange={() => handleChange(value)} color="primary" />} sx={{
                    fontSize: '1.6rem'
                }} label={value} />
            )
        )
        )

    }

</RadioGroup>
</FormControl>








        {/* <FormControl  >
            <RadioGroup 

                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue={'Dual'}
                name="radio-buttons-group"
            >{
                    !newLabels ? (
                        labels.map((value, index) => (
                            <FormControlLabel key={index} className='radio-label' value={value} control={<Radio defaultValue='Dual' name='radio-scroll-model' value={!selectedValue ? value : selectedValue} onChange={(event) => handleChange(event.target.value)} color="primary" />} sx={{
                                fontSize: '1.6rem'
                            }} label={value} />
                        )

                        )
                    ) : (
                        newLabels.labels.map((value, index) => (
                            <FormControlLabel key={index} className='radio-label' value={value} control={<Radio name='radio-scroll-model' value={value} onChange={(event) => handleChange(event.target.value)} color="primary" />} sx={{
                                fontSize: '1.6rem'
                            }} label={value} />
                        )

                        )
                    )
                }

            </RadioGroup>
        </FormControl> */}

    </Box>;
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

