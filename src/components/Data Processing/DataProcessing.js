import React, { useState } from 'react';
import { Container, Grid } from '@mui/material';
import PipelineDetails from './PipelineDetails';
import MergeDatabase from './MergeDatabase';
import LoadData from './LoadData';
import { Box } from '@mui/system';
import styles from './home.module.scss';
import GroupBy from '../GroupBy/GroupBy';
import TabsContainer from '../TabsContainer/TabsContainer';

export const ProcessLabelContext = React.createContext();
export const getProcessValueContext = React.createContext();


const DataProcessing = () => {

    let [getMyComponent, setGetMyComponent] = useState(null)
    let [tabValue, setTabValue] = useState('')
    const [labelComponent, setLabelComponent] = useState(null)
    const processLabels = [
        {
            title: 'Cleaning',
            labels: ['Drop Columns',
                'Drop Duplicates',
                'Fill NA Values',
                'Rename Columns']
        },
        {
            title: 'Transformations',
            labels: [
                'Concat', 'Cut', 'Group By', 'Merge Datasets', 'Melt', 'Shift', 'Pivot', 'Other', 'Other', 'Other', 'Other', 'Other', 'Other', 'Other', 'Other', 'Other', 'Other', 'Other',
            ]
        },
        {
            title: 'Calculations',
            labels: ['Max/Min',
                'Rolling Calculations',
                ' Column Sum/Product']
        },
        {
            title: 'Text Processing',
            labels: ['Contains',
                'Extract',
                'Replace',
                'Split'
            ]
        },
        {
            title: 'Custom',
            labels: ['Drop Columns',
                'Drop Duplicates',
                'Fill NA Values',
                'Rename Columns']
        },
    ]


    const getTabValue = (value) => {
        console.log(value, 'tab')
        setTabValue(value)
        const result = processLabels.find((element) => element.title === value)
        setLabelComponent(result)

    }
    console.log(labelComponent)
    const tabs = ['Cleaning', 'Transformations', 'Calculations', 'Text Processing', 'Custom']
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
        console.log(result)
        setGetMyComponent(result.component)
    }

    return <Box mt='3rem'>
        <Container >

            <Box mt='8.7rem'>
                <Box>
                    <h4 mt={2} className={styles['load-head']}>
                        Load Data
                    </h4>
                </Box >
                <LoadData />
            </Box>
            <Box mt='2.3rem'>
                <p mt={2} style={{
                    fontSize: '2rem',
                    fontWeight: 600,
                    lineHeight: '1.5rem',
                    color: 'white',
                    marginTop: '3rem'
                }} className='heading'>
                    Create pipeline
                </p>
            </Box>
            <Box mt='2.3rem'>
                <TabsContainer tabs={tabs} labelComponent={labelComponent} sendTabValue={getTabValue} />
            </Box>
            <Box mt='3rem'>
                <Grid container columnSpacing={3} rowSpacing={3}>
                    <Grid item xs={12} md={6}>
                        <ProcessLabelContext.Provider value={labels}>
                            <getProcessValueContext.Provider value={getProcessValue}>
                                <PipelineDetails value={tabValue} newLabels={labelComponent} />
                            </getProcessValueContext.Provider>
                        </ProcessLabelContext.Provider>
                        <Box mt='4rem'>
                            <p className='model-heading-text'> Preview</p>
                      
                        <Box mt='2.5rem' display='flex' >
                            <button className='modal-small-text submit-btn' >Preview</button>
                            <Box ml='2rem' >
                            <button px='2rem' className='modal-small-text submit-btn'>Hide</button>
                            </Box>
                        </Box>
                        </Box>
                        <Box mt='4rem'>     
                            <p className='model-heading-text'> Pipeline</p>
                        <Box mt='2.5rem' >
                            <button className='modal-small-text submit-btn' >Show</button>   
                        </Box>
                        </Box>
                        <Box>     
                        <Box mt='4rem'>
                            <p className='model-heading-text'>Save & Submit</p>
                        </Box>
                        <Box mt='2.5rem' >
                            <button className='modal-small-text submit-btn' >Submit</button>
                            
                        </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        {!getMyComponent || getMyComponent === 'undefined' ? <GroupBy /> : getMyComponent}

                    </Grid>
                </Grid>
            </Box>
        </Container>
    </Box>
};

export default DataProcessing;
