import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Slider.css';

const ImageSlider = () => {
  return (
    <Carousel className='carousel' showArrows={true} autoPlay={true} interval={2500} stopOnHover={false} transitionTime={500} infiniteLoop={true} showThumbs={true} showIndicators={false} showStatus={false}>
      <div>
        <img src="./images/carousel5.jpg" alt="1" />
      </div>
      <div>
        <img src="./images/carousel6.jpg" alt="2" />
      </div>
      <div>
        <img src="./images/carousel7.jpg" alt="3" />
      </div>
      <div>
        <img src="./images/carousel8.jpg" alt="4" />
      </div>
      <div>
        <img src="./images/carousel9.jpg" alt="5" />
      </div>
    </Carousel>
  );
};

export default ImageSlider;