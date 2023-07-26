import React, { useEffect } from 'react'

function SearchResultsContainer({results,locations}) {

    useEffect(()=>{

    },[results,locations])
  return (
    <div className='w-full flex items-start justify-between'>
        <div className={`absolute left-[19.5%] w-[12%] h-[40vh] border-2 border-slate-100 bg-white shadow-lg rounded-md ${locations === null ? 'hidden' : ''}`}>
            location container
        </div>
        <div className={`absolute left-[31%] w-[36%] h-[60vh] border-2 border-slate-100 bg-white shadow-lg rounded-md ${results === null ? 'hidden' : ''}`}>
            search results container
        </div>
    </div>
  )
}

export default SearchResultsContainer