import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 

function BrowseByCatogary() {
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
    
    <div className='p-8 bg-gray-100 mt-5'>
         <div className="flex items-center gap-2">
  <div className='h-10 w-5 bg-red-500 border rounded-md'></div>
  <h1 className='text-red-500 font-semibold mt-1 leading-tight'>This Month</h1>
</div>  
  <div id="categories">
    <h1 className='text-2xl font-bold mb-6'>Browse By Category</h1>
    <div className="category-container flex justify-around items-center gap-2 ">
      {categories.map((category) => (
        <Link
          to={`/products/${category}`} 
          key={category}
          className={`category cursor-pointer p-5 border border-gray-300 rounded-xl flex flex-col items-center text-center w-24 transition-all duration-300 transform hover:bg-red-500 hover:text-white text-decoration-none ${selectedCategory === category ? 'bg-red-500 text-white' : ''}`}
          onClick={() => setSelectedCategory(category)}
        >
          <span className="icon text-2xl mb-2">{categoryIcons[category]}</span>
          <span className="category-name font-bold capitalize">{category}</span>
        </Link>
      ))}
    </div>
  </div>
</div>

    
  );
  
}


export default BrowseByCatogary;
