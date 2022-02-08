import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import s1 from '../../assets/1.svg';
import s2 from '../../assets/2.svg';
import s3 from '../../assets/3.svg';
import s4 from '../../assets/4.svg';
import s5 from '../../assets/5.svg';
import s6 from '../../assets/6.svg';
import './OurServices.css'
const services = [{
  img: s1,
  title: 'Connections'
},
{
  img: s2,
  title: 'My Data'
},
{
  img: s3,
  title: 'Data Processing'
},
{
  img: s4,
  title: 'Visualizations'
},
{
  img: s5,
  title: 'Machine Learning'
},
{
  img: s6,
  title: 'Machine Learning'
},


]
const OurServices = () => {
  return (
    <div className="our-service-main">
      <Container>

        <Grid container
          direction={'row'}
          columnSpacing={2}
          rowSpacing={2}
          className='our-services-container' >
          {
            services.map((card, index) => {
              const { img, title } = card
              return (
                <Grid item xs={12} sm={6} md={4} lg={2} key={index}
               
                  className='service-card-main' >
                  <div className='services-content-item' >
                    <div className='img-container'>
                      <img src={img} alt="title" />
                    </div>
                    <p className='service-card-title'>{title}
                    </p>
                  </div>
                </Grid>
              )
            }

            )
          }

        </Grid>
      </Container>

    </div>
  )
};

export default OurServices;
