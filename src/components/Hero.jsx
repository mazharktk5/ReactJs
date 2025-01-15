import React from 'react';
import logo from '../assets/images/hero/herologo.png';
import image from '../assets/images/hero/heroimage.png';

const Hero = () => {
  return (
    <section
      className="hero flex justify-around items-center absolute bg-black bg-cover bg-no-repeat border-2 top-[160px] left-[128px] h-[349px] w-[1177px]"
    >
      {/* Text Content */}
      <div className="text-white pl-10 flex flex-col space-y-4 mb-7">
        <div className="flex flex-row items-center">
          <img src={logo} alt="Logo" className="w-[40px] h-[49px] ml-4" />
          <span>
            <p className="ml-2">Iphone 14 series</p>
          </span>
        </div>
        <div className="mt-4 ml-4">
          <h1 className="text-4xl font-bold">Up to 10%</h1>
          <h1 className="text-4xl font-bold">off Voucher</h1>
        </div>
        <div className="mt-4 ml-4">
    <button className="text-white border-b-2 border-white hover:text-purple-600 hover:border-purple-600">
      Shop now
    </button>
  </div>
      </div>

      
      <div className="flex justify-center mr-56">
        <img
          src={image}
          alt="Hero"
          className="w-[496px] h-[300px]"
        />
      </div>
    </section>
  );
};

export default Hero;
