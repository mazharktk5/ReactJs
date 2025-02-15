import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../components/CartContext";
import { FavoritesContext } from "../components/FavoratesContext";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useContext(CartContext);
  const { addToFavorites } = useContext(FavoritesContext);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);

  if (loading) {
    return <p className="text-center text-lg font-semibold">Loading product details...</p>;
  }

  if (!product) {
    return <p className="text-center text-red-500 text-lg font-semibold">Product not found!</p>;
  }

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="w-80 h-80 object-contain border p-4 rounded-lg shadow-md"
          />
        </div>

        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>
          <p className="text-lg text-gray-600 mt-2">{product.category}</p>
          <p className="text-2xl font-semibold text-red-600 mt-4">${product.price}</p>
          <p className="text-gray-700 mt-4">{product.description}</p>

          
          <div className="mt-6 flex gap-4">
            <button
              onClick={() => addToCart(product)}
              className="bg-black text-white py-2 px-6 rounded-lg hover:bg-gray-800 transition"
            >
              Add to Cart
            </button>
            <button
              onClick={() => addToFavorites(product)}
              className="bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600 transition"
            >
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
