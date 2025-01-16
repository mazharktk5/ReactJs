import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CartProvider from './components/CartContext';  // Correct default import
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AllProducts from './components/AllProducts';
import CartPage from './pages/Cart';  // Import the CartPage
import AllBestSellings from './pages/AllBestSellings';
import Footer from './components/Footer';
import Signup from './pages/Signup';  // Add SignUp page
import Login from './pages/Login'; // Add Login page

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all-products" element={<AllProducts />} />
          <Route path="/cart" element={<CartPage />} />  // Add CartPage route
          <Route path="//all-bestsellings" element={<AllBestSellings />} />  // Add BestSellings route
          <Route path="/signup" element={<Signup />} /> 
          <Route path="/login" element={<Login />} />  // Add Login page
         
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
};

export default App;
