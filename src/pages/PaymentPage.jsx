import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentPage = ({ selectedProducts = [] }) => {
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    gpayId: '',
    paymentMode: 'card',
  });
  const [orderPlaced, setOrderPlaced] = useState(false);
  const navigate = useNavigate();

  const handlePayment = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setOrderPlaced(true);
      setTimeout(() => {
        navigate('/');
      }, 2000);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
      <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-lg transform transition duration-500 hover:scale-105">
        {orderPlaced ? (
          <div className="text-center">
            <h1 className="text-3xl font-bold text-green-600 animate-fade-in">
              🎉 Order Placed Successfully!
            </h1>
            <p className="mt-4 text-gray-600 text-lg">
              Payment successful! Your order has been placed successfully. Redirecting to the home page...
            </p>
            <div className="flex justify-center mt-6">
              <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          </div>
        ) : (
          <>
            <h1 className="text-3xl font-extrabold mb-6 text-gray-800 text-center">
              Payment Details
            </h1>
            <form onSubmit={handlePayment} className="space-y-6">
              {/* Payment Mode Selector */}
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Select Payment Mode:
                </label>
                <select
                  value={paymentDetails.paymentMode}
                  onChange={(e) =>
                    setPaymentDetails({ ...paymentDetails, paymentMode: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  <option value="card">Credit/Debit Card</option>
                  <option value="gpay">Google Pay</option>
                </select>
              </div>

              {/* Card Payment Fields */}
              {paymentDetails.paymentMode === 'card' && (
                <>
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      Card Number:
                    </label>
                    <input
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      value={paymentDetails.cardNumber}
                      onChange={(e) =>
                        setPaymentDetails({ ...paymentDetails, cardNumber: e.target.value })
                      }
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-2">
                        Expiry Date:
                      </label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        value={paymentDetails.expiryDate}
                        onChange={(e) =>
                          setPaymentDetails({ ...paymentDetails, expiryDate: e.target.value })
                        }
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-2">
                        CVV:
                      </label>
                      <input
                        type="text"
                        placeholder="123"
                        value={paymentDetails.cvv}
                        onChange={(e) =>
                          setPaymentDetails({ ...paymentDetails, cvv: e.target.value })
                        }
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                      />
                    </div>
                  </div>
                </>
              )}

              {/* GPay Payment Fields */}
              {paymentDetails.paymentMode === 'gpay' && (
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Google Pay ID:
                  </label>
                  <input
                    type="text"
                    placeholder="example@oksbi"
                    value={paymentDetails.gpayId}
                    onChange={(e) =>
                      setPaymentDetails({ ...paymentDetails, gpayId: e.target.value })
                    }
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300"
              >
                Proceed to Payment
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default PaymentPage;
