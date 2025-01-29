import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../components/CartContext';
import { motion } from 'framer-motion';

function CategoryProductsPage() {
  const { category } = useParams();
  const { addToCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notifications, setNotifications] = useState(null);
  const [notificationType, setNotificationType] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error))
      .finally(() => setLoading(false));
  }, [category]);

  const handleAddToCart = (product) => {
    addToCart(product); 
    setNotifications(`${product.title} added to cart.`);
    setNotificationType("success");
    setTimeout(() => setNotifications(null), 3000);
  };

  return (
    <section className="category-products-section p-10 bg-gray-100">

      <motion.div
        className="mb-6 flex flex-col sm:flex-row items-center justify-between"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center">
          <div className="h-10 w-5 bg-red-500 border rounded-md"></div>
          <h1 className="text-red-500 ml-2 text-2xl sm:text-3xl font-bold">
            {category} Products
          </h1>
        </div>
      </motion.div>

     
      {notifications && (
        <motion.div
          className={`${notificationType === "success"
            ? "bg-green-500"
            : notificationType === "error"
              ? "bg-red-500"
              : "bg-blue-500"
            } text-white p-2 rounded-md mb-4 text-center`}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          {notifications}
        </motion.div>
      )}

     
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {loading ? (
          <p>Loading products...</p>
        ) : (
          Array.isArray(products) && products.length > 0 ? (
            products.map((product) => (
              <motion.div
                key={product.id}
                className="bg-white p-6 rounded-lg shadow-lg transition duration-300 hover:shadow-xl relative"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                
                <div className="w-14 h-8 bg-red-500 text-white absolute top-2 left-2 rounded-md text-center text-sm flex items-center justify-center font-semibold">
                  -40%
                </div>

               
                <motion.img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-contain rounded-md"
                  whileHover={{ scale: 1.08 }}
                />

                
                <div className="mt-4 text-center">
                  <h3 className="text-lg font-semibold text-gray-800 h-16 overflow-hidden">
                    {product.title}
                  </h3>
                  <p className="text-xl font-bold text-red-600">${product.price}</p>
                  <div className="rating mt-2 text-yellow-400">
                    {"★".repeat(Math.floor(product.rating.rate))}
                    {"☆".repeat(5 - Math.floor(product.rating.rate))}
                    <span className="ml-2 text-sm text-gray-500">
                      ({product.rating.rate})
                    </span>
                  </div>
                </div>

                
                <motion.button
                  className="mt-4 w-full bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </motion.button>
              </motion.div>
            ))
          ) : (
            <p>No products available in this category.</p>
          )
        )}
      </div>
    </section>
  );
}

export default CategoryProductsPage;
