// src/pages/AllBestSellings.js
import React, { useState, useContext } from 'react';
import { CartContext } from '../components/CartContext'; // Adjust import path based on where your CartContext is
import SearchBar from '../components/SearchBar'; // Import the SearchBar component
import useProducts from '../hooks/useProducts'; // Import the custom hook for fetching products

const AllBestSellings = () => {
  const { addToCart } = useContext(CartContext); // Access addToCart from CartContext
  const { products, loading, error } = useProducts(); // Fetch products using the custom hook
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddToCart = product => {
    console.log(`Added to cart: ${product.title}`);
    addToCart(product); // Add the product to the cart
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

      {/* Use the SearchBar component */}
      <SearchBar searchTerm={searchTerm} handleSearch={handleSearch} />

      {loading ? (
        <p>Loading products...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <div className="product-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <div key={product.id} className="product-card bg-[#F5F5F5] p-4 rounded-lg shadow-md flex flex-col justify-between">
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
