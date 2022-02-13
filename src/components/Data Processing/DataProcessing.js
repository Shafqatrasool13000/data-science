import React, { useState } from 'react';
import { Container, Grid } from '@mui/material';
import TransformRadioButtonsGroup from './DataTransformRadioGroups';
import MergeDatabase from './MergeDatabase';
import LoadData from './LoadData';
import Pipeline from './Pipeline';
import { Box } from '@mui/system';
import styles from './home.module.scss';
import GroupBy from '../GroupBy/GroupBy';

export const ProcessLabelContext = React.createContext();
export const getProcessValueContext = React.createContext();
const DataProcessing = () => {
    // const [getMyComponent,setGetMyComponent]=useState(null)

    const labels = [
        'Concat', 'Cut', 'Group By', 'Merge Datasets', 'Melt', 'Shift', 'Pivot', 'Other', 'Other', 'Other', 'Other', 'Other', 'Other', 'Other', 'Other', 'Other', 'Other', 'Other',
    ]
    const dataTransforms = [{
        title: 'Group By',
        component: GroupBy
    }, {
        title: 'Merge Datasets',
        component: MergeDatabase

    },


    ]

    const getProcessValue = (value) => {
        const result = dataTransforms.find((data) => value === data.title)
        // setGetMyComponent(result.component)

    }

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
                        <ProcessLabelContext.Provider value={labels}>
                            <getProcessValueContext.Provider value={getProcessValue}>
                                <TransformRadioButtonsGroup />
                            </getProcessValueContext.Provider>
                        </ProcessLabelContext.Provider>
                    </Grid>
                    <Grid item xs={12} md={6}>
                  <GroupBy />

                    </Grid>
                </Grid>
            </Box>
        </Container>
    </Box>
};

export default DataProcessing;
