import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function BrowseByCategory() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categoryIcons = {
    "electronics": "🔌",
    "jewelery": "💎",
    "men's clothing": "👔",
    "women's clothing": "👗"
  };

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log('Categories:', data);
        setCategories(data);
      })
      .catch((error) => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  return (
    <div className="p-8 bg-gray-100 mt-5">
      <div className="flex items-center gap-2">
        <div className="h-10 w-5 bg-red-500 border rounded-md"></div>
        <h1 className="text-red-500 ml-1 text-2xl font-bold leading-tight">Explore</h1>
      </div>

      <div id="categories" className="mt-5">
        <h1 className="text-2xl font-bold mb-6">Browse By Category</h1>

       
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {categories.map((category) => (
            <motion.div
              key={category}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Link
                to={`/products/${category}`}
                className={`category cursor-pointer p-5 border border-gray-300 rounded-xl flex flex-col items-center text-center transition-all duration-300 transform shadow-lg hover:bg-red-500 hover:text-white ${selectedCategory === category ? 'bg-red-500 text-white' : 'bg-white'}`}
                onClick={() => setSelectedCategory(category)}
              >
                
                <span className="icon text-4xl mb-2">{categoryIcons[category] || "📦"}</span>
                
                <span className="category-name font-bold capitalize text-sm sm:text-base">{category}</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BrowseByCategory;
