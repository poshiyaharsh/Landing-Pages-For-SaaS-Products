import React from 'react';
import { useCoffee } from '../context/CoffeeContext';
import { X, ShoppingBag, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateCartQuantity,
    clearCart,
    setCheckoutTicket,
    triggerConfetti
  } = useCoffee();

  if (!isCartOpen) return null;

  const totalItemsCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cart.reduce((acc, item) => acc + item.unitPrice * item.quantity, 0);
  const tax = subtotal * 0.0825;
  const total = subtotal + tax;

  const handleCheckout = () => {
    const orderNum = 'AUR-' + Math.floor(1000 + Math.random() * 9000);
    setCheckoutTicket({
      orderNumber: orderNum,
      itemCount: totalItemsCount,
      total: total,
      prepTime: '10–12 Minutes',
      pickupAddress: '123 Brew St, Bodakdev, Ahmedabad'
    });
    setIsCartOpen(false);
    triggerConfetti();
    clearCart();
  };

  return (
    <AnimatePresence>
      <div className="cart-panel-backdrop open" onClick={() => setIsCartOpen(false)}>
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
          className="cart-panel"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="cart-header">
            <div className="cart-title-row">
              <h3 className="cart-title">Your Order</h3>
              <span className="cart-count-badge">
                {totalItemsCount} {totalItemsCount === 1 ? 'item' : 'items'}
              </span>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="cart-close-btn"
              aria-label="Close cart"
            >
              <X size={20} />
            </button>
          </div>

          {/* Items List */}
          <div className="cart-items-list">
            {cart.length === 0 ? (
              <div className="cart-empty-view">
                <div className="cart-empty-icon">
                  <ShoppingBag size={32} />
                </div>
                <h4 className="cart-empty-title">Your ritual awaits</h4>
                <p className="cart-empty-desc">
                  Your order bag is currently empty. Explore our coffee menu to craft your first brew.
                </p>
                <button
                  className="btn-primary"
                  onClick={() => {
                    setIsCartOpen(false);
                    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  style={{ padding: '0.75rem 1.6rem', fontSize: '0.8rem' }}
                >
                  Explore Menu
                </button>
              </div>
            ) : (
              cart.map((item) => {
                const itemTotal = item.unitPrice * item.quantity;
                const optionsSummary = [
                  item.temp.toUpperCase(),
                  item.size,
                  item.milk !== 'Whole Organic Milk' ? item.milk : null,
                  item.syrup !== 'None' ? item.syrup : null,
                  item.extraShot ? '+ Extra Shot' : null
                ]
                  .filter(Boolean)
                  .join(' • ');

                return (
                  <div key={item.uniqueId} className="cart-item">
                    <img src={item.image} alt={item.name} className="cart-item-img" />
                    <div className="cart-item-info">
                      <h5 className="cart-item-name">{item.name}</h5>
                      <p className="cart-item-customs">{optionsSummary}</p>
                      {item.notes && (
                        <p style={{ fontSize: '0.72rem', color: 'var(--c-caramel)', fontStyle: 'italic', marginBottom: '0.3rem' }}>
                          Note: "{item.notes}"
                        </p>
                      )}
                      <div className="cart-item-bottom">
                        <span className="cart-item-price">${itemTotal.toFixed(2)}</span>
                        <div className="cart-item-qty">
                          <button
                            onClick={() => updateCartQuantity(item.uniqueId, -1)}
                            className="cart-qty-btn"
                          >
                            −
                          </button>
                          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', minWidth: 18, textAlign: 'center' }}>
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateCartQuantity(item.uniqueId, 1)}
                            className="cart-qty-btn"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Footer */}
          {cart.length > 0 && (
            <div className="cart-footer">
              <div className="cart-subtotal-row">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="cart-subtotal-row">
                <span>Estimated Tax (8.25%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="cart-total-row">
                <span className="cart-total-label">Total Amount</span>
                <span className="cart-total-val">${total.toFixed(2)}</span>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleCheckout}
                className="btn-checkout"
              >
                Proceed to Checkout
                <ArrowRight size={18} />
              </motion.button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
