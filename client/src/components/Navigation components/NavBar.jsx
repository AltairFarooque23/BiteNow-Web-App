import React,{useEffect} from 'react';
import io from "socket.io-client";
// assets
import MapPin from "../../Assets/pin.png";
import SearchLens from "../../Assets/search.png";
import Cart from "../../Assets/cart.png";
import User from "../../Assets/user.png";



function NavBar({showSeachBar , handleSearchBar, handleLocation}) {
  console.log('NavBar component rendered'); // Add this line
  // connected the socket to server end point
  const socket = io('http://localhost:8000/');
  // socket listening to events
  socket.on('connection', function() {
    console.log('Connected to server');
  });

  socket.on('found',(results)=>{
        console.log(results);
        handleSearchBar(results)
  })
  // sending search input and quering data
  const sendSearchQuery = (query) => {
        socket.emit('search',query);
        if(query===''){
          handleSearchBar(null)
        }
  };

  useEffect(() => {
    return () => {
      socket.disconnect();
      socket.off('found'); // Unsubscribe when the component unmounts
    };
  });

  return (
    <nav className={`w-full h-[12vh] flex items-center ${ showSeachBar ? "justify-evenly" : "justify-between"} px-12`}>
          {/* brand name */}
          <div className='w-[15%] flex items-center justify-center'>
             <p className='text-2xl font-bold'>
              <span className='text-green-400'>Bite</span>Now
             </p>
          </div>
          { showSeachBar === true ?
          <div className='w-[50%] h-full flex items-center justify-center'>
            <div className='w-full h-[58%] bg-slate-100 flex items-center  rounded-md relative'>
                 <img className='ml-4' src={MapPin} alt="" width={20}/>
                 <input className = 'w-[15%] bg-slate-100 mx-4 outline-none' 
                        type="text" placeholder='Hyderabad'
                        onChange={(e)=>{handleLocation(e.target.value)}}/>
                 <span className='h-[60%] w-[2px] bg-slate-300'></span>
                 <input className='w-[65%] mx-4 bg-slate-100 outline-none'
                        placeholder="“Search for the best biryani's in your city”"
                 type="text" onKeyDown={(e)=>{sendSearchQuery(e.target.value)}}/>
                 <img src={SearchLens} alt="" width={20}/>
            </div>
          </div> : '' }
          <div className='w-[30%] flex items-center justify-evenly'>
                <div className='h-full flex items-center relative' >
                    <div className='relative flex items-center justify-center'>
                        <img src={Cart} alt="" width={44} />
                        <p className='absolute mt-1 font-semibold text-green-500'>0</p>
                    </div>
                    <p className='text-xl font-semibold ml-2'>Cart</p>
                </div>
                <div className='h-full flex items-center justify-start'>
                    <p className='text-lg text-slate-800 font-medium mr-4'>Altair Farooque</p>
                    <img src={User} alt="" width={36} />
                </div>
          </div>
    </nav>
  )
}

export default NavBar