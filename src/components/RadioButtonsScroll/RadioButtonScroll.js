import React,{useState} from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import './RadioButtonsScroll.css'
import { Box } from '@mui/material';
import GroupBy from '../GroupBy/GroupBy';
import MergeDatabase from '../Data Processing/MergeDatabase';

const RadioButtonScroll = ({id,modelLabels,dataLabels}) => {
    const [myComponent,setMyComponent]=useState(null)
    
    const dataTransforms = [{
        title: 'Group By',
        component: GroupBy
    }, {
        title: 'Merge Datasets',
        component: MergeDatabase

    },
    {
        title: 'Dual',
        component: MergeDatabase

    },
    {
        title: 'ClassWeight',
        component: MergeDatabase

    }

]
  
    
    const handleChange = (value) => {
        console.log(value)
        document.getElementById('process-default-btn').style=null;
        const result = dataTransforms.find((data) => value === data.title)
        setMyComponent(result.title)
        
        console.log(myComponent)
    }
    return <Box className='radio-button-main'>
        {
            id==='modeling'?(
<FormControl >
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
            >{
                modelLabels.map((value, index) =>
                        <FormControlLabel key={index} className='radio-label' value={value} control={<Radio value={value} onChange={(event)=>handleChange(event.target.value)} color="primary"/>} sx={{
                            fontSize: '1.6rem'
                        }} label={value} />
                    )
                }

            </RadioGroup>
        </FormControl>
            ):(
                <FormControl >
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
            >{
                dataLabels.map((value, index) =>
                        <FormControlLabel key={index} className='radio-label' value={value} control={<Radio value={value} onChange={(event)=>handleChange(event.target.value)} color="primary"/>} sx={{
                            fontSize: '1.6rem'
                        }} label={value} />
                    )
                }

            </RadioGroup>
        </FormControl>
            )
        }
        
    </Box>;
};

export default RadioButtonScroll;
