import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from '../components/CartContext'; // Adjust import path based on where your CartContext is

const AllProducts = () => {
  const { addToCart } = useContext(CartContext); // Access addToCart from CartContext
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

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

  // Handle add to cart
  const handleAddToCart = (product) => {
    console.log(`Added to cart: ${product.title}`);
    addToCart(product); // Add the product to the cart
  };

  return (
    <section className="all-products-section p-8 bg-gray-100">
      <h2 className="text-2xl font-bold mb-6">All Products</h2>
      <div className="product-container grid grid-cols-4 gap-4">
        {loading ? (
          <p>Loading products...</p>
        ) : (
          Array.isArray(products) && products.length > 0 ? (
            products.map(product => (
              <div key={product.id} className="product-card bg-[#F5F5F5] p-4 rounded-lg shadow-md">
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
                  className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none"
                  onClick={() => handleAddToCart(product)} // Add product to cart on click
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
    </section>
  );
};

export default AllProducts;
