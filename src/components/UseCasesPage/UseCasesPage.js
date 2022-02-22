import { Container, Stack } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import BlueLine from '../Blue Line/BlueLine';
import styles from '../Data Processing/home.module.scss';
import '../Data Processing/DataProcessing.css';
import Footer2 from '../HomePage/Footer/Footer2';

const UseCasesPage = () => {
    const useCases = ['Use Case 1', 'Use Case 2', 'Use Case 3']

    const handleChange = (value) => {
        document.getElementById('process-default-btn').style = null;
        // const result = processes.find((process) => value === process.title)
        // setProcessComponent(result.title)

    }


    return (
        <Box mt='11.7rem'>

            <Container >

                <Box className='data-process-btn-main' sx={{
                    display: 'flex', alignItems: 'center', flexDirection: 'column'
                }} >

                    <h2 className={styles['heading-primary']} >
                        Use Cases
                    </h2>
                    <Box mt='2rem'>
                        <BlueLine />
                    </Box>
                </Box>
                {
                    useCases.map((usecase, index) => (
                        <Box mt='5.2rem'>
                            <Box mt='4rem'>
                                <p className='model-heading-text'> {usecase}</p>
                                <Box mt='3rem' >
                                    <p className='merge-subhead' >
                                        {usecase}
                                    </p>
                                </Box>
                            </Box  >
                        </Box>
                    ))
                }
            </Container>
<Footer2/>
        </Box>

    )
}

export default UseCasesPage





