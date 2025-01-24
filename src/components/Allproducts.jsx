import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from '../components/CartContext';
import SearchBar from './SearchBar'; // Import the SearchBar component

const AllProducts = () => {
  const { addToCart } = useContext(CartContext);
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
    setSearchTerm(event.target.value.toLowerCase()); // Update search term on input change
  };

  // Filter products based on the search term
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm)
  );

  return (
    <section className="all-products-section p-8 bg-gray-100">
      <h2 className="text-2xl font-bold mb-6">All Products</h2>

      {/* Use the SearchBar component */}
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
              <div key={product.id} className="product-card bg-[#F5F5F5] p-4 rounded-lg shadow-md flex flex-col justify-between">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover rounded-md bg-[#F5F5F5]"
                />
                <h3 className="mt-4 text-xl font-semibold text-sm sm:text-base">{product.title}</h3>
                <p className="text-lg text-red-600">${product.price}</p>
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
          )
        )}
      </div>
    </section>
  );
};

export default AllProducts;
