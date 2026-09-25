import React from 'react';
import { GALLERY_IMAGES } from '../data/coffeeData';
import { Instagram, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

export const SocialGallery: React.FC = () => {
  return (
    <section className="section-instagram" id="social">
      <div className="container">
        <div className="instagram-header">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>Social Archive</span>
          <h2 className="section-title">MOMENTS AT AURELIA</h2>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="insta-handle-link"
          >
            <Instagram size={18} />
            @aureliacoffee
          </a>
        </div>

        {/* 6-Image Grid */}
        <div className="insta-masonry-grid">
          {GALLERY_IMAGES.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="insta-item"
            >
              <img src={img.image} alt={img.alt} loading="lazy" />
              <div className="insta-hover-overlay">
                <Heart size={20} fill="#ffffff" stroke="none" />
                <span className="insta-like-count">{img.likes}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
