import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import heartIcon from '../assets/images/Wishlist.png';
import cartIcon from '../assets/images/Cart.png';
import { CartContext } from '../components/CartContext';

const Navbar = () => {
  const { cart } = useContext(CartContext);
  
  // State to toggle mobile menu
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-around p-4 md:p-6 bg-white shadow-md sticky top-0 z-10">
      {/* Logo */}
      <div className="text-xl font-bold">
        <Link to="/">Mazhar Electronics</Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button
          className="text-gray-600 hover:text-purple-600 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className={`fas fa-bars ${menuOpen ? "transform rotate-90" : ""}`}></i>
        </button>
      </div>

      {/* Mobile Menu Links */}
      <div
        className={`${
          menuOpen ? "block" : "hidden"
        } absolute top-16 left-0 w-full bg-white p-4 md:hidden shadow-md`}
      >
        <Link to="/" className="block p-2">Home</Link>
        <Link to="/contact" className="block p-2">Contact</Link>
        <Link to="/about" className="block p-2">About</Link>
        <Link to="/signup" className="block p-2">Sign Up</Link>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex items-center space-x-8">
        <Link to="/" className="hover:underline hover:font-semibold">Home</Link>
        <Link to="/contact" className="hover:underline hover:font-semibold">Contact</Link>
        <Link to="/about" className="hover:underline hover:font-semibold">About</Link>
        <Link to="/signup" className="hover:underline hover:font-semibold">Sign Up</Link>
      </div>

      {/* Icons - Wishlist, Cart, Profile */}
      <div className="flex items-center space-x-4 z-20">
        <img
          src={heartIcon}
          alt="Wishlist"
          className="w-6 h-6 text-gray-600 hover:text-purple-600 cursor-pointer"
        />
        <Link to="/cart" className="relative">
          <img
            src={cartIcon}
            alt="Cart"
            className="w-6 h-6 text-gray-600 hover:text-purple-600 cursor-pointer"
          />
          {cart.length > 0 && (
            <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full px-1">
              {cart.length}
            </span>
          )}
        </Link>
        <Link to="/profile" className="text-gray-600 hover:text-purple-600">Profile</Link>
      </div>
    </nav>
  );
};

export default Navbar;
