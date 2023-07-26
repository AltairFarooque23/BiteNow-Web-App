import React from 'react';
import { useNavigate } from 'react-router-dom';

function OTASingUp() {
    const navigate = useNavigate()

    const navtoVerify = () =>{
         navigate('/otpverify')
    }
    return (
        <div className='w-full h-[100vh] flex flex-col items-center justify-center' >
            <div className='w-[25%] h-[50%] flex flex-col items-center shadow-md border-slate-100 border-2 rounded-lg'>
                <div className='my-8'>
                    <p className='text-xl font-bold'><span className='text-green-400'>Bite</span>Now</p>
                </div>
                <p className='text-md font-medium text-slate-950'>Sign Up with Phone OTP</p>
                <div className='w-full h-[40%] px-4 flex items-center justify-evenly'>
                    <input type="tel" placeholder='+91' maxLength={3} className='w-[15%] h-[5vh] bg-slate-100 rounded outline-none text-center' />
                    <input type='text' placeholder='1234 - 567 - 890 ' maxLength={10} className='w-[60%] h-[5vh] bg-slate-100 outline-none rounded pl-4'  />
                </div>
                <button onClick={navtoVerify} className='w-[76%] h-[5vh] rounded-md text-white font-medium bg-slate-950'>Send OTP</button>
            </div>
        </div>
    )
}

export default OTASingUp;