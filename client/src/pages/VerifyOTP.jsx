import React from 'react'

function VerifyOTP() {
  return (
    <div className='w-full h-[100vh] flex flex-col items-center justify-center' >
        <div className='w-[30%] h-[45%] flex flex-col items-center justify-evenly shadow-md border-slate-100 border-2 rounded-lg'>
            <p className='text-md font-medium text-gray-500'>Verify OTP sent to your phone</p>
            <div className='w-full flex items-center justify-evenly'>
                <input type="text" maxLength={1} className='w-[3vw] h-[7vh] bg-slate-100 outline-green-400 text-center rounded-lg'/>
                <input type="text" maxLength={1} className='w-[3vw] h-[7vh] bg-slate-100 outline-green-400 text-center rounded-lg'/>
                <input type="text" maxLength={1} className='w-[3vw] h-[7vh] bg-slate-100 outline-green-400 text-center rounded-lg'/>
                <input type="text" maxLength={1} className='w-[3vw] h-[7vh] bg-slate-100 outline-green-400 text-center rounded-lg'/>
                <input type="text" maxLength={1} className='w-[3vw] h-[7vh] bg-slate-100 outline-green-400 text-center rounded-lg'/>
                <input type="text" maxLength={1} className='w-[3vw] h-[7vh] bg-slate-100 outline-green-400 text-center rounded-lg'/>
            </div>
            <button className='w-[60%] h-[5.5vh] text-white bg-slate-950 rounded-md'>
                 Resend (0:59)
            </button>
        </div>
    </div>
  )
}

export default VerifyOTP;