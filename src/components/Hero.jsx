import React from "react";
import logo from "../assets/images/hero/herologo.png";
import heroImage from "../assets/images/hero/image4.jpg"; 

const Hero = () => {
  return (
    <section className="hero flex flex-col md:flex-row justify-between items-center bg-black text-white bg-cover bg-no-repeat border-2 mt-10 mx-5 p-5 rounded-lg">
      
     
      <div className="flex flex-col space-y-4 mb-7 md:mb-0 md:w-1/2 md:pl-10 text-center md:text-left">
        <div className="flex justify-center md:justify-start items-center space-x-2">
          <img src={logo} alt="Brand Logo" className="w-12 h-12" />
          <p className="text-lg font-medium">Exclusive Fashion Trends</p>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          Elevate Your <span className="text-purple-500">Style</span> with 10% Off
        </h1>
        <p className="text-gray-300 text-lg">
          Discover the latest fashion collections with **exclusive discounts**. Limited-time offer!
        </p>
        <button className="bg-purple-600 hover:bg-purple-700 transition-all duration-300 text-white py-2 px-6 rounded-md text-lg font-semibold shadow-md">
          Shop Now
        </button>
      </div>

     
      <div className="flex justify-center md:w-1/2">
        <img
          src={heroImage}
          alt="Fashion Sale"
          className="w-full max-w-xs md:max-w-md lg:max-w-lg rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default Hero;
