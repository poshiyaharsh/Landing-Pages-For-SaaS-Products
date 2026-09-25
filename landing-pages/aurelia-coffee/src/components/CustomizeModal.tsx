import React, { useState, useEffect } from 'react';
import { useCoffee } from '../context/CoffeeContext';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const CustomizeModal: React.FC = () => {
  const { isCustomizing, selectedItemForCustomizing, closeCustomizer, addToCart } = useCoffee();

  const [temp, setTemp] = useState<'hot' | 'iced'>('hot');
  const [size, setSize] = useState('Regular (12 oz)');
  const [sizeExtra, setSizeExtra] = useState(0.50);
  const [milk, setMilk] = useState('Whole Organic Milk');
  const [milkExtra, setMilkExtra] = useState(0.00);
  const [syrup, setSyrup] = useState('None');
  const [syrupExtra, setSyrupExtra] = useState(0.00);
  const [extraShot, setExtraShot] = useState(false);
  const [notes, setNotes] = useState('');
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (selectedItemForCustomizing) {
      setTemp(selectedItemForCustomizing.temp === 'iced' ? 'iced' : 'hot');
      setSize('Regular (12 oz)');
      setSizeExtra(0.50);
      setMilk('Whole Organic Milk');
      setMilkExtra(0.00);
      setSyrup('None');
      setSyrupExtra(0.00);
      setExtraShot(false);
      setNotes('');
      setQuantity(1);
    }
  }, [selectedItemForCustomizing]);

  if (!isCustomizing || !selectedItemForCustomizing) return null;

  const basePrice = selectedItemForCustomizing.price;
  const unitPrice = basePrice + sizeExtra + milkExtra + syrupExtra + (extraShot ? 1.25 : 0);
  const totalPrice = unitPrice * quantity;

  const handleAddToCart = () => {
    addToCart({
      uniqueId: Date.now() + Math.random().toString(36).substring(2, 7),
      id: selectedItemForCustomizing.id,
      name: selectedItemForCustomizing.name,
      image: selectedItemForCustomizing.image,
      unitPrice,
      size,
      temp,
      milk,
      syrup,
      extraShot,
      notes: notes.trim(),
      quantity
    });
    closeCustomizer();
  };

  const SIZES = [
    { label: 'Small (8 oz)', extra: 0.00 },
    { label: 'Regular (12 oz)', extra: 0.50 },
    { label: 'Grande (16 oz)', extra: 1.00 }
  ];

  const MILKS = [
    { label: 'Whole Organic Milk', extra: 0.00 },
    { label: 'Oatly Barista Oat', extra: 0.75 },
    { label: 'House Almond Milk', extra: 0.75 },
    { label: 'Sicilian Pistachio', extra: 1.00 },
    { label: 'Coconut Cream', extra: 0.75 }
  ];

  const SYRUPS = [
    { label: 'None', extra: 0.00 },
    { label: 'Madagascar Vanilla', extra: 0.60 },
    { label: 'Salted Caramel', extra: 0.60 },
    { label: 'French Lavender', extra: 0.75 },
    { label: 'Cardamom & Honey', extra: 0.75 }
  ];

  return (
    <AnimatePresence>
      <div className="modal-backdrop open" onClick={closeCustomizer}>
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.96 }}
          transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
          className="modal-dialog"
          onClick={(e) => e.stopPropagation()}
        >
          <button onClick={closeCustomizer} className="modal-close-btn" aria-label="Close modal">
            <X size={20} />
          </button>

          {/* Hero Image */}
          <div className="modal-hero-img-box">
            <img src={selectedItemForCustomizing.image} alt={selectedItemForCustomizing.name} />
          </div>

          <div className="modal-content-inner">
            <div className="modal-item-title-row">
              <h3 className="modal-item-title">{selectedItemForCustomizing.name}</h3>
              <span className="modal-item-price">${unitPrice.toFixed(2)}</span>
            </div>
            <p className="modal-item-desc">{selectedItemForCustomizing.desc}</p>

            {/* Temperature */}
            <div className="cust-section">
              <div className="cust-label">
                <span>Temperature</span>
                <span style={{ color: 'var(--c-espresso)', fontWeight: 500 }}>Required</span>
              </div>
              <div className="cust-options-pills">
                <button
                  type="button"
                  onClick={() => setTemp('hot')}
                  className={`cust-pill-btn ${temp === 'hot' ? 'active' : ''}`}
                >
                  🔥 Hot
                </button>
                <button
                  type="button"
                  onClick={() => setTemp('iced')}
                  className={`cust-pill-btn ${temp === 'iced' ? 'active' : ''}`}
                >
                  🧊 Iced
                </button>
              </div>
            </div>

            {/* Size */}
            <div className="cust-section">
              <div className="cust-label">
                <span>Cup Size</span>
                <span style={{ color: 'var(--c-espresso)', fontWeight: 500 }}>Select One</span>
              </div>
              <div className="cust-options-pills">
                {SIZES.map((s) => (
                  <button
                    key={s.label}
                    type="button"
                    onClick={() => {
                      setSize(s.label);
                      setSizeExtra(s.extra);
                    }}
                    className={`cust-pill-btn ${size === s.label ? 'active' : ''}`}
                  >
                    {s.label} {s.extra > 0 && `(+$${s.extra.toFixed(2)})`}
                  </button>
                ))}
              </div>
            </div>

            {/* Milk */}
            <div className="cust-section">
              <div className="cust-label">
                <span>Choice of Milk</span>
                <span style={{ color: 'var(--c-text-muted)' }}>Customizable</span>
              </div>
              <div className="cust-options-pills">
                {MILKS.map((m) => (
                  <button
                    key={m.label}
                    type="button"
                    onClick={() => {
                      setMilk(m.label);
                      setMilkExtra(m.extra);
                    }}
                    className={`cust-pill-btn ${milk === m.label ? 'active' : ''}`}
                  >
                    {m.label} {m.extra > 0 && `(+$${m.extra.toFixed(2)})`}
                  </button>
                ))}
              </div>
            </div>

            {/* Flavors */}
            <div className="cust-section">
              <div className="cust-label">
                <span>Artisanal Flavors</span>
                <span style={{ color: 'var(--c-text-muted)' }}>Optional</span>
              </div>
              <div className="cust-options-pills">
                {SYRUPS.map((s) => (
                  <button
                    key={s.label}
                    type="button"
                    onClick={() => {
                      setSyrup(s.label);
                      setSyrupExtra(s.extra);
                    }}
                    className={`cust-pill-btn ${syrup === s.label ? 'active' : ''}`}
                  >
                    {s.label} {s.extra > 0 && `(+$${s.extra.toFixed(2)})`}
                  </button>
                ))}
              </div>
            </div>

            {/* Extra Shot */}
            <div className="cust-section">
              <div className="cust-label">
                <span>Espresso Dose</span>
              </div>
              <button
                type="button"
                onClick={() => setExtraShot(!extraShot)}
                className={`cust-pill-btn ${extraShot ? 'active' : ''}`}
              >
                + Add Extra Espresso Double Shot (+$1.25)
              </button>
            </div>

            {/* Notes */}
            <div className="cust-section" style={{ borderBottom: 'none', marginBottom: '0.5rem' }}>
              <div className="cust-label">
                <span>Special Preparation Notes</span>
              </div>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="cust-textarea"
                placeholder="e.g. extra hot, light foam, separate lid..."
              />
            </div>

            {/* Quantity Stepper & Submit */}
            <div className="modal-submit-row">
              <div className="qty-counter">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="qty-btn"
                  aria-label="Decrease quantity"
                >
                  <Minus size={16} />
                </button>
                <span className="qty-value">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity(Math.min(20, quantity + 1))}
                  className="qty-btn"
                  aria-label="Increase quantity"
                >
                  <Plus size={16} />
                </button>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleAddToCart}
                className="btn-add-modal-order"
              >
                <ShoppingBag size={18} />
                <span>Add to Order • ${totalPrice.toFixed(2)}</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
