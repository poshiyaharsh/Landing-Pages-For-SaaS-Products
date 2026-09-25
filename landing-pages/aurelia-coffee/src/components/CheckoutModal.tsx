import React from 'react';
import { useCoffee } from '../context/CoffeeContext';
import { Check, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const CheckoutModal: React.FC = () => {
  const { checkoutTicket, setCheckoutTicket, showToast } = useCoffee();

  if (!checkoutTicket) return null;

  const handleClose = () => {
    setCheckoutTicket(null);
    showToast('Your coffee ritual is in preparation!');
  };

  return (
    <AnimatePresence>
      <div className="modal-backdrop open" onClick={handleClose}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
          className="modal-dialog"
          style={{ maxWidth: 480, textAlign: 'center', padding: '2.5rem 2rem' }}
          onClick={(e) => e.stopPropagation()}
        >
          <button onClick={handleClose} className="modal-close-btn" aria-label="Close receipt">
            <X size={18} />
          </button>

          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: '50%',
              background: 'var(--c-gold-light)',
              color: 'var(--c-caramel)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.4rem'
            }}
          >
            <Check size={32} strokeWidth={2.5} />
          </div>

          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: 'var(--c-espresso)', marginBottom: '0.5rem' }}>
            Ritual In Progress
          </h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--c-text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
            Your order has been transmitted directly to the Aurelia brew bar. Our baristas are grinding and calibrating your selections now.
          </p>

          <div className="order-ticket-box">
            <div className="ticket-row">
              <span>Order Number</span>
              <strong style={{ color: 'var(--c-espresso)', fontFamily: 'var(--font-mono)' }}>
                #{checkoutTicket.orderNumber}
              </strong>
            </div>
            <div className="ticket-row">
              <span>Estimated Prep Time</span>
              <strong style={{ color: 'var(--c-caramel)' }}>{checkoutTicket.prepTime}</strong>
            </div>
            <div className="ticket-row">
              <span>Pickup Counter</span>
              <span>{checkoutTicket.pickupAddress}</span>
            </div>
            <div className="ticket-row">
              <span>Total Items</span>
              <span>{checkoutTicket.itemCount} items</span>
            </div>
            <div
              className="ticket-row"
              style={{
                borderTop: '1px dashed var(--c-cream-border)',
                marginTop: '0.6rem',
                paddingTop: '0.6rem',
                fontWeight: 600,
                color: 'var(--c-espresso)'
              }}
            >
              <span>Total Paid</span>
              <span style={{ color: 'var(--c-caramel)', fontFamily: 'var(--font-serif)', fontSize: '1.25rem' }}>
                ${checkoutTicket.total.toFixed(2)}
              </span>
            </div>
          </div>

          <button onClick={handleClose} className="btn-primary" style={{ width: '100%' }}>
            Done & Enjoy
          </button>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
