import React from 'react'

function MenuItemCard({src}) {
  return (
    <div className='w-[90%] h-[28vh] bg-sky-50 flex items-center justify-between'>
        <div className="relative w-[20%] h-[90%] bg-cover bg-center rounded-lg" 
               style={{ backgroundImage: `url(${src})` }}>
        </div>
        <div>
            <p>Mixed Tandoori Grill</p>
            <p>A mix of tandoori chicken, chicken tikka, sheek kabob and shrimp cooked in the tandoor.</p>
            <div>
                <div className='flex items-center'>
                    <p className='text-md font-medium text-slate-700'>{4.5}</p>
                    <span className='text-2xl text-green-500 ml-1'> &#9733;</span>
                </div>
                <p>Delivery in 35mins</p>
            </div>
        </div>
        <div>
            <p>$13.99</p>
            <button className='bg-slate-950 text-white text-sm px-3 py-1 rounded-md font-medium'>
                Add to Cart
            </button>
        </div>
    </div>
  )
}

export default MenuItemCard;