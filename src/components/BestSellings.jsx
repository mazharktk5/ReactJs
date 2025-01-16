import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../components/CartContext'; 

const BestSellings = () => {
  const { addToCart } = useContext(CartContext); 
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notification, setNotification] = useState(null);

  // Fetch products data from the fake API
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')  
      .then(response => response.json())
      .then(data => {
        console.log(data);  
        if (Array.isArray(data)) {
          setProducts(data);  
        } else {
          console.error('Invalid data format:', data);
        }
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      })
      .finally(() => {
        setLoading(false);  
      });
  }, []);

 
  const handleAddToCart = (product) => {
    setNotification(`${product.title} added to cart`);
    setTimeout(() => setNotification(null), 3000);
    
    addToCart(product);  
  };

  return (
    <>
      <section className="flash-section p-8 bg-gray-100 mt-5">
        <h2 className="text-2xl font-bold mb-6">Best Sellings products</h2>
        {notification && <div className="notification   bg-green-100 text-green-700 p-2 rounded-md mb-4">{notification}</div>}
        <div className="product-container grid grid-cols-4 gap-4">
          {loading ? (
            <p>Loading products...</p> 
          ) : (
            Array.isArray(products) && products.length > 0 ? (
              products.slice(10, 14).map((product) => (
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
                    className="mt-4 bg-black text-white py-2 px-4 rounded-lg hover:bg-slate-600 focus:outline-none"
                    onClick={() => handleAddToCart(product)} // Call handleAddToCart
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
        <div className="flex justify-center mt-5 mb-4">
        <Link to="/all-bestsellings">
          <button className="bg-red-500 text-white py-2 px-4 rounded-lg  hover:bg-red-600 hover focus:outline-none">
            View All 
          </button>
        </Link>
      </div>
      </section>

      
    </>
  );
};

export default BestSellings;
