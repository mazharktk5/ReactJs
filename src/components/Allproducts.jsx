import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from '../components/CartContext';

const AllProducts = () => {
  const { addToCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notification, setNotification] = useState(null);

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

  return (
    <section className="all-products-section p-8 bg-gray-100">
      <h2 className="text-2xl font-bold mb-6">All Products</h2>
      {notification && (
        <div className="notification w-full bg-green-100 text-green-700 p-2 rounded-md mb-4">
          {notification}
        </div>
      )}
      <div className="product-container grid grid-cols-4 gap-4">
        {loading ? (
          <p>Loading products...</p>
        ) : (
          products.length > 0 ? (
            products.map(product => (
              <div key={product.id} className="product-card bg-[#F5F5F5] p-4 rounded-lg shadow-md flex flex-col justify-between">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover rounded-md bg-[#F5F5F5]"
                />
                <h3 className="mt-4 text-xl font-semibold">{product.title}</h3>
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
            <p>No products available.</p>
          )
        )}
      </div>
    </section>
  );
};

export default AllProducts;
