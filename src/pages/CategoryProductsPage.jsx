import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../components/CartContext'; 

function CategoryProductsPage() {
  const { category } = useParams(); 
  const { addToCart } = useContext(CartContext); 
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error))
      .finally(() => setLoading(false)); 
  }, [category]);

  const handleAddToCart = (product) => {
    addToCart(product); // Add product to cart
  };

  return (
    <section className="category-products-section p-8 bg-gray-100 mt-5">
      <div className="flex mb-2">
        <div className="h-10 w-5 bg-red-500 border rounded-md"></div>
        <h1 className="text-red-500 ml-1 mt-1 text-2xl font-bold mb-6 leading-tight">{category} Products</h1>
      </div>

      <div className="flex justify-between mb-6">
        <h2 className="text-2xl font-bold">Products in {category}</h2>
      </div>

      <div className="product-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {loading ? (
          <p>Loading products...</p>
        ) : (
          Array.isArray(products) && products.length > 0 ? (
            products.map((product) => (
              <div key={product.id} className="product-card bg-[#F5F5F5] p-4 rounded-lg shadow-md flex flex-col justify-between relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover rounded-md"
                />
                <div className="mt-4">
                  <h3 className="text-xl font-semibold h-16 overflow-hidden text-sm sm:text-base">{product.title}</h3>
                </div>
                <p className="text-lg text-red-600">${product.price}</p>
                <div className="rating mt-2 text-yellow-400">
                  {'★'.repeat(Math.floor(product.rating.rate))}
                  {'☆'.repeat(5 - Math.floor(product.rating.rate))}
                  <span className="ml-2 text-sm text-gray-500">({product.rating.rate})</span>
                </div>
                <button
                  className="mt-4 w-full bg-black text-white py-2 px-4 rounded-lg hover:bg-slate-500 focus:outline-none"
                  onClick={() => handleAddToCart(product)} // Add to cart
                >
                  Add to Cart
                </button>
              </div>
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
