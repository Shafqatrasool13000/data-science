import React from 'react';
import { Container, Grid } from '@mui/material';
import TransformRadioButtonsGroup from './DataTransformRadioGroups';
import MergeDatabase from './MergeDatabase';
import DataProcessBtns from './DataProcessBtns';
import LoadData from './LoadData';
import Pipeline from './Pipeline';
import { Box } from '@mui/system';

const DataProcessing = () => {

    return <Box mt='3rem'>
        <Container >
            
            <Box mt='8.7rem'>
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
