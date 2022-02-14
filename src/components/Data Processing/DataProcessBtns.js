import React, { useState, useEffect } from 'react';
import { Box, Stack } from '@mui/material';
import styles from './home.module.scss';
import BlueLine from '../Blue Line/BlueLine';
import DataProcessing from './DataProcessing';
import Modeling from '../Modeling/Modeling'
import Output from '../Output/Output';

const DataProcessBtns = () => {
    const [processComponent, setProcessComponent] = useState('')


    useEffect(() => {
        document.getElementById("process-default-btn").style.border = '2px solid #3134DB';
    }, []);


    const processes = [{
        title: 'Data Processing',
        component: DataProcessing
    }, {
        title: 'Modelling',
        component: Modeling

    },
    {
        title: 'Output',
        component: DataProcessing
    }
    ]

    const handleChange = (value) => {
        document.getElementById('process-default-btn').style = null;
        const result = processes.find((process) => value === process.title)
        setProcessComponent(result.title)

    }

    console.log(processComponent);
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
                            <input type="radio" id="html" name="2" onClick={(e) => handleChange(e.target.value)} value="Data Processing" />
                            <label id='process-default-btn' for="html">Data Processing</label>
                            <input type="radio" id="css" name="2" onClick={(e) => handleChange(e.target.value)} value="Modelling" />
                            <label for="css">Modelling</label>
                            <input type="radio" id="javascript" onClick={(e) => handleChange(e.target.value)} name="2" value="Output" />
                            <label for="javascript">Output</label>
                        </Stack>
                        {/* <Stack direction='row' spacing='1.7rem' className={styles['data-process-btns']}>
                            <button id='process-default-btn'  onClick={() => handleChange('process')} >Data Processing</button><button onClick={() => handleChange('model')}>Modelling</button ><button onClick={() => handleChange('output')}>Output</button>
                        </Stack> */}
                    </Box>

                </Box>
            </Box>

            {
               processComponent == 'Output' ? ( <DataProcessing/> ) :  processComponent == 'Modelling' ? ( <Modeling/> ) : processComponent == 'Data Processing' ? ( <DataProcessing/> ) : <DataProcessing/>
            }

            {/* {!processComponent ? <DataProcessing /> :
                processComponent} */}
        </Box>
    )

};

export default DataProcessBtns;
