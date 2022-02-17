import React, { useContext , useEffect , useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import './RadioButtonsScroll.css'
import { Box } from '@mui/material';
import { getProcessValueContext, ProcessLabelContext } from '../Data Processing/DataProcessing';

const RadioScrollProcess = ({newLabels}) => {
    console.log(newLabels,'new label radio scroll')
    const labels=useContext(ProcessLabelContext);
    const sendValue=useContext(getProcessValueContext);


    const [SelectedLabel, setSelectedLabel] = useState('Max/Min')


    useEffect(() => {
        setSelectedLabel(newLabels?.labels[0])
    }, [newLabels])
    

    const handleChange = (value) => {
        sendValue(value)
        
       
        
    }

    console.log(SelectedLabel , 'newLabels');
    return <Box className='radio-button-main'>
        <FormControl>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue={"Group By"}
                name="radio-buttons-group"
            >{
                !newLabels? (labels.map((value, index) =>
                        <FormControlLabel key={index} className='radio-label' value={value} control={<Radio value={value} onChange={(event) => handleChange(event.target.value)} color="primary" />} sx={{
                            fontSize: '1.6rem'
                        }} label={value} />
                    )):newLabels.labels.map((value, index) =>
                    <FormControlLabel key={index} className='radio-label' value={value} control={<Radio value={value} onChange={(event) => handleChange(event.target.value)} color="primary" />} sx={{
                        fontSize: '1.6rem'
                    }} label={value} />
                )
                }
            </RadioGroup>
        </FormControl>

    </Box>;
};

export default RadioScrollProcess;
