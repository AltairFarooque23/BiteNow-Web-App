import React from 'react';
import Slider from "react-slick"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Banner1 from "../../Assets/Carousal/banner1.jpg";
import Banner2 from "../../Assets/Carousal/banner2.jpg";
import Banner3 from "../../Assets/Carousal/banner3.jpg";
import Banner4 from "../../Assets/Carousal/banner4.jpg";
import Banner5 from "../../Assets/Carousal/banner5.jpg";


function BannersCarousal() {
  const settings = {
     dots: true,
     infinite : true,
     speed: 600,
     slidesToShow : 3,
     slidesToScroll:1,
     autoplay : true,
     autoplaySpeed : 2200
  }
  return (
    <div className='w-[125vw] h-[65vh] mt-8'>
      <Slider {...settings}>
         <div className='px-4 outline-none'>
            <img className='rounded-xl' src={Banner1} alt="" height={300}/>
         </div>
         <div className='px-4 outline-none'>
            <img className='rounded-xl' src={Banner2} alt="" height={300}/>
         </div>
         <div className='px-4 outline-none'>
            <img className='rounded-xl' src={Banner3} alt="" height={300}/>
         </div>
         <div className='px-4 outline-none'>
            <img className='rounded-xl' src={Banner4} alt="" height={300}/>
         </div>
         <div className='px-4 outline-none'>
            <img className='rounded-xl' src={Banner5} alt="" height={300}/>
         </div>
      </Slider>
    </div>
  )
}

export default BannersCarousal;