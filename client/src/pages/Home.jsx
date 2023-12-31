import React, {useState } from 'react';

import NavBar from '../components/Navigation components/NavBar';

import { mock } from '../MockData';
// Componnets
import BannersCarousal from '../components/Home/BannersCarousal';
import CategoryCarousals from '../components/Home/CategoryCarousals';
import MostFaqComponent from '../components/Home/MostFaqComponent';
import SearchResultsContainer from '../components/Searchbar/SearchResultsContainer';
import Footer from '../components/common components/Footer';


function Home({socket}) {
  const [searchResults , setSearchResults] = useState(null);
  const [searchLocation,setsearchLocation] =  useState(null);

  const handleSeachResults = (results) =>{
        if(results === ''){
          setSearchResults(null)
        }
        else{
          setSearchResults(results);
        }
  }
  const handleSeachLocationChange = (value) =>{
    if(value === ''){
      setsearchLocation(null)
    }
    else{
      setsearchLocation(value);
    }
  }
  return (
    <div className='w-full flex flex-col items-center overflow-x-hidden scroll-smooth'>
        {/* nav bar */}
        <NavBar showSeachBar={true} handleSearchBar={handleSeachResults} handleLocation={handleSeachLocationChange} socket={socket} />
        <div className='absolute top-[11vh] w-full z-20'>
           <SearchResultsContainer locations={searchLocation} results={searchResults} />
        </div>
        {/* banner auto moving carousal */}
        <BannersCarousal />
        <CategoryCarousals  data = {mock.Home.PopularRestaurants} title={mock.Home.PopularRestaurants.title} type={mock.Home.PopularRestaurants.type} />
        <CategoryCarousals  data = {mock.Home.TrendingItems} title={mock.Home.TrendingItems.title} type={mock.Home.TrendingItems.type} />
        <CategoryCarousals  data = {mock.Home.PopularRestaurants} title={mock.Home.PopularRestaurants.title}  type={mock.Home.PopularRestaurants.type}/>
        <CategoryCarousals  data = {mock.Home.TrendingItems} title={mock.Home.TrendingItems.title} type={mock.Home.TrendingItems.type} />
        <MostFaqComponent />
        <Footer />
    </div>
  )
}

export default Home;