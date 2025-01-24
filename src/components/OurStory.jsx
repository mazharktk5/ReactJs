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
    <div className="container mx-auto py-16 px-4 ">
      <div className="flex flex-col md:flex-row  justify-between">
        
        <div className="md:w-1/2 flex justify-center flex-col bg-gray-300 rounded-lg">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Story</h2>
          <p className="text-lg mb-6 ml-6 mr-5">
            Launched in 2015, Exclusive South Asia's premier online shopping marketplace
            with an active presence in Bangladesh. Supported by a wide range of tailored
            marketing, data, and service solutions, it has 10,000+ sellers and 300 brands
            and serves millions of customers across the region.
          </p>
        </div>

        
        <div className="md:w-1/2 mt-8 md:mt-0  w-1/6 ">
          <img src={image1} alt="Our Story Image" className="w-full rounded-lg shadow-lg" />
        </div>
      </div>

      <div className="container mx-auto p-4 mt-6">
      
      <AboutStats />
    </div>

      {/* User Info */}
      <div className="mt-16 mx-auto mb-10">
  <h3 className="text-2xl font-bold mb-6 text-center">Meet Our Team</h3>
  <div className="flex justify-center">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
      {userData.map((user, index) => (
        <div key={index} className="text-center p-6 w-56 h-auto bg-gray-100 rounded-lg shadow-lg">
         
          <div className="w-40 h-56 bg-gray-300 mx-auto rounded-md overflow-hidden">
            <img
              src={user.image}
              alt={user.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="mt-4">
            <h3 className="text-xl font-semibold">{user.name}</h3>
            <p className="text-gray-500">{user.title}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>




    </div>
  );
};

export default OurStory;
