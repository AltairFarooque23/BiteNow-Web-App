import React from 'react'

function ItemCard({src,name , price,descr, ratings,type}) {
  return (
    <div className='relative w-[18vw] h-[50vh] bg-white border-2 rounded-lg mx-4 my-4 cursor-pointer scroll-smooth'>
          <div className="relative w-full h-[50%] bg-cover bg-center rounded-t-lg" 
               style={{ backgroundImage: `url(${src})` }}>
                <p className={`absolute bg-white right-2 bottom-2 px-2 py-[1px] rounded text-sm font-semibold ${type==='veg' ? 'text-sky-600' : 'text-red-600'}`}>
                  {type}
                </p>
          </div>
          <div className='w-full h-[20%] flex items-center justify-between'>
                <p className='text-xl font-bold ml-4'>{name}</p>
                <div className='flex items-center mr-4'>
                      <p className='text-sm font-medium text-slate-700'>{ratings}</p>
                      <span className='text-2xl text-green-500 ml-1'> &#9733;</span>
                </div>
          </div>
          <p className='w-full h-10 text-sm text-slate-500 px-4 truncate'>{descr}</p>
          <div className='w-full h-[18%] flex items-center justify-between px-4'>
             <p className='text-lg font-semibold'>${price} <span className='text-sm font-normal text-slate-400'>for each</span></p>
             <button className='bg-slate-950 text-white text-sm px-3 py-1 rounded-md font-medium'>
               Add to Cart
             </button>
          </div>
   
    </div>
  )
}

export default ItemCard;