import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import BlueLine from '../../Blue Line/BlueLine';
import UseCase from './UseCase';
import './UseCase.css'


export default function UseCases() {

  return (

    <Box id='usecase-main'>
      <Box display='flex' flexDirection='column' alignItems='center' 
      justify-content='center'
      className='usecase-container' >
        <Box mt={5}>
          <p className='usecase-main-heading'>UseCases</p>
        </Box>
        <Box mt={2}>
          <BlueLine />
        </Box>
      </Box>
      <Container >
        <Grid pb='6rem' container justifContent='center' columnSpacing={4} rowSpacing={2}>
          <Grid item md={6} lg={4}>
            <UseCase />
          </Grid>
          <Grid item md={6} lg={4}>
            <UseCase />
          </Grid>
          <Grid item md={6} lg={4}>
            <UseCase />
          </Grid>
        </Grid>
      </Container>
    </Box>



  );
}
