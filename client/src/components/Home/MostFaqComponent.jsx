import React from 'react';

import FAQCard from './FAQCard';
import { mock } from '../../MockData';

function MostFaqComponent() {
  return (
    <div className='w-full px-36 mt-10 mb-24 flex flex-col items-center'>
      <div className='w-full mb-12'>
        <p className='text-2xl font-semibold mb-10'>Most Frequently asked Questions</p>
      </div>
      { mock.Home.MFAQs.map((item, index) =>{
         return <FAQCard key={index} question={item.Question} answer={item.Answer}/>
      })
      }
    </div>
  )
}

export default MostFaqComponent;