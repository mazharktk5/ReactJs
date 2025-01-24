import React from 'react';
import logo from '../assets/images/hero/herologo.png';
import image from '../assets/images/hero/heroimage.png';

const Hero = () => {
  return (
    <section
      className="hero flex flex-col md:flex-row justify-around items-center bg-black bg-cover bg-no-repeat border-2 mt-10 ml-5 mr-5 p-5"
    >
      {/* Left Section */}
      <div className="text-white flex flex-col space-y-4 mb-7 md:mb-0 md:w-1/2 md:pl-10">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="w-10 h-12" />
          <p className="ml-2 text-lg">Iphone 14 series</p>
        </div>
        <div className="mt-4">
          <h1 className="text-3xl md:text-4xl font-bold">Up to 10%</h1>
          <h1 className="text-3xl md:text-4xl font-bold">off Voucher</h1>
        </div>
        <div className="mt-4">
          <button className="text-white border-b-2 border-white hover:text-purple-600 hover:border-purple-600">
            Shop now
          </button>
        </div>
      </div>

      {/* Right Section (Image) */}
      <div className="flex justify-center mt-6 md:mt-0 md:w-1/2">
        <img
          src={image}
          alt="Hero"
          className="w-full max-w-xs md:max-w-md lg:max-w-lg"
        />
      </div>
    </section>
  );
};

export default Hero;
