import React, { useContext, useEffect, useState } from 'react';
import './RadioButtonsScroll.css'
import { Box } from '@mui/material';
import { getProcessValueContext, ProcessLabelContext } from '../Data Processing/DataProcessing';

const RadioScrollProcess = ({ newLabels }) => {
    console.log(newLabels, 'new label radio scroll')
    const labels = useContext(ProcessLabelContext);
    const sendValue = useContext(getProcessValueContext);


    const [SelectedLabel, setSelectedLabel] = useState('Max/Min')


    useEffect(() => {
        setSelectedLabel(newLabels?.labels[0])
    }, [newLabels])


    const handleChange = (value) => {
        sendValue(value)

    }

    return (
        <Box className='radio-button-main'>
            {
                !newLabels ? labels.map((value, index) => (
                    <Box mt='2.2rem' display='flex' alignItems='center'>
                        <label class="container">{value}
                            <input value={value} onChange={(event) => handleChange(event.target.value)} type="radio" name="radio" />
                            <span class="checkmark"></span>
                        </label>
                    </Box>
                )) :

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

export default RadioScrollProcess;
