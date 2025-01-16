import React, { useContext, useState } from 'react';
import { CartContext } from '../components/CartContext';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);
  const [notification, setNotification] = useState(null);

  const handleRemoveFromCart = (product) => {
    removeFromCart(product.id);
    setNotification(`${product.title} removed from cart`);
    setTimeout(() => setNotification(null), 3000); // Hide after 3 seconds
  };

  return (
    <section className="cart-section p-8 bg-gray-100">
      <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>
      {notification && <div className="notification bg-red-100 text-red-700 p-2 rounded-md mb-4">{notification}</div>}
      <div className="cart-items bg-white p-4 rounded-lg shadow-md">
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cart.map(product => (
            <div key={product.id} className="cart-item flex items-center justify-between py-4 border-b">
              <div className="product-info flex items-center">
                <img src={product.image} alt={product.title} className="w-20 h-20 object-cover rounded-md mr-4" />
                <div className="product-details">
                  <h3 className="font-semibold text-lg">{product.title}</h3>
                  <p className="text-sm text-gray-500">Price: ${product.price}</p>
                </div>
              </div>
              <div className="quantity-subtotal flex items-center space-x-4">
                <button className="bg-gray-200 p-1 rounded-md" onClick={() => updateQuantity(product.id, product.quantity - 1)}>-</button>
                <span className="mx-2">{product.quantity}</span>
                <button className="bg-gray-200 p-1 rounded-md" onClick={() => updateQuantity(product.id, product.quantity + 1)}>+</button>
                <p className="text-red-600 font-semibold">${product.price * product.quantity}</p>
              </div>
              <button className="remove-btn text-red-500 hover:text-red-700" onClick={() => handleRemoveFromCart(product)}>
                Remove
              </button>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default Cart;
