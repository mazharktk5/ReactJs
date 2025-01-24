import React from 'react';
import Hero from '../components/Hero';
import FlashSection from '../components/FlashSection'; 
import BestSellings from '../components/BestSellings';
import BrowseByCatogary from '../components/BrowseByCatogary';
import BenefitsSection from '../components/BenefitsSection';
 

const Home = () => {
  return (
    <div>
      
      <Hero />
      <FlashSection/>
      <BrowseByCatogary/>
      <BestSellings/>
      <BenefitsSection/>
     
    </div>
  );
};

export default Home;
