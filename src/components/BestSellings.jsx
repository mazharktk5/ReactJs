import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../components/CartContext'; // Adjust the import path based on your folder structure

const BestSellingsSection = () => {
  const { addToCart } = useContext(CartContext); // Access addToCart from CartContext
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notifications, setNotifications] = useState();

  // Fetch products data from the fake API
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')  // Replace with your actual API URL
      .then(response => response.json())
      .then(data => {
        console.log(data);  // Log the data to check its structure
        if (Array.isArray(data)) {
          setProducts(data);  // Set products data if it's an array
        } else {
          console.error('Invalid data format:', data);
        }
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      })
      .finally(() => {
        setLoading(false);  // Set loading to false once the request is finished
      });
  }, []);

  // Handle adding a product to the cart
  const handleAddToCart = (product) => {
    setNotifications(`${product.title} added to cart`);
    setTimeout(() => setNotifications(null), 3000);
    addToCart(product);  // Call addToCart from CartContext to add the product to the cart
  };

  return (
    <>
      <section className="best-sellings-section p-8 bg-gray-100 mt-5">
        <h2 className="text-2xl font-bold mb-6">Best Sellings</h2>
        <div className="product-container grid grid-cols-4 gap-4">
          {loading ? (
            <p>Loading products...</p> // Display loading message
          ) : (
            Array.isArray(products) && products.length > 0 ? (
              products.slice(0, 4).map((product) => (
                <div key={product.id} className="product-card bg-[#F5F5F5] p-4 rounded-lg shadow-md flex flex-col justify-between">
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
                    className="mt-4 w-full bg-black text-white py-2 px-4 rounded-lg hover:bg-slate-500 focus:outline-none"
                    onClick={() => handleAddToCart(product)} // Call handleAddToCart
                  >
                    Add to Cart
                  </button>
                </div>
              ))
            ) : (
              <p>No products available.</p> // Fallback message if no products are fetched
            )
          )}
        </div>
      </section>

      <div className="flex justify-center mt-5 mb-4">
        <Link to="/all-BestSellings">
          <button className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 focus:outline-none">
            View All
          </button>
        </Link>
      </div>
    </>
  );
};

export default BestSellingsSection;
