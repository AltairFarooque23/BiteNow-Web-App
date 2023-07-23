import React from 'react'

function MenuItemCard({src,name , descr, price, ratings}) {
  return (
    <div className='w-[80%] h-[22vh] bg-stone-100 flex items-center justify-evenly rounded-lg shadow-md my-4'>
        <div className="relative w-[18%] h-[85%] bg-cover bg-center rounded-lg" 
               style={{ backgroundImage: `url(${src})` }}>
        </div>
        <div className='w-[60%] h-[80%] px-6 flex flex-col items-start'>
            <p className='text-lg font-semibold mb-2'>{name}</p>
            <p className='text-md w-[80%] mb-5'>{descr}</p>
            <div className='w-[40%] flex items-center justify-between'>
                <div className='flex items-center'>
                    <p className='text-md font-medium text-slate-700'>{ratings}</p>
                    <span className='text-2xl text-green-500 ml-1'> &#9733;</span>
                </div>
                <p className='text-sm'>Delivery in 35mins</p>
            </div>
        </div>
        <div className='w-[17%] h-[80%] flex flex-col items-center justify-evenly'>
            <p className='text-lg font-medium'>${price}</p>
            <button className='bg-slate-950 text-white text-sm px-5 py-1 rounded-md font-medium'>
                Add to Cart
            </button>
        </div>
    </div>
  )
}

export default MenuItemCard;