// src/components/AboutStats.jsx

import React from 'react';
import Services from '../assets/images/OurStory/Icon1.png';
import Icon2 from '../assets/images/OurStory/Icon2.png';
import Icon3 from '../assets/images/OurStory/Icon3.png';
import Icon4 from '../assets/images/OurStory/Icon4.png';

const AboutStats = () => {
  const statsData = [
    { 
      image: Services, 
      value: '10.5k', 
      label: 'Sellers active on our site', 
      hoverBgColor: 'hover:bg-red-500', 
      hoverTextColor: 'hover:text-white' 
    },
    { 
      image: Icon2, 
      value: '33k', 
      label: 'Monthly Product Sale', 
      hoverBgColor: 'hover:bg-red-600', 
      hoverTextColor: 'hover:text-white' 
    },
    { 
      image: Icon3, 
      value: '45.5k', 
      label: 'Customer active on our site', 
      hoverBgColor: 'hover:bg-red-500', 
      hoverTextColor: 'hover:text-white' 
    },
    { 
      image: Icon4, 
      value: '25k', 
      label: 'Annual gross sale on our site', 
      hoverBgColor: 'hover:bg-red-500', 
      hoverTextColor: 'hover:text-white' 
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-5">
      {statsData.map((stat, index) => (
        <div
          key={index}
          className={`bg-white shadow-md rounded-lg p-6 flex flex-col items-center justify-center text-center transition-colors duration-300 ${stat.hoverBgColor} ${stat.hoverTextColor}`}
        >
          {stat.image ? (
            <img src={stat.image} alt={stat.label} className="w-16 h-16 mb-4" />
          ) : (
            <i className={`fa ${stat.icon} text-3xl mb-4`}></i>
          )}
          <span className="text-4xl font-bold">{stat.value}</span>
          <span className="text-sm mt-2">{stat.label}</span>
        </div>
      ))}
    </div>
  );
};

export default AboutStats;
