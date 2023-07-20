import React ,{useRef} from 'react'
import Slider from "react-slick"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// components
import RestuarantCard from './RestuarantCard';
import ItemCard from './ItemCard';
import MostOrderedCard from '../Restaurant/MostOrderedCard';

// assets 
import rest1 from "../../Assets/Restaurants/dominosPizza.jpg";
import dish1 from "../../Assets/biryani.jpg"
import mostOrderedDish from "../../Assets/mostdish.png"
// import leftArrow from "../../Assets/leftarrow.png"
// import rightArrow from "../../Assets/rightarrow.png"

function CategoryCarousals({data,title,type}) {

  const sliderRef = useRef(null);

  //   const slideToNextSlide = () =>{
  //         sliderRef.current.slickNext()
  //   }

  //   const slideToPrevSlide = () =>{
  //       sliderRef.current.slickPrev()
  //   }

  const settings = {
    dots: false,
    infinite : false,
    speed: 700,
    slidesToShow : data.type === 0 ? 3.5 : data.type === 1 ? 3.7 : 5.0,
    slidesToScroll : 1
  }

  return (
    <div className='w-full h-[70vh] flex flex-col items-start mt-8 px-36'>
        <p className='text-2xl font-semibold mb-10'>
            {title}
        </p>
        <div className='w-full relative'>
              {/* <img className='absolute left-[-1vw] top-[45%] z-[2] cursor-pointer  rounded-full shadow-lg' onClick={slideToPrevSlide} src={leftArrow} alt="" width={44}/> */}
              <Slider {...settings} ref={sliderRef}>
                  {/* restaurant card */}
                  { type === 0 &&
                    ( data.restaurants?.map((item, index) =>{
                      return <RestuarantCard  key={index}
                                              name={item.name}
                                              src={rest1}
                                              ratings={item.rating}
                                              categories={item.catLog}
                                              price={item.cost}
                                              deliveryTime={item.deliveryTime}/>
                    }))
                  }
                  {/* item cards */}
                  { type === 1 &&
                   ( data.dishes?.map((item, index) =>{
                    return <ItemCard  key={index}
                                      name={item.Name}
                                      src={dish1}
                                      price={item.Price}
                                      ratings={item.Rating}
                                      type={item.Category}
                                      descr={item.Description}/>
                  }))
                  }
                  {/* most ordered cards */}
                  {
                    type === 2 && 
                    ( data.dishes?.map((item, index) =>{
                      return <MostOrderedCard  key={index}
                                        name={item.Name}
                                        src={mostOrderedDish}
                                        price={item.Price}
                                        orders={1.5}
                                        ratings={item.Rating}
                                        />
                    }))
                  }
                  
                  
              </Slider>
              {/* <img className='absolute right-[-2vw] top-[45%] z-[2] cursor-pointer rounded-full shadow-lg' onClick={slideToNextSlide} src={rightArrow} alt="" width={44}/> */}
        </div>
    </div>
  )
}

export default CategoryCarousals;