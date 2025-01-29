import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import CartProvider from './components/CartContext';
import { FavoritesProvider } from './components/FavoratesContext'; 
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AllProducts from './components/AllProducts';
import CartPage from './pages/Cart';
import AllBestSellings from './pages/AllBestSellings';
import Footer from './components/Footer';
import Signup from './pages/Signup';
import Login from './pages/Login';
import ProfilePage from './pages/ProfilePage';
import 'react-toastify/dist/ReactToastify.css'; 

import Contact from './pages/Contact';
import CategoryProductsPage from './pages/CategoryProductsPage';
import About from './pages/About';
import Favorites from './pages/FavoritesPage';
import { FirebaseProvider } from './context/Firebase'; 
import { useEffect } from 'react';
import { getAuth,onAuthStateChanged } from 'firebase/auth';
import { app } from './context/Firebase';
import ProtectedRoute from './components/ProtectedRoutes';
import { UserProvider } from '../src/context/Usercontext';
import { ToastContainer } from "react-toastify";



// Initialize Firebase
const auth = getAuth(app);



const App = () => {

  const [user , setUser] = useState()
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        
        console.log('User is signed in:', user);
        setUser(user);
      } else {
        
        console.log('User is signed out');
        setUser(null);
      }
    });

    
    return () => unsubscribe();

  },[]);


  return (
    
    <UserProvider>
    <FirebaseProvider>
      
        <CartProvider>
          <FavoritesProvider>
            
            <ToastContainer />
            <Router>
              <div className="flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-grow">
                <Routes>
  
  <Route path="/" element={<Home />} />
  <Route path="/signup" element={<Signup />} />
  <Route path="/login" element={<Login />} />

  
  <Route
    path="/all-products"
    element={
      <ProtectedRoute>
        <AllProducts />
      </ProtectedRoute>
    }
  />
  <Route
    path="/cart"
    element={
      <ProtectedRoute>
        <CartPage />
      </ProtectedRoute>
    }
  />
  <Route
    path="/all-bestsellings"
    element={
      <ProtectedRoute>
        <AllBestSellings />
      </ProtectedRoute>
    }
  />
  <Route
    path="/profile"
    element={
      <ProtectedRoute>
        <ProfilePage />
      </ProtectedRoute>
    }
  />
  <Route
    path="/contact"
    element={
      <ProtectedRoute>
        <Contact />
      </ProtectedRoute>
    }
  />
  <Route
    path="/products/:category"
    element={
      <ProtectedRoute>
        <CategoryProductsPage />
      </ProtectedRoute>
    }
  />
  <Route
    path="/about"
    element={
      <ProtectedRoute>
        <About />
      </ProtectedRoute>
    }
  />
  <Route
    path="/favorites"
    element={
      <ProtectedRoute>
        <Favorites />
      </ProtectedRoute>
    }
  />
  
</Routes>


                </main>
                <Footer />
              </div>
            </Router>
          </FavoritesProvider>
        </CartProvider>
      
    </FirebaseProvider>
    </UserProvider>
  );
};


export default App;
