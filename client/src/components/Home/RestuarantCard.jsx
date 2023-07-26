import React from 'react';
import { useNavigate } from 'react-router-dom';

function RestuarantCard({src, name , categories, price ,ratings, deliveryTime,isCarouselInteracting}) {
    const navigate = useNavigate()
    
    const navToRestuarant = (event)=>{
        if (!isCarouselInteracting) {
        event.stopPropagation()
        navigate('/restuarant')
        }
    }
    return (
        <div onClick={navToRestuarant} className='w-[20vw] h-[50vh] bg-white border-2 rounded-lg mx-4 my-4 cursor-pointer scroll-smooth'>
            <div className="w-full h-[50%] bg-cover bg-center rounded-t-lg" 
                        style={{ backgroundImage: `url(${src})` }}>
                    </div>
            <div className='w-full h-[30%] flex flex-col items-start justify-evenly pl-4 mt-2'>
                <p className='text-xl font-bold'>
                    {name}
                </p>
                <div className='flex items-center'>
                    <p className='text-md font-medium text-slate-700'>{ratings}</p>
                    <span className='text-2xl text-green-500 ml-1'> &#9733;</span>
                </div>
                <p className='text-sm text-gray-500'>
                    {categories}
                </p>
            </div>
            <div className='w-full h-[16%] px-4 flex items-center justify-between'>
                <p className=' text-md font-semibold'>
                    {price} <span className='text-slate-400 font-medium text-xs ml-1'>FOR EACH</span> 
                </p>
                <p className='w-[28%] text-xs font-medium text-slate-500 bg-slate-100 py-1 flex items-center justify-center rounded-md'>
                    {deliveryTime} MINS
                </p>
            </div>
        </div>
    )
}

export default RestuarantCard;