import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
// assets
import GoogleICon from "../Assets/Google.png";
import Facebook from "../Assets/meta.png";

import { User,Key ,Mobile} from 'iconsax-react';
// components
import FormField from '../components/Forms/FormField';


function SignIn() {
      const navigate = useNavigate()
      const [formData,setFormData] = useState({
              email : "",
              password : ""
      })
      const handleInputChange =(name , value) =>{
            setFormData({...formData, [name]: value})
            }
      const navToSignUp = ()=>{
            navigate("/signup")
      }
      return (
        <div className='w-full h-[100vh] flex items-center justify-center'>
            <div className='w-[30%] h-[90%] border-2 rounded-xl bg-white shadow-xl flex flex-col items-center'>
                <p className='text-2xl font-bold mt-10'> <span className='text-green-400'>Welcome</span> Back!</p>
                <p className='text-center w-[75%] font-medium text-slate-500 text-sm mt-6'>Sign in to your Bitenow account and continue your food adventure</p>
                <div className='w-[90%] flex justify-evenly mt-6'>
                    <button className='w-[10vw] h-[5vh] border-gray-200 border-2 rounded-md flex justify-center items-center shadow-sm'>
                        <img src={GoogleICon} alt="" width={18}/>
                        <p className='text-lg font-medium ml-2'>Google</p>
                    </button>
                    <button className='w-[10vw] h-[5vh] border-gray-200 border-2 rounded-md flex justify-center items-center shadow-sm'>
                      <img src={Facebook} alt="" width={20}/>
                      <p className='text-lg font-medium ml-2'>
                        Facebook
                      </p>
                    </button>
                </div>
                <button className='w-[75%] h-[4.5vh] mt-4 text-sm font-medium flex items-center justify-center bg-stone-100 border-2 border-slate-200 rounded-lg'>
                Sign in with OTP <Mobile size={20} className='ml-3' />
                </button>
                <form action="" className='w-[75%] mt-10 flex flex-col items-center'>
                          <FormField name={"Email"}
                                    type={'email'} 
                                    placeholder={'Example123@domain.com'}
                                    icon={ <User /> }
                                    error={""}
                                    handleInput={handleInputChange}
                                    />
                          <FormField name={"Password"}
                                    type={'password'} 
                                    placeholder={'********'}
                                    icon={ <Key /> }
                                    error={""}
                                    handleInput={handleInputChange}
                                    />
                          <div className='w-full flex items-center justify-between'>
                            <span></span>
                            <p className='text-sm text-sky-500 font-medium'>forgot password ?</p>
                          </div>
                    <button className='w-[75%] h-[5vh] text-white bg-slate-950 rounded-lg shadow-xl mt-8'>
                            Sign In and Order
                    </button>
                    <p className='my-4 font-medium'>or</p>
                    <p className='text-sm font-medium text-gray-500'> Don’t have an acount  
                            <span onClick={navToSignUp} className='text-green-400 ml-2 underline cursor-pointer'>Create one</span>
                    </p>
                </form>
            </div>
        </div>
      )
}

export default SignIn;