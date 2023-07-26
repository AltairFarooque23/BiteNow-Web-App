import React from 'react'

// assets
import MapPin from "../Assets/pin.png";
import SearchLens from "../Assets/search.png";
import Cart from "../Assets/cart.png";
import User from "../Assets/user.png";
import menuitem from "../Assets/menuitem.png"
import MenuListIcon from "../Assets/menulist.png"

import CategoryCarousals from '../components/Home/CategoryCarousals';
import MenuItemCard from '../components/Restaurant/MenuItemCard';
import Footer from "../components/common components/Footer"
import NavBar from '../components/Navigation components/NavBar';


import { mock } from '../MockData';


function Restaurant() {
  return (
    <div className='w-full flex flex-col items-center overflow-x-hidden scroll-smooth'>
        {/* nav bar */}
        <NavBar showSeachBar={true}/>
        {/* Restaurant info */}
        <div className='w-full px-36 flex items-center my-6 bg-sky-50'>
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

        <div className='w-full flex flex-col items-center px-36 mb-28'>
              <div className='w-full mb-14'>
                <p className='text-2xl font-semibold'>
                    Restuarant's Menu
                </p>
              </div>
              <span className='w-full h-[2px] bg-slate-200 mb-4'></span>
              <div className='w-full mb-12'>
                  <p className='text-xl font-medium text-zinc-500'>Main Course</p>
              </div>
              {( mock.Home.TrendingItems.dishes?.map((item, index) =>{
                      return <MenuItemCard  key={index}
                                            name={item.Name}
                                            src={menuitem}
                                            price={item.Price}
                                            orders={1.5}
                                            descr={item.Description}
                                            ratings={item.Rating}
                                            />
                    }))
              }
        </div>
        <div className='fixed bottom-2 w-full h-max flex flex-col items-center mb-12 z-30'>
           <button className=' bg-slate-950 flex items-center text-white px-6 py-2 rounded-md shadow-md'>
               Restuarant's Menu <img className='ml-4' src={MenuListIcon} alt="" width={24} />
           </button>
        </div>
        <Footer />
    </div>
  )
}

export default Restaurant;