import React from 'react';
import Hero from '../components/Hero';
import FlashSection from '../components/FlashSection'; 
import BestSellings from '../components/BestSellings';
import BrowseByCatogary from '../components/BrowseByCatogary';
 

const Home = () => {
  return (
    <div>
      
      <Hero />
      <FlashSection/>
      <BrowseByCatogary/>
      <BestSellings/>
     
    </div>
  );
};

export default Home;
