import React, { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import { CartContext } from "../components/CartContext";
import { FavoritesContext } from "../components/FavoratesContext";
import WishlistIcon from "../assets/images/Wishlist.png";
import SearchBar from "../components/SearchBar";

const AllProducts = () => {
  const { addToCart } = useContext(CartContext);
  const { favorites, addToFavorites, removeFromFavorites } = useContext(FavoritesContext);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notification, setNotification] = useState(null);
  const [notificationType, setNotificationType] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

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
      .catch((error) => console.error("Error fetching products:", error))
      .finally(() => setLoading(false));
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
    setNotification(`${product.title} added to cart.`);
    setNotificationType("success");
    setTimeout(() => setNotification(null), 3000);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm)
  );

  const handleAddToFavorites = (product) => {
    addToFavorites(product);
    setNotification(`${product.title} added to wishlist.`);
    setNotificationType("success");
    setTimeout(() => setNotification(null), 3000);
  };

  const handleRemoveFromFavorites = (product) => {
    removeFromFavorites(product.id);
    setNotification(`${product.title} removed from wishlist.`);
    setNotificationType("error");
    setTimeout(() => setNotification(null), 3000);
  };

  return (
    <motion.section
      className="p-10 bg-gray-100"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="mb-6 flex flex-col sm:flex-row items-center justify-between">
        <h1 className="text-red-500 text-2xl sm:text-3xl font-bold">
          All Products
        </h1>
        <div className="flex justify-center w-full sm:w-auto">
          <SearchBar searchTerm={searchTerm} handleSearch={handleSearch} />
        </div>
      </div>

      {notification && (
        <div
          className={`${
            notificationType === "success"
              ? "bg-green-500"
              : notificationType === "error"
              ? "bg-red-500"
              : "bg-blue-500"
          } text-white p-2 rounded-md mb-4 text-center`}
        >
          {notification}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {loading ? (
          <p>Loading products...</p>
        ) : filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="w-14 h-8 bg-red-500 text-white absolute top-2 left-2 rounded-md text-center text-sm flex items-center justify-center font-semibold">
                -40%
              </div>
              <img
                src={WishlistIcon}
                alt="Add to Wishlist"
                className="w-7 h-7 cursor-pointer absolute top-2 right-2 z-10 bg-white p-1 rounded-full shadow-sm hover:bg-gray-200 transition"
                onClick={() => {
                  const isInFavorites = favorites.some((item) => item.id === product.id);
                  isInFavorites
                    ? handleRemoveFromFavorites(product)
                    : handleAddToFavorites(product);
                }}
              />
              <motion.img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-contain rounded-md"
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

export default AllProducts;
