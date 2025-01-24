import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from '../components/CartContext';
import { FavoritesContext } from '../components/FavoratesContext'; // Import FavoritesContext
import Wishlist from '../assets/images/Wishlist.png'; // Import Wishlist icon
import SearchBar from '../components/SearchBar';

const AllProducts = () => {
  const { addToCart } = useContext(CartContext);
  const { favorites, addToFavorites, removeFromFavorites } = useContext(FavoritesContext); // Access favorites and functions
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notification, setNotification] = useState(null);
  const [searchTerm, setSearchTerm] = useState(''); // State to track the search term

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          console.error('Invalid data format:', data);
        }
      })
      .catch(error => console.error('Error fetching products:', error))
      .finally(() => setLoading(false));
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
    setNotification(`${product.title} added to cart`);
    setTimeout(() => setNotification(null), 2000); // Hide after 2 seconds
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase()); 
  };

  
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm)
  );
  
  const handleAddToFavorites = (product) => {
    addToFavorites(product);
  };

  const handleRemoveFromFavorites = (productId) => {
    removeFromFavorites(productId);
  };

  return (
    <section className="all-products-section p-8 bg-gray-100">
      <h2 className="text-2xl font-bold mb-6">All Products</h2>

      <SearchBar searchTerm={searchTerm} handleSearch={handleSearch} />

      {/* Notification */}
      {notification && (
        <div className="notification w-full bg-green-100 text-green-700 p-2 rounded-md mb-4">
          {notification}
        </div>
      )}

      {/* Product List */}
      <div className="product-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {loading ? (
          <p>Loading products...</p>
        ) : (
          filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <div key={product.id} className="product-card bg-[#F5F5F5] p-4 rounded-lg shadow-md flex flex-col justify-between relative">
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
                <h3 className="mt-4 text-xl font-semibold">{product.title}</h3>
                <p className="text-lg text-red-600">${product.price}</p>
                <button
                  className="mt-4 w-full bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            ))
          ) : (
            <p>No products found matching your search.</p>
          )
        )}
      </div>
    </section>
  );
};

export default AllProducts;
