import React from 'react';
import { useCoffee } from '../context/CoffeeContext';
import { COFFEE_CATALOG } from '../data/coffeeData';
import { X, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const FavoritesDrawer: React.FC = () => {
  const { favorites, isFavOpen, setIsFavOpen, toggleFavorite, openCustomizer } = useCoffee();

  if (!isFavOpen) return null;

  const favoriteItems = COFFEE_CATALOG.filter((item) => favorites.has(item.id));

  return (
    <AnimatePresence>
      <div className="favorites-panel-backdrop open" onClick={() => setIsFavOpen(false)}>
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
          className="cart-panel"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="cart-header">
            <div className="cart-title-row">
              <h3 className="cart-title">Saved Rituals</h3>
            </div>
            <button
              onClick={() => setIsFavOpen(false)}
              className="cart-close-btn"
              aria-label="Close favorites"
            >
              <X size={20} />
            </button>
          </div>

          <div className="cart-items-list">
            {favoriteItems.length === 0 ? (
              <div className="cart-empty-view">
                <div className="cart-empty-icon">
                  <Heart size={32} />
                </div>
                <h4 className="cart-empty-title">No saved rituals yet</h4>
                <p className="cart-empty-desc">
                  Click the heart icon on any coffee or delicacy to save it to your ritual journal.
                </p>
              </div>
            ) : (
              favoriteItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} className="cart-item-img" />
                  <div className="cart-item-info">
                    <h5 className="cart-item-name">{item.name}</h5>
                    <p className="cart-item-customs">{item.desc}</p>
                    <div className="cart-item-bottom">
                      <span className="cart-item-price">${item.price.toFixed(2)}</span>
                      <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                        <button
                          onClick={() => {
                            setIsFavOpen(false);
                            openCustomizer(item);
                          }}
                          className="btn-primary"
                          style={{ padding: '0.4rem 0.9rem', fontSize: '0.72rem' }}
                        >
                          Order
                        </button>
                        <button
                          onClick={() => toggleFavorite(item.id)}
                          className="cart-remove-btn"
                          title="Remove from favorites"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
