import React from 'react';
import Hero from '../components/Hero';
import FlashSection from '../components/FlashSection'; 
import BestSellings from '../components/BestSellings';
 

const Home = () => {
  return (
    <div>
      
      <Hero />
      <FlashSection/>
      <BestSellings/>
     
    </div>
  );
};

export default Home;
