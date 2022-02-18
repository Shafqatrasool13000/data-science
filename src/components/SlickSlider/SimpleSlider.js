import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import s1 from '../../assets/1.svg';
import s2 from '../../assets/2.svg';
import s3 from '../../assets/3.svg';
import s4 from '../../assets/4.svg';
import s5 from '../../assets/5.svg';
import s6 from '../../assets/6.svg';

const SimpleSlider=()=>  {
  
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 4,
      initialSlide: 0,
      arrows : false,
      variableWidth : false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
        
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
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
        title: 'Scheduler'
      },
      ]
    return (
      <div >
        
        <Slider {...settings} className="our-services-container">
        {
         services.map((card, index) => {
           const { img, title } = card
           return (
             <div style={{marginRight:'2rem'}} key={index}               
               className='service-card-main' >
               <div className='services-content-item' >
                 <div className='img-container'>
                   <img src={img} alt="title" />
                 </div>
                 <p className='service-card-title'>{title}
                 </p>
               </div>
             </div>
           )
         })
        }
        </Slider>
      </div>
      )
    
  
}


export default SimpleSlider



