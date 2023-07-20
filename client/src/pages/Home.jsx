import React from 'react';

// assets
import MapPin from "../Assets/pin.png";
import SearchLens from "../Assets/search.png";
import Cart from "../Assets/cart.png";
import User from "../Assets/user.png";

import { mock } from '../MockData';

// Componnets
import BannersCarousal from '../components/Home/BannersCarousal';
import CategoryCarousals from '../components/Home/CategoryCarousals';
import MostFaqComponent from '../components/Home/MostFaqComponent';
import Footer from '../components/common components/Footer';

function Home() {
  return (
    <div className='w-full flex flex-col items-center overflow-x-hidden scroll-smooth'>
        {/* nav bar */}
        <nav className='w-full h-[12vh] flex items-center justify-evenly px-12'>
          {/* brand name */}
          <div className='w-[15%] flex items-center justify-center'>
             <p className='text-2xl font-bold'>
              <span className='text-green-400'>Bite</span>Now
             </p>
          </div>
          {/* search bar */}
          <div className='w-[50%] h-full flex items-center justify-center'>
            <div className='w-full h-[58%] bg-slate-100 flex items-center  rounded-md relative'>
                 <img className='ml-4' src={MapPin} alt="" width={20}/>
                 <input className = 'w-[15%] bg-slate-100 mx-4 outline-none' 
                        type="text" placeholder='Hyderabad'/>
                 <div className='absolute w-[30%] h-[40vh] z-2 border-2 top-[8vh] bg-white shadow-md rounded-md hidden'>
                     location query here
                 </div>
                 <span className='h-[60%] w-[2px] bg-slate-300'></span>
                 <input className='w-[65%] mx-4 bg-slate-100 outline-none'
                        placeholder="“Search for the best biryani's in your city”"
                 type="text" />
                 <div className='absolute w-[75%] h-[40vh] z-2 border-2 top-[8vh] left-[25%] bg-white shadow-md rounded-md hidden'>
                    Search results will be populated in this container
                 </div>
                 <img src={SearchLens} alt="" width={20}/>
            </div>
          </div>
          <div className='w-[10%] h-full flex items-center relative' >
             <div className='relative flex items-center justify-center'>
                <img src={Cart} alt="" width={44} />
                <p className='absolute mt-1 font-semibold text-green-500'>0</p>
             </div>
             <p className='text-xl font-semibold ml-2'>Cart</p>
          </div>
          <div className='w-[15%] h-full flex items-center justify-start'>
            <p className='text-lg text-slate-800 font-medium mr-4'>Altair Farooque</p>
            <img src={User} alt="" width={36} />
          </div>
        </nav>

        {/* banner auto moving carousal */}
        <BannersCarousal />
        <CategoryCarousals  data = {mock.Home.PopularRestaurants} title={mock.Home.PopularRestaurants.title} type={mock.Home.PopularRestaurants.type} />
        <CategoryCarousals  data = {mock.Home.TrendingItems} title={mock.Home.TrendingItems.title} type={mock.Home.TrendingItems.type} />
        <CategoryCarousals  data = {mock.Home.PopularRestaurants} title={mock.Home.PopularRestaurants.title}  type={mock.Home.PopularRestaurants.type}/>
        <CategoryCarousals  data = {mock.Home.TrendingItems} title={mock.Home.TrendingItems.title} type={mock.Home.TrendingItems.type} />
        <MostFaqComponent />
        <Footer />
    </div>
  )
}

export default Home;