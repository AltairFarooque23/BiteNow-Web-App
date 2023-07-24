import React from 'react'
import Cart from "../Assets/cart.png";
import User from "../Assets/user.png";

import Footer from '../components/common components/Footer';
import TrackingDetails from '../components/TrackOrder/TrackingDetails';
import DeliveryGuyCard from '../components/TrackOrder/DeliveryGuyCard';
import TrackingMap from '../components/TrackOrder/TrackingMap';

function TrackOrder() {
  return (
    <div className='w-full flex flex-col items-center overflow-x-hidden scroll-smooth  bg-sky-50'>
          {/* nav bar */}
          <nav className='w-full h-[12vh] flex items-center justify-between px-12 bg-white z-20'>
            {/* brand name */}
            <div className='w-[15%] flex items-center justify-center'>
              <p className='text-2xl font-bold'>
                <span className='text-green-400'>Bite</span>Now
              </p>
            </div>
            <div className='w-[30%] flex items-center justify-evenly'>
                  <div className='h-full flex items-center relative' >
                      <div className='relative flex items-center justify-center'>
                          <img src={Cart} alt="" width={44} />
                          <p className='absolute mt-1 font-semibold text-green-500'>0</p>
                      </div>
                      <p className='text-xl font-semibold ml-2'>Cart</p>
                  </div>
                  <div className='h-full flex items-center justify-start'>
                      <p className='text-lg text-slate-800 font-medium mr-4'>Altair Farooque</p>
                      <img src={User} alt="" width={36} />
                  </div>
            </div>
          </nav>
          {/* track order */}
          <div className='w-full flex items-start justify-evenly px-24 my-20 relative'>
             <div className='w-[40%] h-[90vh] bg-white flex flex-col items-center shadow-md rounded-lg relative overflow-hidden'>
                  <TrackingMap />
                  <div className='w-full flex items-center justify-center absolute bottom-8 z-20'>
                    <DeliveryGuyCard />
                  </div>
                  
             </div>
             <div className='w-[35%] h-[120vh] bg-white flex flex-col items-center px20 shadow-lg rounded-lg'>
                  <div className='w-full h-[80%] flex flex-col items-center justify-evenly'>
                        <TrackingDetails title = {"Order Recieved"} descr = {"Order recieved by restuarant order yet to be comfirmed"} />
                        <TrackingDetails title = {"Order Confirmed"} descr = {"Order recieved by restuarant order yet to be comfirmed"} />
                        <TrackingDetails title = {"Preparing your order"} descr = {"Order recieved by restuarant order yet to be comfirmed"} />
                        <TrackingDetails title = {"Order picked"} descr = {"Order recieved by restuarant order yet to be comfirmed"} />
                        <TrackingDetails title = {"Order Delivered"} descr = {"Order recieved by restuarant order yet to be comfirmed"} />
                  </div>
                  <button className='w-[80%] h-[7vh] text-white font-medium text-lg mt-10 bg-slate-950 rounded-lg shadow-lg'>Cancel</button>
             </div>
          </div>
          <Footer />
    </div>
  )
}

export default TrackOrder;