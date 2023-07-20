import React from 'react';

import Facebook from "../../Assets/Footer/facebook.png"
import github from "../../Assets/Footer/github.png"
import twitter from "../../Assets/Footer/twitter.png"
import insta from "../../Assets/Footer/instagram.png"

function Footer() {
  return (
    <div className='w-full h-48 bg-gray-950 text-white flex items-center justify-between px-10'>
        <div className='ml-4'>
            <p className='text-2xl font-extrabold'><span className='text-green-400'>Bite</span>Now</p>
        </div>
        <p className='text-sm text-slate-400'>Copyright @ 2023 D&D by AltairFarooque </p>
        <div className=' w-72 flex items-center justify-evenly mr-8'>
            <img className='rounded-full bg-white cursor-pointer' src={Facebook} alt="" width={34} />
            <img className='rounded-full bg-white cursor-pointer'  src={github} alt="" width={34} />
            <img className='rounded-full bg-white cursor-pointer'  src={twitter} alt="" width={34} />
            <img className='rounded-full bg-white cursor-pointer'  src={insta} alt="" width={34} />
        </div>
    </div>
  )
}

export default Footer;