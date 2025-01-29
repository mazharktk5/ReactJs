import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-sm">
        
        
        <div className="flex flex-col space-y-3">
          <h1 className="font-extrabold text-lg tracking-wide">Shopify</h1>
          <p className="text-gray-300">Subscribe</p>
          <p className="text-gray-400">
            Get <span className="text-yellow-400 font-medium">10% off</span> on your first order!
          </p>
        </div>

       
        <div className="flex flex-col space-y-3">
          <h1 className="font-extrabold text-lg tracking-wide">Support</h1>
          <p className="text-gray-400">Main Board Bazar</p>
          <p className="text-gray-400">mazharahmad1@gmail.com</p>
        </div>

        
        <div className="flex flex-col space-y-3">
          <h1 className="font-extrabold text-lg tracking-wide">Account</h1>
          <Link to="/login" className="text-gray-300 hover:text-yellow-400 transition-all duration-300">Log In</Link>
          <Link to="/signup" className="text-gray-300 hover:text-yellow-400 transition-all duration-300">Register</Link>
        </div>

        
        <div className="flex flex-col space-y-3">
          <h1 className="font-extrabold text-lg tracking-wide">Quick Links</h1>
          <Link to="/about" className="text-gray-300 hover:text-yellow-400 transition-all duration-300">About</Link>
          <Link to="/privacy-policy" className="text-gray-300 hover:text-yellow-400 transition-all duration-300">Privacy Policy</Link>
          <Link to="/faqs" className="text-gray-300 hover:text-yellow-400 transition-all duration-300">FAQs</Link>
        </div>
      </div>

      
      <div className="text-center text-gray-500 mt-8 text-xs">
        © {new Date().getFullYear()} Mazhar Shopify. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
