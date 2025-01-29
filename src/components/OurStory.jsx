import React from 'react';
import image1 from "../assets/images/OurStory/About-image.png"; 
import Person1 from "../assets/images/OurStory/Person-1.png"; 
import Person2 from "../assets/images/OurStory/Person-2.png"; 
import Person3 from "../assets/images/OurStory/Person-3.png";
import AboutStats from '../components/AboutStats';

const OurStory = () => {
  const userData = [
    {
      name: 'Tom Cruise',
      image: Person1, 
      title: 'Founder & Chairman',
    },
    {
      name: 'Emma Watson',
      image: Person2,
      title: 'Managing Director',
    },
    {
      name: 'Will Smith',
      image: Person3,
      title: 'Product Design',
    },
  ];

  return (
    <div className="container mx-auto py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
       
        <div className="lg:w-1/2 bg-gray-100 rounded-lg p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Our Story</h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Launched in 2015, Exclusive South Asia's premier online shopping marketplace
            with an active presence in Bangladesh. Supported by a wide range of tailored
            marketing, data, and service solutions, it has 10,000+ sellers and 300 brands
            and serves millions of customers across the region.
          </p>
        </div>

       
        <div className="lg:w-1/2 flex justify-center items-center">
          <img 
            src={image1} 
            alt="Our Story Image" 
            className="w-full max-w-lg rounded-lg shadow-lg" 
          />
        </div>
      </div>

      
      <div className="mt-12 sm:mt-16">
        <AboutStats />
      </div>

    
      <div className="mt-12 sm:mt-16">
        <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Meet Our Team</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {userData.map((user, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300"
            >
             
              <div className="w-32 h-40 sm:w-40 sm:h-56 mx-auto rounded-lg overflow-hidden">
                <img
                  src={user.image}
                  alt={user.name}
                  className="w-full h-full object-cover"
                />
              </div>
             
              <div className="mt-4">
                <h3 className="text-xl font-semibold">{user.name}</h3>
                <p className="text-gray-600 mt-2">{user.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurStory;