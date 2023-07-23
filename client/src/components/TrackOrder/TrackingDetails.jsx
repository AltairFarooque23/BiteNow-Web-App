import React from 'react'

function TrackingDetails({title,descr}) {
  return (
    <div className='w-[60%] h-[10vh] flex flex-col items-start justify-evenly'>
        <p className='text-md font-semibold'>
            {title}
        </p>
        <p className='text-sm text-slate-400'>
            {descr}
        </p>
    </div>
  )
}

export default TrackingDetails