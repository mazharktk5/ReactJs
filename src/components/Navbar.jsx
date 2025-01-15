import React from 'react';
import { Link } from 'react-router-dom';
import heartIcon from '../assets/images/Wishlist.png';
import cartIcon from '../assets/images/Cart.png';
import searchIcon from '../assets/images/search.png';



const Navbar = () => {
  return (
    <nav className="flex items-center justify-around p-4 bg-white shadow-md">
      <div className="text-xl font-bold">
        <Link to="/">Noman Electronics</Link>
      </div>
      <div className="flex space-x-8">
        <Link to="/" className="hover:underline hover:font-semibold">Home</Link>
        <Link to="/contact" className="hover:underline hover:font-semibold">Contact</Link>
        <Link to="/about" className="hover:underline hover:font-semibold">About</Link>
        <Link to="/signup" className="hover:underline hover:font-semibold">Sign Up</Link>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="pl-4 pr-10 py-2 border rounded-md shadow-sm focus:outline-none "
          />
          <img
            src={searchIcon}
            alt="Search"
            className="absolute right-2 cursor-pointer top-2.5 w-4 h-4 text-gray-500"
          />
        </div>
        <img
          src={heartIcon}
          alt="Wishlist"
          className="w-6 h-6 text-gray-600 hover:text-purple-600 cursor-pointer"
        />
        <img
          src={cartIcon}
          alt="Cart"
          className="w-6 h-6 text-gray-600 hover:text-purple-600 cursor-pointer"
        />
      </div>
    </nav>
  );
};

export default Navbar;
