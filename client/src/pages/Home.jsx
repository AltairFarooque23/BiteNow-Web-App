import React, { useEffect } from 'react';

import NavBar from '../components/Navigation components/NavBar';

import { mock } from '../MockData';
// Componnets
import BannersCarousal from '../components/Home/BannersCarousal';
import CategoryCarousals from '../components/Home/CategoryCarousals';
import MostFaqComponent from '../components/Home/MostFaqComponent';
import SearchResultsContainer from '../components/Searchbar/SearchResultsContainer';
import Footer from '../components/common components/Footer';
import { useNavigate } from 'react-router-dom';

function Home() {
  return (
    <div className='w-full flex flex-col items-center overflow-x-hidden scroll-smooth'>
        {/* nav bar */}
        <NavBar showSeachBar={true} />
        <div className='absolute top-[11vh] w-full z-20'>
           <SearchResultsContainer locations={null} results={null} />
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