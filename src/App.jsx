import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import CartProvider from './components/CartContext';  // Correct default import
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AllProducts from './components/AllProducts';
import CartPage from './pages/Cart';  // Import the CartPage
import AllBestSellings from './pages/AllBestSellings';
import Footer from './components/Footer';
import Signup from './pages/Signup';  // Add SignUp page
import Login from './pages/Login'; // Add Login page
import ProfilePage from './pages/ProfilePage';
import { UserProvider, useUser } from './components/UserContext';  // Import the UserContext

const App = () => {
  return (
    <UserProvider>
      <CartProvider>
        <Router>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/all-products" element={<AllProducts />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/all-bestsellings" element={<AllBestSellings />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/profile" element={<ProfilePage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </CartProvider>
    </UserProvider>
  );
};

// PrivateRoute Component: Renders Home if signed up, otherwise redirects to Signup
const PrivateRoute = () => {
  const { isSignedUp } = useUser();
  return isSignedUp ? <Home /> : <Navigate to="/signup" />;
};

export default App;
