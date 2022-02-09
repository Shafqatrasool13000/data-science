import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import ButtonGroup from '../ButtonsGroup/ButtonGroup';
import LoadData from '../Data Processing/LoadData';
import Select from '../Data Processing/Select';
import RadioButtonScroll from '../RadioButtonsScroll/RadioButtonScroll';

const ModelingRightSide = () => {
  return <Box id='modeling-right-side' mt='3rem'>
    <Container>
      <LoadData />
      <Box mt='3rem'>
        <h3 className='model-heading-text'>Specify Key Variables</h3>
        <Box mt='2.3rem'>
          <p className='model-subheading-text'>
            Identify the different types of variable
          </p>
        </Box>
        <Box mt='2rem'>
          <p className='model-subheading-text'>Select the appropriate for each variable type</p>
          <Grid container mt={3} alignItems='center' justifyContent="space-between" spacing={3}>
            <Grid item xs={12} md={6} lg={5}  >
              <Box sx={{
                height: '146px', bgcolor: 'rgba(255, 255, 255, 0.13);'
              }} />
            </Grid>
            <Grid item md={2} lg={2} sx={{
              display: {
                xs: 'none', lg: 'unset'
              }, fontSize: '6rem'
            }}  > <Box component='p' sx={{ lineHeight: 0, color: '#FFFFFF' }}>
                &#8594;
              </Box>
              <Box component='p' color='#FFFFFF'>
                &#8592;
              </Box>
            </Grid>
            <Grid xs={12} md={6} lg={5} item >
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

      
      <Grid  container columnSpacing={3} rowSpacing={3}>
        <Grid item xs={12} lg={6}>
          <Box>
            <RadioButtonScroll />
          </Box>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Box>
            <p className='model-heading-text'>Update Parameter</p>

          </Box>
          <Box mt='3.2rem'>
            <p className='model-subheading-text'>

              Dual
            </p>

          </Box>
          <Box mt='.9rem'>
            <Box mt='1.2rem' className='select-model2'>
              <Select />
            </Box>
            <p className='modal-small-text line-Spacing'>Dual or primal formulation. Dual formulation is only implemented for 12 penalty with liblinear solver. Prefer dual=False when n_samples  n_features</p>
          </Box>
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
