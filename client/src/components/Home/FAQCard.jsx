import React, { useState } from 'react'

function FAQCard({question, answer}) {
  const [cardClicked ,setCardClicked] = useState(false)

  const handleCicked = () =>{
        setCardClicked(!cardClicked)
  }
  return (
   <div className='w-[65%] flex flex-col items-center my-1 cursor-pointer' onClick={handleCicked}>
      <div className='w-full h-[7vh] flex items-center justify-between bg-slate-200 rounded-md'>
          <p className='text-lg font-medium ml-8 text-slate-600'> {question} </p>
          <p className='text-3xl text-slate-400 mr-8'>+</p>
      </div>
      <div className={`w-full bg-slate-50 px-8 py-3 text-slate-600 rounded-b-md ${cardClicked ?'' : 'hidden'}`}>
          {answer}
      </div>
   </div>
  )
}

export default FAQCard;