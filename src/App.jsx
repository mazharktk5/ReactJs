import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './components/CartContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AllProducts from './components/AllProducts';
import CartPage from './pages/Cart';  // Import the CartPage

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all-products" element={<AllProducts />} />
          <Route path="/cart" element={<CartPage />} />  // Add CartPage route
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
