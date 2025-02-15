import React, { useState, useEffect, useContext, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CartContext } from "../components/CartContext";
import { FavoritesContext } from "../components/FavoratesContext";
import { useUser } from "../context/UserContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FlashSection = () => {
  const { cart, addToCart } = useContext(CartContext);
  const { favorites, addToFavorites } = useContext(FavoritesContext);
  const { user } = useUser();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

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

  const displayedProducts = useMemo(() => products.slice(0, 4), [products]);

  const handleAddToCart = (product) => {
    if (!user) {
      toast.error("Please log in to add items to the cart.");
    } else {
      const existingProduct = cart.find((item) => item.id === product.id);
      if (existingProduct) {
        toast.info(`${product.title} is already in the cart.`);
      } else {
        addToCart(product);
        toast.success(`${product.title} added to cart.`);
      }
    }
  };

  return (
    <motion.section
      className="p-10 bg-gray-100"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="mb-6 flex flex-col sm:flex-row items-center justify-between">
        <h1 className="text-red-500 text-2xl sm:text-3xl font-bold flex items-center">
          <span className="h-10 w-5 bg-red-500 border rounded-md mr-2"></span>
          Today's Flash Sales
        </h1>
        <Link to="/all-products">
          <button className="bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600 transition duration-300">
            View All
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {loading
          ? Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg animate-pulse h-80"
              ></div>
            ))
          : displayedProducts.map((product, index) => {
              const isInCart = cart.some((item) => item.id === product.id);
              return (
                <motion.div
                  key={product.id}
                  className="bg-white p-6 rounded-lg shadow-lg transition hover:shadow-2xl hover:scale-105 relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Link to={`/product/${product.id}`}>
                    <motion.img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-48 object-contain rounded-md transition transform hover:scale-110 cursor-pointer"
                    />
                  </Link>
                  <div className="mt-4 text-center">
                    <Link to={`/product/${product.id}`}>
                      <h3 className="text-lg font-semibold text-gray-800 h-16 overflow-hidden cursor-pointer hover:text-red-500">
                        {product.title}
                      </h3>
                    </Link>
                    <p className="text-xl font-bold text-red-600">${product.price}</p>
                  </div>
                  <motion.button
                    className={`mt-4 w-full py-2 px-4 rounded-lg transition ${
                      isInCart
                        ? "bg-gray-500 text-white"
                        : "bg-black text-white hover:bg-gray-800"
                    }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleAddToCart(product)}
                  >
                    {isInCart ? "Added to Cart" : "Add to Cart"}
                  </motion.button>
                </motion.div>
              );
            })}
      </div>
    </motion.section>
  );
};

export default FlashSection;