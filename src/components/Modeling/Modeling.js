import { Box, Container, Grid, Stack } from '@mui/material';
import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './Modeling.css'
import ModelingRightSide from './ModelingRightSide';

const Modeling = () => {
  return (
    <Box mt='3rem'>
      <Container>
        <Grid container>
          <Stack direction={{ xs:'column',md:'row'  }}>
            <Grid item  md={3}  xs={12} >
              <Sidebar />
            </Grid>
            <Stack>

              <Grid item xs={12}  md={9}>
                <ModelingRightSide />
              </Grid>
            </Stack>
          </Stack>
        </Grid>
      </Container>
    </Box>
  )

};

export default Modeling;

