import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import CartProvider from './components/CartContext';
import FavoritesProvider from './components/FavoratesContext'; // Updated to FavoritesContext
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AllProducts from './components/AllProducts';
import CartPage from './pages/Cart';
import AllBestSellings from './pages/AllBestSellings';
import Footer from './components/Footer';
import Signup from './pages/Signup';
import Login from './pages/Login';
import ProfilePage from './pages/ProfilePage';
import { UserProvider, useUser } from './components/UserContext';
import Contact from './pages/Contact';
import CategoryProductsPage from './pages/CategoryProductsPage';
import About from './pages/About';
import Favorites from './pages/FavoritesPage'; // Corrected to FavoritesPage

const App = () => {
  return (
    <UserProvider>
      <CartProvider>
        <FavoritesProvider> {/* Wrap FavoritesProvider */}
          <Router>
            <div className="flex flex-col min-h-screen">
              <Navbar />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<PrivateRoute />} />
                  <Route path="/all-products" element={<AllProducts />} />
                  <Route path="/cart" element={<CartPage />} />
                  <Route path="/all-bestsellings" element={<AllBestSellings />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/profile" element={<ProfilePage />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/products/:category" element={<CategoryProductsPage />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/favorites" element={<Favorites />} /> {/* Updated route */}
                </Routes>
              </main>
              <Footer />
            </div>
          </Router>
        </FavoritesProvider>
      </CartProvider>
    </UserProvider>
  );
};

const PrivateRoute = () => {
  const { isSignedUp } = useUser();
  return isSignedUp ? <Home /> : <Navigate to="/signup" />;
};

export default App;
