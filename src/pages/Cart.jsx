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
      {notification && (
        <div className="notification bg-red-100 text-red-700 p-2 rounded-md mb-4">
          {notification}
        </div>
      )}
      <div className="cart-items bg-white p-4 rounded-lg shadow-md">
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="border-b p-4">Product</th>
                <th className="border-b p-4">Price</th>
                <th className="border-b p-4">Quantity</th>
                <th className="border-b p-4">Subtotal</th>
                <th className="border-b p-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map(product => (
                <tr key={product.id} className="border-b">
                  <td className="p-4 flex items-center">
                    <img src={product.image} alt={product.title} className="w-20 h-20 object-cover rounded-md mr-4" />
                    <div>
                      <h3 className="font-semibold text-lg">{product.title}</h3>
                    </div>
                  </td>
                  <td className="p-4">${product.price}</td>
                  <td className="p-4">
                    <select
                      value={product.quantity}
                      onChange={(e) => updateQuantity(product.id, parseInt(e.target.value))}
                      className="border rounded p-2"
                    >
                      {[...Array(10).keys()].map(num => (
                        <option key={num} value={num + 1}>
                          {num + 1}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td className="p-4 font-semibold text-red-600">
                    ${product.price * product.quantity}
                  </td>
                  <td className="p-4">
                    <button
                      className="text-red-500 hover:text-red-700"
                      onClick={() => handleRemoveFromCart(product)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <div className="flex justify-between mt-6">
        <div>
          <input
            type="text"
            placeholder="Coupon Code"
            className="border rounded p-2 mr-2"
          />
          <button className="bg-red-500 text-white p-2 rounded hover:bg-red-600">
            Apply Coupon
          </button>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-bold mb-2">Cart Total</h3>
          <p className="flex justify-between">
            <span>Subtotal:</span>
            <span>${cart.reduce((total, product) => total + product.price * product.quantity, 0)}</span>
          </p>
          <p className="flex justify-between">
            <span>Shipping:</span>
            <span>Free</span>
          </p>
          <p className="flex justify-between font-semibold">
            <span>Total:</span>
            <span>${cart.reduce((total, product) => total + product.price * product.quantity, 0)}</span>
          </p>
          <button className="bg-red-500 text-white p-2 w-full mt-4 rounded hover:bg-red-600">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
