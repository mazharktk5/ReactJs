import React, { useContext, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import heartIcon from '../assets/images/Wishlist.png';
import cartIcon from '../assets/images/Cart.png';
import { CartContext } from '../components/CartContext';
import { FavoritesContext } from '../components/FavoratesContext';
import { getAuth, signOut } from 'firebase/auth';
import { app } from '../context/Firebase';
import { toast } from "react-toastify";

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const { favorites } = useContext(FavoritesContext);
  const auth = getAuth(app);
  const navigate = useNavigate();
  const user = auth.currentUser;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setTimeout(() => {
        navigate('/');
      }, 2000);
      toast.success("Logged out successfully");
    } catch (error) {
      toast.error("Error logging out!");
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  return (
    <nav className="flex items-center justify-around px-4 py-6 bg-white shadow-md sticky top-0 z-50 font-sans">
      <div className="text-2xl font-bold">
        <Link to="/">Shopify</Link>
      </div>

      <button
        className="md:hidden p-2"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      <div className="hidden md:flex items-center space-x-8 font-medium">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
        <Link to="/about" className="hover:underline">About</Link>
        {!user && <Link to="/signup" className="hover:underline">Sign Up</Link>}
        {user && <button onClick={handleLogout} className="text-red-600 hover:underline">Logout</button>}
      </div>

      {isMenuOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-full bg-white shadow-md px-4 py-2 z-50 flex flex-col items-center justify-center font-medium text-lg">
          <button className="absolute top-5 right-5 p-2" onClick={() => setIsMenuOpen(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="flex flex-col space-y-6">
            <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
            {!user && <Link to="/signup" onClick={() => setIsMenuOpen(false)}>Sign Up</Link>}
            {user && (
              <>
                <button onClick={handleLogout} className="text-red-600">Logout</button>
                <Link to="/profile" onClick={() => setIsMenuOpen(false)}>Profile</Link>
              </>
            )}
          </div>
        </div>
      )}

      <div className="flex items-center space-x-4">
        <Link to="/favorites" className="relative">
          <img src={heartIcon} alt="Wishlist" className="w-6 h-6" />
          {favorites.length > 0 && <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-2 py-1">{favorites.length}</span>}
        </Link>
        <Link to="/cart" className="relative">
          <img src={cartIcon} alt="Cart" className="w-6 h-6" />
          {cart.length > 0 && <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-2 py-1">{cart.length}</span>}
        </Link>
        {user && !isMobile && <Link to="/profile" className="text-gray-600 hover:text-purple-600 font-semibold">Profile</Link>}
      </div>
    </nav>
  );
};

export default Navbar;