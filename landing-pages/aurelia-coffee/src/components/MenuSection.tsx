import React, { useState } from 'react';
import { COFFEE_CATALOG } from '../data/coffeeData';
import { CoffeeCategory } from '../types/coffee';
import { useCoffee } from '../context/CoffeeContext';
import { Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CATEGORIES: { id: CoffeeCategory; label: string; icon: string }[] = [
  { id: 'espresso', label: 'Espresso', icon: '☕' },
  { id: 'milk', label: 'Milk Coffee', icon: '🥛' },
  { id: 'cold', label: 'Cold Coffee', icon: '🧊' },
  { id: 'tea', label: 'Matcha & Tea', icon: '🍵' },
  { id: 'bakery', label: 'Bakery', icon: '🥐' },
  { id: 'dessert', label: 'Desserts', icon: '🍰' },
];

export const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CoffeeCategory>('espresso');
  const { openCustomizer } = useCoffee();

  const filteredItems = COFFEE_CATALOG.filter((item) => item.category === activeCategory);

  return (
    <section className="section-menu" id="menu">
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: 650, margin: '0 auto 3rem' }}>
          <span className="eyebrow" style={{ justifyContent: 'center' }}>Savour & Pause</span>
          <h2 className="section-title">THE AURELIA MENU</h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Explore our curated coffee bar offerings, seasonal single-origin roasts, organic botanical infusions, and freshly baked viennoiserie.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="menu-filter-bar" role="tablist">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`menu-tab-btn ${isActive ? 'active' : ''}`}
                role="tab"
                aria-selected={isActive}
              >
                <span>{cat.icon}</span>
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Menu Items Grid */}
        <motion.div layout className="menu-items-grid">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className="menu-item-row"
              >
                <div className="menu-item-details">
                  <div className="menu-item-head">
                    <h4 className="menu-item-name">{item.name}</h4>
                    {item.badge && (
                      <span className={`menu-diet-badge ${item.badge.toLowerCase().includes('signature') ? 'signature' : ''}`}>
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <p className="menu-item-ingredients">{item.ingredients}</p>
                </div>

                <div className="menu-item-right">
                  <span className="menu-item-price">${item.price.toFixed(2)}</span>
                  <button
                    onClick={() => openCustomizer(item)}
                    className="btn-menu-add"
                    title="Customize & Add"
                    aria-label={`Customize ${item.name}`}
                  >
                    <Plus size={18} />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
