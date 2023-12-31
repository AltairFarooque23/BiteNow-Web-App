import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// assets
import GoogleICon from "../Assets/Google.png";
import Facebook from "../Assets/meta.png";

// components
import FormField from '../components/Forms/FormField';

// icons
import { User,Key ,CardPos ,Mobile} from 'iconsax-react';
import { validateFrom } from '../utils/FormValidations';



function SignUp() {
    //   there will be some kind of sign up options
    //   - OTP Phone
    //   - Email
    //   - OAuth Google or Meta
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
      username: '',
      email: '',
      password: '',
    });
    const [formErrors,setformErrors] = useState({
      username: '',
      email: '',
      password: '',
    })
    

    const handleInputChange =(name , value) =>{
        setFormData({ ...formData, [name]: value });
    }
    const nullFormErrorOnFocus = (name) => {
      setformErrors({ ...formErrors, [name]: '' });
    }

    const validatingFormsBeforeSignUp = (event)=>{
      event.preventDefault();
      let validateCheck = validateFrom(formData,formErrors,setformErrors);
      if(!validateCheck){
        AxiosActionUserRegister()
      }
    }
    // this will store the JWT token for Authorization
    // then will navigate to home page
    // const onUserRegister = (token ,userID) =>{
    //   sessionStorage.setItem("authToken" ,token);
    //   // redirecting user to home page
    //   navigate("/",{replace:true})
    // }

    const AxiosActionUserRegister = async () =>{
          console.log("this will send form data and get response from the server")
    }
    
    // this will redirect to sign in page
    const navToSignin = ()=>{
         navigate("/signin")
    }

    // signup with Google
    const AxiosSignUpWithGoogle = async (e)=>{
          e.preventDefault()
          window.location = "http://localhost:8000/auth/google";
    }

    // signup with facebook
    const AxiosSignUpWithFacebook = async (e)=>{
          e.preventDefault()
          window.location = "http://localhost:8000/auth/facebook";

    }

    return (
      <div className="w-full h-[100vh] flex items-center">
          <div className="w-[40%] h-full flex flex-col items-center">
              {/* this is the sign up form */}
              <p className='text-2xl font-bold mt-16'>Create an <span className='p-0 text-green-400'>Account</span></p>
              <p className='text-m font-medium text-slate-400 mt-6 relative'>
                Sign up now to enjoy a seamless food delivery experience
              </p>
              <div className='w-[75%] flex justify-evenly mt-6'>
                  <button onClick={AxiosSignUpWithGoogle} className='w-[13vw] h-[5vh] border-gray-200 border-2 rounded-md flex justify-center items-center shadow-sm'>
                      <img src={GoogleICon} alt="" width={18}/>
                      <p className='text-lg font-medium ml-2'>Google</p>
                  </button>
                  <button onClick={AxiosSignUpWithFacebook} className='w-[13vw] h-[5vh] border-gray-200 border-2 rounded-md flex justify-center items-center shadow-sm'>
                    <img src={Facebook} alt="" width={20}/>
                    <p className='text-lg font-medium ml-2'>
                      Facebook
                    </p>
                  </button>
              </div>
              <form onSubmit={validatingFormsBeforeSignUp} className='w-[68%] mt-12 flex flex-col items-center'>
              <FormField name={"username"}
                              type={'text'} 
                              placeholder={'Name'}
                              icon={ <User /> }
                              error={formErrors.username}
                              focusAfterError={nullFormErrorOnFocus}
                              handleInput={handleInputChange}
                              />
                    <FormField name={"email"}
                              type={'email'} 
                              placeholder={'Example123@domain.com'}
                              icon={ <CardPos /> }
                              error={formErrors.email}
                              focusAfterError={nullFormErrorOnFocus}
                              handleInput={handleInputChange}
                              />
                    <FormField name={"password"}
                              type={'password'} 
                              placeholder={'********'}
                              icon={ <Key /> }
                              error={formErrors.password}
                              focusAfterError={nullFormErrorOnFocus}
                              handleInput={handleInputChange}
                              />
                  <button className='w-[75%] h-[5vh] text-white bg-slate-950 rounded-lg shadow-lg mt-8'>
                      Create Account
                  </button>
              </form>
                  <p className='my-4 text-lg font-medium text-slate-600'>
                    or
                  </p>
              <button className='w-[52%] h-[5vh] text-md font-medium flex items-center justify-center bg-stone-100 border-2 border-slate-200 rounded-lg'>
                  Quick Sign Up with Phone <Mobile size={20} className='ml-3' />
              </button>
              <p className='text-md mt-4 font-medium text-slate-600'>
              Already have an account <span onClick={navToSignin} className='text-green-500 decoration-green-500 underline cursor-pointer'>Sign in</span>
              </p>
          </div>
          <div className="w-[60%] h-full bg-[url(~Assets/SignUpBanner.jpg)] bg-cover bg-center">
              {/* this is the banner section with Quote */}
              <div className='w-full h-full flex flex-col justify-start items-start bg-[rgba(0,0,0,0.3)]'>
                <p className='w-[80%] text-7xl text-white font-bold ml-16 mt-14'>
                    Enjoy Restaurant Quality Food in the Comfort of Your Home
                </p>
              </div>
          </div>
      </div>
  )
}

export default SignUp;