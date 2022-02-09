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

    const handleChange = (value) => {

        const result = processes.find((process) => value === process.title)
        setProcessComponent(result.component)
        console.log(result.title)
    }
    return (
        <Box mt='11.7rem' pb='7rem'>
            <Box className='data-process-btn-main' sx={{
                display: 'flex', alignItems: 'center', flexDirection: 'column'
            }}>
                <h2 className={styles['heading-primary']} variant="h3">
                    Data Processing
                </h2>
                <Box mt='2rem'>
                    <BlueLine />
                </Box>
                <Box mt='5.2rem'>
                    <Box >
                        <Stack direction='row' spacing='1.7rem' className={styles['data-process-btns']}>
                            <button onClick={() => handleChange('process')} >Data Processing</button><button onClick={() => handleChange('model')}>Modelling</button ><button onClick={() => handleChange('output')}>Output</button>
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
