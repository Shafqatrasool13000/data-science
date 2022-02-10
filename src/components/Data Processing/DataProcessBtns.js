import React, { useState } from 'react';
import { Box, Stack } from '@mui/material';
import styles from './home.module.scss';
import BlueLine from '../Blue Line/BlueLine';
import DataProcessing from './DataProcessing';
import Modeling from '../Modeling/Modeling'
import Output from '../Output/Output';

const DataProcessBtns = () => {
    const [processComponent, setProcessComponent] = useState('')
    const processes = [{
        title: 'process',
        component: DataProcessing
    }, {
        title: 'model',
        component: Modeling

    }, {
        title: 'output',
        component: Output
    }]
    document.addEventListener("DOMContentLoaded", function(event) { 
        document.getElementById("process-default-btn").click();
        document.getElementById("process-default-btn").style.border='2px solid #3134DB';
     });
    const handleChange = (value) => {
        document.getElementById('process-default-btn').style=null;
        const result = processes.find((process) => value === process.title)
        setProcessComponent(result.component)
        
        console.log(result.title)
    }
    return (
        <Box mt='11.7rem' pb='7rem'>
            <Box className='data-process-btn-main' sx={{
                display: 'flex', alignItems: 'center', flexDirection: 'column'
            }}>
                <h2 className={styles['heading-primary']} >
                    Data Processing
                </h2>
                <Box mt='2rem'>
                    <BlueLine />
                </Box>
                <Box mt='5.2rem'>
                    <Box >
                        <Stack direction='row' spacing='1.7rem' className={styles['data-process-btns']}>
                            <button id='process-default-btn'  onClick={() => handleChange('process')} >Data Processing</button><button onClick={() => handleChange('model')}>Modelling</button ><button onClick={() => handleChange('output')}>Output</button>
                        </Stack>
                    </Box>

                </Box>
            </Box>

            {!processComponent ? <DataProcessing/> :
                processComponent}
        </Box>
    )

};

export default DataProcessBtns;
