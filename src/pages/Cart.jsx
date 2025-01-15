import React, { useContext } from 'react';
import { CartContext } from '../components/CartContext'; // Adjust the import path as necessary

const Cart = () => {
    const { cart, removeFromCart, updateCartQuantity } = useContext(CartContext);
  
    // Calculate the total price of all products in the cart
    const total = cart.reduce((acc, product) => acc + product.price * product.quantity, 0);
  
    // Handle Quantity Change (Increment/Decrement)
    const handleQuantityChange = (product, change) => {
      if (product.quantity + change < 1) return; // Prevent decreasing quantity below 1
  
      // Update the product's quantity in the cart context
      updateCartQuantity(product.id, product.quantity + change);
    };
  return (
    <section className="cart-section p-8 bg-gray-100">
      <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>
      
      {/* Cart Product List */}
      <div className="cart-items bg-white p-4 rounded-lg shadow-md">
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="cart-list">
            {cart.map((product) => (
              <div key={product.id} className="cart-item flex items-center justify-between py-4 border-b">
                <div className="product-info flex items-center">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-20 h-20 object-cover rounded-md mr-4"
                  />
                  <div className="product-details">
                    <h3 className="font-semibold text-lg">{product.title}</h3>
                    <p className="text-sm text-gray-500">Price: ${product.price}</p>
                  </div>
                </div>
                
                {/* Quantity and Subtotal */}
                <div className="quantity-subtotal flex items-center space-x-4">
                  <div className="quantity">
                    <button
                      className="bg-gray-200 p-1 rounded-md"
                      onClick={() => handleQuantityChange(product, -1)}
                    >
                      -
                    </button>
                    <span className="mx-2">{product.quantity}</span>
                    <button
                      className="bg-gray-200 p-1 rounded-md"
                      onClick={() => handleQuantityChange(product, 1)}
                    >
                      +
                    </button>
                  </div>
                  <p className="text-red-600 font-semibold">
                    ${product.price * product.quantity}
                  </p>
                </div>
                
                {/* Remove Button */}
                <button
                  className="remove-btn text-red-500 hover:text-red-700"
                  onClick={() => removeFromCart(product.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Cart Summary */}
      <div className="cart-summary mt-6 bg-white p-4 rounded-lg shadow-md flex justify-between items-center">
        <div className="summary-item flex justify-between mb-4">
          <span className="font-semibold">Total:</span>
          <span className="text-xl text-red-600">${total.toFixed(2)}</span>
        </div>

        {/* Checkout Button positioned to the right */}
        <div className="checkout-btn ml-auto">
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none"
            onClick={() => console.log("Proceed to checkout")}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
