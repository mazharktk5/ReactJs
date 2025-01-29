import React, { useContext, useState } from 'react';
import { CartContext } from '../components/CartContext';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);
  const [notification, setNotification] = useState(null);

  const handleRemoveFromCart = (product) => {
    removeFromCart(product.id);
    setNotification(`${product.title} removed from cart`);
    setTimeout(() => setNotification(null), 3000);
  };

  return (
    <section className="cart-section p-4 md:p-8 bg-gray-100 font-sans">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Shopping Cart</h2>
      {notification && (
        <div className="notification bg-red-100 text-red-700 p-2 rounded-md mb-4">
          {notification}
        </div>
      )}
      <div className="cart-items bg-white p-4 rounded-lg shadow-md">
        {cart.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="border-b p-2 md:p-4 text-gray-700">Product</th>
                  <th className="border-b p-2 md:p-4 text-gray-700">Price</th>
                  <th className="border-b p-2 md:p-4 text-gray-700">Quantity</th>
                  <th className="border-b p-2 md:p-4 text-gray-700">Subtotal</th>
                  <th className="border-b p-2 md:p-4 text-gray-700">Action</th>
                </tr>
              </thead>
              <tbody>
                {cart.map(product => (
                  <tr key={product.id} className="border-b">
                    <td className="p-2 md:p-4 flex flex-col md:flex-row items-start md:items-center">
                      <img 
                        src={product.image} 
                        alt={product.title} 
                        className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-md mb-2 md:mb-0 md:mr-4" 
                      />
                      <div>
                        <h3 className="font-semibold text-base md:text-lg text-gray-800">
                          {product.title}
                        </h3>
                      </div>
                    </td>
                    <td className="p-2 md:p-4 text-gray-700">${product.price}</td>
                    <td className="p-2 md:p-4">
                      <select
                        value={product.quantity}
                        onChange={(e) => updateQuantity(product.id, parseInt(e.target.value))}
                        className="border rounded p-2 text-gray-700 text-sm md:text-base"
                      >
                        {[...Array(5).keys()].map(num => (
                          <option key={num} value={num + 1}>
                            {num + 1}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td className="p-2 md:p-4 font-semibold text-red-600">
                      ${product.price * product.quantity}
                    </td>
                    <td className="p-2 md:p-4">
                      <button
                        className="text-red-500 hover:text-red-700 text-sm md:text-base"
                        onClick={() => handleRemoveFromCart(product)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      <div className="flex flex-col lg:flex-row justify-between mt-6 gap-4">
      <div className="flex flex-col md:flex-row items-center w-full gap-2 md:gap-4">
  <input
    type="text"
    placeholder="Coupon Code"
    className="border rounded p-3 w-full md:w-60 lg:w-80 text-sm md:text-base"
  />
  <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 w-full md:w-auto text-sm md:text-base">
    Apply Coupon
  </button>
</div>

        <div className="bg-white p-4 md:p-6 lg:p-8 flex flex-col gap-2 rounded-lg shadow-md w-full lg:max-w-md">
          <h3 className="text-lg md:text-xl font-bold mb-2 text-center text-gray-800">
            Cart Total
          </h3>
          <div className="space-y-2">
            <p className="flex justify-between text-gray-700">
              <span>Subtotal:</span>
              <span>${cart.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2)}</span>
            </p>
            <p className="flex justify-between text-gray-700">
              <span>Shipping:</span>
              <span>Free</span>
            </p>
            <p className="flex justify-between font-semibold text-gray-800 border-t pt-2">
              <span>Total:</span>
              <span>${cart.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2)}</span>
            </p>
          </div>
          <button className="bg-red-500 text-white p-2 w-full mt-4 rounded hover:bg-red-600 text-sm md:text-base">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cart;