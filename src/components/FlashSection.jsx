import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../components/CartContext';
import { FavoritesContext } from '../components/FavoratesContext';
import Wishlist from '../assets/images/Wishlist.png';

const FlashSection = () => {
  const { cart, addToCart } = useContext(CartContext); // Access `cart` here
  const { favorites, addToFavorites, removeFromFavorites } = useContext(FavoritesContext);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [notifications, setNotifications] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          console.error('Invalid data format:', data);
        }
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
        setError('Failed to load products. Please try again later.');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleAddToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      setNotifications(`${product.title} is already in the cart.`);
    } else {
      addToCart(product);
      setNotifications(`${product.title} added to cart.`);
    }

    setTimeout(() => setNotifications(null), 3000);
  };

  const handleAddToFavorites = (product) => {
    addToFavorites(product);
    setNotifications(`${product.title} added to favorites.`);
    setTimeout(() => setNotifications(null), 3000);
  };

  const handleRemoveFromFavorites = (productId) => {
    removeFromFavorites(productId);
    setNotifications('Removed from favorites.');
    setTimeout(() => setNotifications(null), 3000);
  };

  return (
    <>
      <section className="flash-section p-8 bg-gray-100 mt-5">
        <div className="flex items-center mb-4">
          <div className="h-10 w-1 bg-red-500 border rounded-md"></div>
          <h1 className="text-red-500 ml-1 mt-1 text-2xl font-bold leading-tight">Today's Flash Sales</h1>
        </div>
        {notifications && (
          <div className="bg-green-500 text-white p-2 rounded-md mb-4 top-16">
            {notifications}
          </div>
        )}
        {error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <div className="product-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {loading ? (
              <p>Loading products...</p>
            ) : (
              Array.isArray(products) && products.length > 0 ? (
                products.slice(0, 4).map((product) => (
                  <div
                    key={product.id}
                    className="product-card bg-white p-4 rounded-lg shadow-md flex flex-col justify-between relative"
                  >
                    <div className="w-12 h-7 bg-red-500 text-white absolute top-1 left-1 rounded-md text-center">
                      -40%
                    </div>
                    <img
                      src={Wishlist}
                      alt="Add to Wishlist"
                      className="w-7 h-7 cursor-pointer absolute top-2 right-2 z-20 bg-white rounded-full"
                      onClick={() => {
                        if (favorites.some((item) => item.id === product.id)) {
                          handleRemoveFromFavorites(product.id);
                        } else {
                          handleAddToFavorites(product);
                        }
                      }}
                    />
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-48 object-cover rounded-md bg-[#F5F5F5]"
                    />
                    <div className="mt-4">
                      <h3 className="text-xl font-semibold h-16 overflow-hidden">{product.title}</h3>
                    </div>
                    <p className="text-lg text-red-600">${product.price}</p>
                    <div className="rating mt-2 text-yellow-400">
                      {'★'.repeat(Math.floor(product.rating.rate))}
                      {'☆'.repeat(5 - Math.floor(product.rating.rate))}
                      <span className="ml-2 text-sm text-gray-500">({product.rating.rate})</span>
                    </div>
                    <button
                      className="mt-4 bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-700 focus:outline-none"
                      onClick={() => handleAddToCart(product)}
                    >
                      Add to Cart
                    </button>
                  </div>
                ))
              ) : (
                <p>No products available.</p>
              )
            )}
          </div>
        )}
      </section>

      <div className="flex justify-center mt-5 mb-4">
        <Link to="/all-products">
          <button className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 focus:outline-none">
            View All Products
          </button>
        </Link>
      </div>
    </>
  );
};

export default FlashSection;
