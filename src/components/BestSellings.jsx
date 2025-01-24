import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../components/CartContext'; 
import Wishlist from '../assets/images/wishlist.png';

const BestSellingsSection = () => {
  const { addToCart } = useContext(CartContext); 
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notifications, setNotifications] = useState();

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
    setNotifications(`${product.title} added to cart`);
    setTimeout(() => setNotifications(null), 3000);
    addToCart(product);  
  };

  return (
    <>
      <section className="best-sellings-section p-8 bg-gray-100 mt-5">
        <div className='flex mb-2'>
          <div className='h-10 w-5 bg-red-500 border rounded-md'></div>
          <h1 className='text-red-500 ml-1 mt-1 text-2xl font-bold leading-tight'>This Month</h1>
        </div>
        
        <div className='flex justify-between'>
          <h2 className="text-2xl font-bold mb-6">Best Sellings</h2>
          <Link to="/all-BestSellings">
            <button className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 focus:outline-none">
              View All
            </button>
          </Link>
        </div>
        
        {/* Responsive Product Container */}
        <div className="product-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {loading ? (
            <p>Loading products...</p>
          ) : (
            Array.isArray(products) && products.length > 0 ? (
              products.slice(0, 4).map((product) => (
                <div key={product.id} className="product-card bg-[#F5F5F5] p-4 rounded-lg shadow-md flex flex-col justify-between relative">
                  <div>
                    <img src={Wishlist} alt="Add to Wishlist" className="w-6 h-6 cursor-pointer absolute top-4 right-1 z-20 bg-white rounded-full" />
                  </div>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-48 object-cover rounded-md"
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
    </>
  );
};

export default BestSellingsSection;
  