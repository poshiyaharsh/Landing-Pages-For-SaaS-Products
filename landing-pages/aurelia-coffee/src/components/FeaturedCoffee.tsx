import React from 'react';
import { COFFEE_CATALOG } from '../data/coffeeData';
import { useCoffee } from '../context/CoffeeContext';
import { Heart, Plus } from 'lucide-react';
import { motion } from 'framer-motion';

export const FeaturedCoffee: React.FC = () => {
  const { favorites, toggleFavorite, openCustomizer } = useCoffee();

  // Pick first 6 core drinks for the featured section
  const featuredDrinks = COFFEE_CATALOG.slice(0, 6);

  return (
    <section className="section-featured" id="featured">
      <div className="container">
        <div className="section-header-row">
          <div>
            <span className="eyebrow">Curated Selections</span>
            <h2 className="section-title">FAVORITES, BREWED WITH INTENTION</h2>
          </div>
          <p className="section-desc">
            Handcrafted beverages celebrated for balance, delicate sweetness, and velvety texture. Served in custom ceramic stoneware.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="featured-grid">
          {featuredDrinks.map((item, index) => {
            const isFav = favorites.has(item.id);

            return (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="product-card"
              >
                <div className="card-media-wrapper">
                  <span className={`card-temp-badge ${item.temp === 'iced' ? 'iced' : ''}`}>
                    {item.temp === 'both' ? 'Hot / Iced' : item.temp.toUpperCase()}
                  </span>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(item.id);
                    }}
                    className={`card-favorite-btn ${isFav ? 'favorited' : ''}`}
                    aria-label="Save to Favorites"
                  >
                    <Heart size={18} fill={isFav ? 'currentColor' : 'none'} />
                  </button>

                  <img src={item.image} alt={item.name} loading="lazy" />
                </div>

                <div className="card-body">
                  <div className="card-title-row">
                    <h3 className="product-name">{item.name}</h3>
                    <span className="product-price">${item.price.toFixed(2)}</span>
                  </div>

                  <p className="product-desc">{item.desc}</p>

                  <div className="card-footer">
                    <span className="roast-pill">{item.roast}</span>
                    <button
                      onClick={() => openCustomizer(item)}
                      className="btn-add-cart"
                    >
                      <Plus size={14} />
                      <span>Customize</span>
                    </button>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
