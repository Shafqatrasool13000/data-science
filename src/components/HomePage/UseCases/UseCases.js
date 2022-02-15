import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import BlueLine from '../../Blue Line/BlueLine';
import UseCase from './UseCase';
import './UseCase.css'
import rectangle from '../../../assets/rectangle.svg';
import sideLine from '../../../assets/sideLine.svg';


export default function UseCases() {

  return (
    <div>
          <div className='usecases-main-div' >
   
   </div>
 <Box id='usecase-main'>
      <Box display='flex' flexDirection='column' alignItems='center'
        justify-content='center'
        className='usecase-container' >
          <div className='about-us-img-container1'>
        <img src={rectangle} alt="rectangle" />

      </div>
      <div className='about-us-img-container2'>
        <img src={rectangle} alt="rectangle" />
        <div className='usecase-img-sideline'>
                    <img src={sideLine} alt="sideLine" />
                </div>

      </div>
        <Box>
          <p className='usecase-main-heading'>Use Cases</p>
        </Box>
        <Box mt='2.1rem'>
          <BlueLine />
        </Box>
      </Box>
      <Box mt='6rem'>
        <Container >
          <Grid container justifContent='center' columnSpacing={4} rowSpacing={2}>
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

    </Box>
    </div>

    



  );
}
