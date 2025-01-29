import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import { CartContext } from "../components/CartContext";
import { useFavorites } from "../components/FavoratesContext";
import SearchBar from "../components/SearchBar";
import useProducts from "../hooks/useProducts";
import Wishlist from "../assets/images/Wishlist.png";

const AllBestSellings = () => {
  const { addToCart, cart } = useContext(CartContext);
  const { favorites, addToFavorites, removeFromFavorites } = useFavorites();
  const { products, loading, error } = useProducts();
  const [searchTerm, setSearchTerm] = useState("");
  const [notifications, setNotifications] = useState(null);
  const [notificationType, setNotificationType] = useState(null);

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

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm)
  );

  return (
    <section className="p-10 bg-gray-100">
      <motion.h2
        className="text-3xl font-bold mb-6 text-center text-gray-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Best Sellings
      </motion.h2>

      <SearchBar searchTerm={searchTerm} handleSearch={handleSearch} />

      {notifications && (
        <motion.div
          className={`${
            notificationType === "success"
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

      {loading ? (
        <p className="text-center text-gray-600">Loading products...</p>
      ) : error ? (
        <p className="text-center text-red-500">Error: {error}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
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
                  src={Wishlist}
                  alt="Add to Wishlist"
                  className="w-7 h-7 cursor-pointer absolute top-2 right-2 z-10 bg-white p-1 rounded-full shadow-sm hover:bg-gray-200 transition"
                  whileHover={{ scale: 1.2 }}
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
                  className="w-full h-48 object-contain rounded-md"
                  whileHover={{ scale: 1.1 }}
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
            <p className="text-center text-gray-600">No products available.</p>
          )}
        </div>
      )}
    </section>
  );
};

export default AllBestSellings;