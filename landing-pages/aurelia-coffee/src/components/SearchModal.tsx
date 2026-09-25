import React, { useState } from 'react';
import { useCoffee } from '../context/CoffeeContext';
import { COFFEE_CATALOG } from '../data/coffeeData';
import { Search, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const SearchModal: React.FC = () => {
  const { isSearchOpen, setIsSearchOpen, openCustomizer } = useCoffee();
  const [query, setQuery] = useState('');

  if (!isSearchOpen) return null;

  const q = query.trim().toLowerCase();
  const filtered = q
    ? COFFEE_CATALOG.filter(
        (i) =>
          i.name.toLowerCase().includes(q) ||
          i.desc.toLowerCase().includes(q) ||
          i.ingredients.toLowerCase().includes(q) ||
          i.category.toLowerCase().includes(q) ||
          (i.badge && i.badge.toLowerCase().includes(q))
      )
    : COFFEE_CATALOG.slice(0, 5);

  const QUICK_TAGS = ['Signature', 'Cold Brew', 'Matcha', 'Croissant', 'Espresso'];

  return (
    <AnimatePresence>
      <div className="search-modal-backdrop open" onClick={() => setIsSearchOpen(false)}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          transition={{ duration: 0.25 }}
          className="search-modal-dialog"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => setIsSearchOpen(false)}
            className="modal-close-btn"
            style={{ top: 14, right: 14 }}
            aria-label="Close search"
          >
            <X size={18} />
          </button>

          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', marginBottom: '1.2rem', color: 'var(--c-espresso)' }}>
            Search Aurelia Menu & Roasts
          </h3>

          <div className="search-input-wrap">
            <Search size={20} />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Try 'latte', 'cold brew', 'croissant', 'matcha'..."
              className="search-field"
              autoFocus
            />
          </div>

          {/* Quick Filter Tag Chips */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.4rem', alignItems: 'center' }}>
            <span style={{ fontSize: '0.72rem', color: 'var(--c-text-muted)' }}>Popular:</span>
            {QUICK_TAGS.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => setQuery(tag)}
                className="cust-pill-btn"
                style={{ padding: '0.3rem 0.75rem', fontSize: '0.75rem' }}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Results List */}
          <div className="search-results-list">
            {filtered.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '2rem', color: 'var(--c-text-muted)', fontSize: '0.88rem' }}>
                No drinks or roasts matching "{query}".
              </div>
            ) : (
              filtered.map((item) => (
                <div
                  key={item.id}
                  onClick={() => {
                    setIsSearchOpen(false);
                    openCustomizer(item);
                  }}
                  className="search-res-item"
                >
                  <img src={item.image} alt={item.name} className="search-res-img" />
                  <div style={{ flexGrow: 1 }}>
                    <div className="search-res-name">{item.name}</div>
                    <div style={{ fontSize: '0.74rem', color: 'var(--c-text-muted)' }}>{item.ingredients}</div>
                  </div>
                  <span className="search-res-price">${item.price.toFixed(2)}</span>
                </div>
              ))
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
