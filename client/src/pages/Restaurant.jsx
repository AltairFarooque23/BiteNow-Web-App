import React from 'react'

// assets
import MapPin from "../Assets/pin.png";
import SearchLens from "../Assets/search.png";
import Cart from "../Assets/cart.png";
import User from "../Assets/user.png";
import menuitem from "../Assets/menuitem.png"

import CategoryCarousals from '../components/Home/CategoryCarousals';
import MenuItemCard from '../components/Restaurant/MenuItemCard';

import { mock } from '../MockData';


function Restaurant() {
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
        {/* Restaurant info */}
        <div className='w-full px-36 flex items-center my-6'>
            <div className='w-full mx-32 my-8'>
                <p className='text-2xl font-bold my-2'>
                    Haveli Restaurant
                </p>
                <p className='text-sm text-slate-700 my-3'>
                    North Indian, Chinese, Seafood, Desserts
                </p>
                <p className='text-slate-600 my-3'>
                    Haveli is an Indian restaurant offering a variety of dishes with rich flavors and appealing textures. The menu includes a broad range of choices, from appetizers to main dishes, desserts, and beverages
                </p>
                <div className='w-full flex items-center'>
                    <div className='w-[15%] flex items-center'>
                            <p className='text-md font-medium text-slate-700'>4.3</p>
                            <span className='text-2xl text-green-500 ml-1'> &#9733;</span>
                    </div>
                    <ul className='w-[45%] flex items-center justify-evenly'>
                        <li className='text-sm font-medium text-gray-400'>• in 25mins </li>
                        <li className='text-sm font-medium text-gray-400'>• $13 FOR EACH </li>
                        <li className='text-sm font-medium text-gray-400'>• 1.5k+ orders </li>
                    </ul>
                </div>
            </div>
        </div>
        <CategoryCarousals  data = {mock.Home.TrendingItems} title ={"Top Dishes"} type={1} />
        <CategoryCarousals  data = {mock.Home.TrendingItems} title ={"Most Ordered"} type={2} />

        <div className='w-full flex flex-col items-center px-36'>
              <div className='w-full mb-14'>
                <p className='text-2xl font-semibold'>
                    Restuarant's Menu
                </p>
              </div>
              <span className='w-full h-[2px] bg-slate-200 mb-4'></span>
              <div className='w-full mb-12'>
                  <p className='text-xl font-medium text-zinc-500'>Main Course</p>
              </div>
              <MenuItemCard src={menuitem} />
        </div>
    </div>
  )
}

export default Restaurant;