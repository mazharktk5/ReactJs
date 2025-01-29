import React, { useContext, useState, useMemo } from 'react';
import { CartContext } from '../components/CartContext'; 
import { FavoritesContext } from '../components/FavoratesContext';
import SearchBar from '../components/SearchBar';

const Favorites = () => {
  const { favorites, removeFromFavorites } = useContext(FavoritesContext); 
  const { addToCart } = useContext(CartContext); 
  const [searchTerm, setSearchTerm] = useState('');
   const [notifications, setNotifications] = useState();

  
  const filteredFavorites = useMemo(() => {
    return favorites.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [favorites, searchTerm]);

  const handleAddToCart = (product) => {
    console.log(`Added to cart: ${product.title}`);
    addToCart(product); 
  };

  const handleRemoveFromFavorites = (productId) => {
    removeFromFavorites(productId);
    setNotifications('Removed from favorites.');
    setTimeout(() => setNotifications(null), 3000);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value); 
  };

  return (
    <section className="favorites-section p-8 bg-gray-100">
      <h2 className="text-2xl font-bold mb-6">My Favorites</h2>

      
      <SearchBar searchTerm={searchTerm} handleSearch={handleSearch} />
      {notifications && (
          <div className="bg-green-500 text-white p-2 rounded-md mb-4 top-16">
            {notifications}
          </div>
        )}

      {favorites.length === 0 ? (
        <p>You have no favorite products yet.</p>
      ) : (
        <div className="product-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredFavorites.length > 0 ? (
            filteredFavorites.map((product) => (
              <div
                key={product.id}
                className="product-card bg-[#F5F5F5] p-4 rounded-lg shadow-md flex flex-col justify-between"
              >
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
                  <span className="ml-2 text-sm text-gray-500">
                    ({product.rating.rate})
                  </span>
                </div>
                <button
                  className="mt-4 w-full bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors duration-300 focus:outline-none"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
                
                <button
                  className="mt-2 w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors duration-300 focus:outline-none"
                  onClick={() => handleRemoveFromFavorites(product.id)}
                >
                  Remove from Favorites
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

export default Favorites;
