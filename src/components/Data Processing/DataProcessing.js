import React from 'react';
import { Container, Grid } from '@mui/material';
import TransformRadioButtonsGroup from './DataTransformRadioGroups';
import MergeDatabase from './MergeDatabase';
import LoadData from './LoadData';
import Pipeline from './Pipeline';
import { Box } from '@mui/system';
import styles from './home.module.scss';
const DataProcessing = () => {

    return <Box mt='3rem'>
        <Container >

            <Box mt='8.7rem'>
            <Box>
                    <h4 mt={2} className={styles['load-head']}>
                        Load Data
                    </h4>
                </Box>
                <LoadData />
            </Box>
            <Box mt='2.3rem'>
               
                <Pipeline />
            </Box>
            <Box mt='3rem'>
                <Grid container columnSpacing={3} rowSpacing={3}>
                    <Grid item xs={12} md={6}>
                        <TransformRadioButtonsGroup />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <MergeDatabase />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    </Box>
};

export default DataProcessing;
