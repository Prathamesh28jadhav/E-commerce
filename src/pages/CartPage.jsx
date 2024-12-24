import React from 'react';
import { useCart } from '../components/CartContext'; // Corrected import path
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const { cart, increaseQuantity, decreaseQuantity, getTotalPrice } = useCart();
  const navigate = useNavigate();

  const handleProceedToPayment = () => {
    console.log('Proceeding to payment with total price:', getTotalPrice());
    navigate('/payment', { state: { totalPrice: getTotalPrice() } }); // Passing total price to Payment Page
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navigation Bar */}
      <nav className="bg-green-600 text-white py-4 shadow-lg">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Cart</h1>
        </div>
      </nav>

      {/* Cart Details */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Your Cart</h2>

        {cart.length === 0 ? (
          <p className="text-center text-gray-600">Your cart is empty.</p>
        ) : (
          <div>
            {cart.map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-4 mb-4">
                <div className="flex">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-20 w-20 object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
                    <p className="text-sm text-gray-600">{product.description}</p>
                    <div className="flex items-center mt-2">
                      <button
                        onClick={() => decreaseQuantity(product.id)}
                        className="bg-gray-200 px-2 py-1 rounded-full mr-2"
                      >
                        -
                      </button>
                      <span className="text-lg font-semibold">{product.quantity}</span>
                      <button
                        onClick={() => increaseQuantity(product.id)}
                        className="bg-gray-200 px-2 py-1 rounded-full ml-2"
                      >
                        +
                      </button>
                    </div>
                    <p className="text-lg font-semibold text-green-600 mt-2">
                      ${product.price * product.quantity}.00
                    </p>
                  </div>
                </div>
              </div>
            ))}

            <div className="text-right">
              <h3 className="text-xl font-semibold text-gray-800">
                Total: ${getTotalPrice().toFixed(2)}
              </h3>
            </div>
            <button
              onClick={handleProceedToPayment}
              className="mt-4 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300"
            >
              Proceed to Payment
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
