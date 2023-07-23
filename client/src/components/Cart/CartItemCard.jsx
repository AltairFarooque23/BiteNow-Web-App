import React from 'react'

function CartItemCard({name,type,price}) {
  return (
    <div className='w-full px-8 my-4 flex items-center justify-between' >
        <span className='w-[5%] font-extrabold text-red-600'>
            •
        </span>
        <p className='w-[65%] text-sm ml-3'>{name}</p>
        <div className='w-[20%] flex items-center justify-evenly border-2'>
            <button className=''>-</button>
            <p className='text-sm font-medium text-green-400'> 1 </p>
            <button className='text-green-400'>+</button>
        </div>
        <p className='w-[10%] text-sm font-medium text-slate-400 ml-8'>${price}</p>
    </div>
  )
}

export default CartItemCard;