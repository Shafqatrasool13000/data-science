import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import ButtonGroup from '../ButtonsGroup/ButtonGroup';
import LoadData from '../Data Processing/LoadData';
import Select from '../Data Processing/Select';
import RadioButtonScroll from '../RadioButtonsScroll/RadioButtonScroll';
import TabsContainer from '../TabsContainer/TabsContainer';
import ClassWeight from './ClassWeight';
import Dual from './Dual';

const ModelingRightSide = () => {
  const tabs=['Numeric Variable','Categorical Variable','Target Variable']
  const labels = [
    'Penalty', 'Dual', 'Tolerance', 'C', 'Fit Intercept Scaling', 'ClassWeight', 'Solver', 'Other', 'Other', 'Other', 'Other', 'Other', 'Other', 'Other', 'Other', 'Other', 'Other', 'Other',
]
  return <Box id='modeling-right-side' mt='3rem'>
    <Container>
      <Box>
        <h4 mt={2} className='load-head'>
          Load Data
        </h4>
      </Box>
      <LoadData />
      <Box mt='3rem'>
        <h3 className='model-heading-text'>Specify Key Variables</h3>
        <Box mt='2.3rem'>
          <p className='model-subheading-text'>
            Identify the different types of variable
          </p>
        </Box>
        <Box mt='2.3rem'>
<TabsContainer tabs={tabs}/>
        </Box>
        <Box mt='2rem'>
          <p className='model-subheading-text'>Select the appropriate for each variable type</p>
          <Grid container mt={3} alignItems='center' justifyContent="space-between" spacing={3}>
            <Grid item xs={12} md={5} lg={5}  >
              <Box sx={{
                height: '146px', bgcolor: 'rgba(255, 255, 255, 0.13);'
              }} />
            </Grid>
            <Box 
              display= {{
                xs: 'none', md: 'unset'
              }} fontSize='6rem'
            >
            <Grid item md={2} lg={2}   > <Box component='p' sx={{ lineHeight: 0, color: '#FFFFFF' }}>
                &#8594;
              </Box>
              <Box component='p' color='#FFFFFF'>
                &#8592;
              </Box>
            </Grid>
            </Box>
            <Box my='3rem' mx='auto'   display= {{
                xs: 'unset', md: 'none'
              }}
               fontSize='6rem'
            >
            <Grid   item md={2} lg={2}   > <Box mx='auto' component='p' sx={{ lineHeight: 0, color: '#FFFFFF',marginLeft:'3rem' }}>
            &#8593;
              </Box>
              <Box mx='auto' component='p' sx={{ lineHeight: 0, color: '#FFFFFF', }}>
              &#8595;
              </Box>
            </Grid>
            </Box>
            <Grid xs={12}  md={5}  lg={5} item >
              <Box sx={{
                height: '146px', bgcolor: 'rgba(255, 255, 255, 0.13);'
              }} />
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box mt='3rem'>
        <p className='model-heading-text'>Select Model</p>
      </Box>
      <Box mt='2rem'>
        <p className='model-subheading-text'>Select the type of model</p>
        <ButtonGroup />
      </Box>
      <Box mt='2.3rem' className='model-subheading-text'>
        <p>Build a new model</p>
        <Box className='select-model'>
          <Select />
        </Box>
      </Box>
      <Box mt='2rem'>
        <p className='model-heading-text'>Model Parameters</p>
      </Box>
      <Box mt='2.3rem'>


        <Grid container columnSpacing={3} rowSpacing={3}>
          <Grid item xs={12} lg={6}>
            <Box>
              <RadioButtonScroll id='modeling' modelLabels={labels} />
            </Box>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Box>
              <p className='model-heading-text'>Update Parameter</p>

            </Box>
            <Dual/>
            <Box mt='2.5rem'>
              <button className='modal-small-text submit-btn'>Submit</button>
            </Box>
          </Grid>
        </Grid>
      </Box>




    </Container>
  </Box>;;
};

export default ModelingRightSide;
