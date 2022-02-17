import React from 'react';
import { Container, Grid } from '@mui/material';
import TransformRadioButtonsGroup from '../Data Processing/PipelineDetails';
import LoadData from '../Data Processing/LoadData';
import Pipeline from '../Data Processing/Pipeline';
import { Box } from '@mui/system';
import GroupBy from '../GroupBy/GroupBy';

const Output = () => {
  return(
    <Box mt='3rem'>
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
                    <GroupBy/>
                </Grid>
            </Grid>
        </Box>
    </Container>
</Box>
  );
};

export default Output;
