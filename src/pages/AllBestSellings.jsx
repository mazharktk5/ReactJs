import React, { useState, useContext } from 'react';
import { CartContext } from '../components/CartContext'; 
import { useFavorites } from '../components/FavoratesContext'; 
import SearchBar from '../components/SearchBar'; 
import useProducts from '../hooks/useProducts'; 
import Wishlist from '../assets/images/Wishlist.png'; 

const AllBestSellings = () => {
  const { addToCart } = useContext(CartContext); 
  const { favorites, addToFavorites, removeFromFavorites } = useFavorites(); 
  const { products, loading, error } = useProducts(); 
  const [searchTerm, setSearchTerm] = useState('');
  const [notifications, setNotifications] = useState(null);

  const handleAddToCart = (product) => {
    setNotifications(`${product.title} added to cart`);
    setTimeout(() => setNotifications(null), 3000); 
    addToCart(product);
  };

  const handleAddToFavorites = (product) => {
    setNotifications(`${product.title} added to favorites`);
    setTimeout(() => setNotifications(null), 3000); 
    addToFavorites(product);
  };

  const handleRemoveFromFavorites = (productId) => {
    removeFromFavorites(productId);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm)
  );

  return (
    <section className="all-products-section p-8 bg-gray-100">
      <h2 className="text-2xl font-bold mb-6">Best Sellings</h2>

      <SearchBar searchTerm={searchTerm} handleSearch={handleSearch} />

      {notifications && (
        <div className="bg-green-500 text-white p-2 rounded-md mb-4">
          {notifications}
        </div>
      )}

      {loading ? (
        <p>Loading products...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <div className="product-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <div key={product.id} className="product-card bg-[#F5F5F5] p-4 rounded-lg shadow-md flex flex-col justify-between relative">
                <div className="w-12 h-7 bg-red-500 text-white absolute top-1 left-1 rounded-md text-center z-30">
                  -40%
                </div>
                <img
                  src={Wishlist}
                  alt="Add to Wishlist"
                  className="w-7 h-7 cursor-pointer absolute top-2 right-2 bg-white rounded-full z-30"
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
                <h3 className="mt-4 text-xl font-semibold">{product.title}</h3>
                <p className="text-lg text-red-600">${product.price}</p>
                <div className="rating mt-2 text-yellow-400">
                  {'★'.repeat(Math.floor(product.rating.rate))}
                  {'☆'.repeat(5 - Math.floor(product.rating.rate))}
                  <span className="ml-2 text-sm text-gray-500">({product.rating.rate})</span>
                </div>

                <button
                  className="mt-4 w-full bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors duration-300 focus:outline-none"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            ))
          ) : (
            <p>No products found matching your search.</p>
          )}
        </div>
      )}
    </section>
  );
};

export default AllBestSellings;
