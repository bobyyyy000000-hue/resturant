import React, { useState } from 'react';
import { X, Minus, Plus, ShoppingBag, Printer } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { state, removeItem, updateQuantity, clearCart, closeCart } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderId, setOrderId] = useState('');

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    const newOrderId = `ORD-${Date.now()}`;
    setOrderId(newOrderId);
    setOrderPlaced(true);
  };

  const printReceipt = () => {
    const receiptWindow = window.open('', '_blank');
    if (receiptWindow) {
      receiptWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>Receipt - ${orderId}</title>
          <style>
            body { font-family: Arial, sans-serif; max-width: 400px; margin: 0 auto; padding: 20px; }
            .header { text-align: center; border-bottom: 2px solid #000; padding-bottom: 10px; margin-bottom: 20px; }
            .item { display: flex; justify-content: space-between; margin-bottom: 10px; }
            .total { border-top: 2px solid #000; padding-top: 10px; margin-top: 20px; font-weight: bold; }
            .footer { text-align: center; margin-top: 30px; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>Lumière Restaurant</h1>
            <p>123 Culinary Avenue, NY 10001</p>
            <p>Phone: (555) 123-4567</p>
            <p>Order #: ${orderId}</p>
            <p>Date: ${new Date().toLocaleDateString()}</p>
          </div>
          
          <div class="customer">
            <h3>Customer Information:</h3>
            <p>Name: ${customerInfo.name}</p>
            <p>Email: ${customerInfo.email}</p>
            <p>Phone: ${customerInfo.phone}</p>
          </div>
          
          <div class="items">
            <h3>Order Items:</h3>
            ${state.items.map(item => `
              <div class="item">
                <span>${item.dish.name} x${item.quantity}</span>
                <span>$${(item.dish.price * item.quantity).toFixed(2)}</span>
              </div>
            `).join('')}
          </div>
          
          <div class="total">
            <div class="item">
              <span>Subtotal:</span>
              <span>$${state.total.toFixed(2)}</span>
            </div>
            <div class="item">
              <span>Tax (8.5%):</span>
              <span>$${(state.total * 0.085).toFixed(2)}</span>
            </div>
            <div class="item">
              <span>Total:</span>
              <span>$${(state.total * 1.085).toFixed(2)}</span>
            </div>
          </div>
          
          <div class="footer">
            <p>Thank you for dining with us!</p>
            <p>Visit us again soon</p>
          </div>
        </body>
        </html>
      `);
      receiptWindow.document.close();
      receiptWindow.print();
    }
  };

  const resetOrder = () => {
    setOrderPlaced(false);
    setShowCheckout(false);
    setCustomerInfo({ name: '', email: '', phone: '' });
    setOrderId('');
    clearCart();
  };

  if (!state.isOpen) return null;

  if (orderPlaced) {
    return (
      <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg max-w-md w-full p-8 text-center">
          <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingBag size={32} className="text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Order Confirmed!</h2>
          <p className="text-gray-600 mb-6">
            Your order #{orderId} has been placed successfully. We'll prepare your delicious meal with care.
          </p>
          <div className="space-y-3">
            <button
              onClick={printReceipt}
              className="w-full bg-gold text-black py-3 rounded-lg font-semibold hover:bg-gold/90 transition-colors flex items-center justify-center space-x-2"
            >
              <Printer size={20} />
              <span>Print Receipt</span>
            </button>
            <button
              onClick={resetOrder}
              className="w-full bg-gray-800 text-white py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
            >
              Place Another Order
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex">
      <div className="ml-auto bg-white w-full max-w-md h-full overflow-y-auto">
        <div className="p-6 border-b">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-800">Your Cart</h2>
            <button
              onClick={closeCart}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        {state.items.length === 0 ? (
          <div className="p-6 text-center">
            <ShoppingBag size={64} className="text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">Your cart is empty</p>
            <p className="text-gray-400">Add some delicious items from our menu!</p>
          </div>
        ) : (
          <>
            <div className="p-6 space-y-4 flex-1">
              {state.items.map((item) => (
                <div key={item.dish.id} className="flex items-center space-x-4 bg-gray-50 p-4 rounded-lg">
                  <img
                    src={item.dish.image}
                    alt={item.dish.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800">{item.dish.name}</h3>
                    <p className="text-gold font-bold">${item.dish.price}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => updateQuantity(item.dish.id, item.quantity - 1)}
                      className="bg-gray-200 hover:bg-gray-300 rounded-full p-1 transition-colors"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="font-semibold w-8 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.dish.id, item.quantity + 1)}
                      className="bg-gray-200 hover:bg-gray-300 rounded-full p-1 transition-colors"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                  <button
                    onClick={() => removeItem(item.dish.id)}
                    className="text-red-500 hover:text-red-700 transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>
              ))}
            </div>

            <div className="p-6 border-t bg-gray-50">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold text-gray-800">Total:</span>
                <span className="text-2xl font-bold text-gold">${state.total.toFixed(2)}</span>
              </div>

              {!showCheckout ? (
                <div className="space-y-3">
                  <button
                    onClick={() => setShowCheckout(true)}
                    className="w-full bg-gold text-black py-3 rounded-lg font-semibold hover:bg-gold/90 transition-colors"
                  >
                    Proceed to Checkout
                  </button>
                  <button
                    onClick={clearCart}
                    className="w-full bg-gray-200 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                  >
                    Clear Cart
                  </button>
                </div>
              ) : (
                <form onSubmit={handleCheckout} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={customerInfo.name}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={customerInfo.email}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, email: e.target.value })}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      required
                      value={customerInfo.phone}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div className="space-y-3">
                    <button
                      type="submit"
                      className="w-full bg-gold text-black py-3 rounded-lg font-semibold hover:bg-gold/90 transition-colors"
                    >
                      Place Order
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowCheckout(false)}
                      className="w-full bg-gray-200 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                    >
                      Back to Cart
                    </button>
                  </div>
                </form>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;