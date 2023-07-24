import React from 'react'
import deliveryAva from "../../Assets/delivery.png";
import phone from "../../Assets/phone-call.png"
function DeliveryGuyCard() {
  return (
    <div className='w-[90%] h-[10vh] flex items-center shadow-lg rounded-lg border-2 border-slate-100 bg-white'>
        <img className='mx-4' src={deliveryAva} alt="" width={34}/>
        <div className='h-[80%] flex flex-col items-start justify-evenly'>
            <p className='text-sm text-sky-500'>Your order will be delivered by</p>
            <p className=' font-medium'>S. Nick</p>
        </div>
        <div className='flex flex-col items-center mx-10'>
            <p className='text-xs font-bold'>Est. Time</p>
            <p className='font-bold text-slate-400'>In 35 Mins</p>
        </div>
        <img className='' src={phone} alt="" width={34}/>
    </div>
  )
}

export default DeliveryGuyCard;