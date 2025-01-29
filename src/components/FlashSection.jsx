import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Import Framer Motion
import { CartContext } from "../components/CartContext";
import { FavoritesContext } from "../components/FavoratesContext";
import WishlistIcon from "../assets/images/Wishlist.png";

const FlashSection = () => {
  const { cart, addToCart } = useContext(CartContext);
  const { favorites, addToFavorites, removeFromFavorites } = useContext(FavoritesContext);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notifications, setNotifications] = useState(null);
  const [notificationType, setNotificationType] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          console.error("Invalid data format:", data);
        }
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleAddToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setNotifications(`${product.title} is already in the cart.`);
      setNotificationType("info");
    } else {
      addToCart(product);
      setNotifications(`${product.title} added to cart.`);
      setNotificationType("success");
    }
    setTimeout(() => setNotifications(null), 3000);
  };

  const handleAddToFavorites = (product) => {
    addToFavorites(product);
    setNotifications(`${product.title} added to wishlist.`);
    setNotificationType("success");
    setTimeout(() => setNotifications(null), 3000);
  };

  const handleRemoveFromFavorites = (product) => {
    removeFromFavorites(product.id);
    setNotifications(`${product.title} removed from wishlist.`);
    setNotificationType("error");
    setTimeout(() => setNotifications(null), 3000);
  };

  return (
    <motion.section
      className="p-10 bg-gray-100"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="mb-6 flex flex-col sm:flex-row items-center justify-between">
        <div className="flex items-center">
          <div className="h-10 w-5 bg-red-500 border rounded-md"></div>
          <h1 className="text-red-500 ml-2 text-2xl sm:text-3xl font-bold">
            Today's Flash Sales
          </h1>
        </div>
        <Link to="/all-products">
          <button className="bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600 transition duration-300 ease-in-out">
            View All
          </button>
        </Link>
      </div>
      {notifications && (
        <div
          className={`${
            notificationType === "success"
              ? "bg-green-500"
              : notificationType === "error"
              ? "bg-red-500"
              : "bg-blue-500"
          } text-white p-2 rounded-md mb-4 text-center`}
        >
          {notifications}
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {loading ? (
          <p>Loading products...</p>
        ) : products.length > 0 ? (
          products.slice(0, 4).map((product, index) => (
            <motion.div
              key={product.id}
              className="bg-white p-6 rounded-lg shadow-lg transition duration-300 hover:shadow-2xl hover:scale-105 relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="w-14 h-8 bg-red-500 text-white absolute top-2 left-2 rounded-md text-center text-sm flex items-center justify-center font-semibold">
                -50%
              </div>
              <img
                src={WishlistIcon}
                alt="Add to Wishlist"
                className="w-7 h-7 cursor-pointer absolute top-2 right-2 z-10 bg-white p-1 rounded-full shadow-sm hover:bg-gray-200 transition"
                onClick={() => {
                  const isInFavorites =
                    favorites && favorites.some((item) => item.id === product.id);
                  if (isInFavorites) {
                    handleRemoveFromFavorites(product);
                  } else {
                    handleAddToFavorites(product);
                  }
                }}
              />
              <motion.img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-contain rounded-md transition transform hover:scale-110"
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
                className="mt-4 w-full bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition hover:scale-105"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </motion.button>
            </motion.div>
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </motion.section>
  );
};

export default FlashSection;
