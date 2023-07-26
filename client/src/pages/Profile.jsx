import React from 'react'

import Cart from "../Assets/cart.png";
import User from "../Assets/user.png";
import phone from "../Assets/phone-call.png";
import email from "../Assets/email.png";
import edit from "../Assets/edit.png";

// components
import Footer from '../components/common components/Footer';
import NavBar from '../components/Navigation components/NavBar';

import Orders from "../Assets/shopping-bag.png"
import FaQ from "../Assets/chat.png"
import Help from "../Assets/faq.png"
import settings from "../Assets/gear.png"

function Profile() {
  return (
    <div className='w-full flex flex-col items-center overflow-x-hidden scroll-smooth'>
            {/* nav bar */}
            <NavBar showSeachBar={false}/>
            <div className='w-full px-28 my-10'>
                <p className='text-2xl font-medium my-4'>Altair Farooque</p>
                <div className='w-full flex items-center justify-between px-4'>
                    <div className='flex flex-col items-start'>
                        <div className='flex items-center my-3'>
                            <img src={phone} alt="" width={20}/>
                            <p className='ml-3 text-sm font-medium text-slate-600'>+123 456 7890</p>
                        </div>
                        <div className='flex items-center'>
                            <img src={email} alt="" width={20}/>
                            <p className='ml-3 text-sm font-medium text-slate-600'>Example@gmail.com</p>
                        </div>
                    </div>
                    <div className='flex flex-col items-end'>
                        <button className='flex items-center mb-3'>
                            <img src={edit} alt="" width={20}/>
                            <p className='text-lg font-semibold ml-3'>Edit</p>
                        </button>
                        <p className='text-sm font-medium text-slate-400'>Hyderabad , India</p>
                    </div>
                </div>
            </div>
            <div className='w-full px-28 flex items-start justify-between mb-24'>
                <div className='w-[25%] h-[60vh] bg-stone-100 flex items-center justify-center rounded-lg'>
                    <div className='w-full h-full flex flex-col items-center justify-center'>
                        <div className='w-[50%] h-[80%] flex flex-col items-start justify-evenly text-lg font-medium'>
                            <button className='cursor-pointer hover:text-sky-500 flex items-center'>
                                <img className='mr-3' src={Orders} alt="" width={24}/> Orders
                            </button>
                            <button className='cursor-pointer hover:text-sky-500 flex items-center'>
                                <img className='mr-3' src={FaQ} alt="" width={24} /> FAQ
                            </button>
                            <button className='cursor-pointer hover:text-sky-500 flex items-center'>
                               <img className='mr-3' src={Help} alt="" width={24}/> Help
                            </button>
                            <button className='cursor-pointer hover:text-sky-500 flex items-center'>
                               <img className='mr-3' src={settings} alt="" width={24}/> Settings
                            </button>
                        </div>
                    </div>
                </div>
                <div className='w-[70%] h-[100vh] bg-stone-100 flex items-center rounded-lg'>
                    menu content
                </div>
            </div>
        <Footer />
    </div>
  )
}

export default Profile;