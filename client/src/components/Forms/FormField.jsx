import React from 'react'

function FormField({icon,type, placeholder, error, handleInput, value ,name}) {
  return (
    <div className='w-full h-[10vh] flex flex-col items-start justify-evenly'>
      <div className='w-[100%] flex items-center'>
          <div className='absolute ml-4'>
            {icon}
          </div>
          <input className='w-full h-[5.5vh] bg-slate-100 pl-12 rounded-md outline-none border-2 border-slate-200'
                type={type} 
                placeholder= {placeholder}
                name={name}
                onChange={(e)=>{handleInput(e.target.name,e.target.value)}}/>
      </div>
      <p className='text-sm font-medium text-red-500 ml-2'> 
        {error}
      </p>
    </div>
  )
}

export default FormField;