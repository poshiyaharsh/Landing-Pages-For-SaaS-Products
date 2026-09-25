import React from 'react';
import { SIGNATURE_MOMENTS } from '../data/coffeeData';
import { motion } from 'framer-motion';

export const SignatureMoments: React.FC = () => {
  return (
    <section className="section-signature" id="moments">
      <div className="signature-glow-bg" aria-hidden="true" />
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="signature-header">
          <span className="eyebrow" style={{ color: 'var(--c-gold)' }}>The Flow of Time</span>
          <h2 className="section-title">THE AURELIA EXPERIENCE</h2>
          <p className="section-desc">
            A sanctuary crafted for the unhurried moments of life. Discover how our café adapts to the natural cadence of your day.
          </p>
        </div>

        {/* 3 Visual Cards */}
        <div className="signature-cards-grid">
          {SIGNATURE_MOMENTS.map((moment, idx) => (
            <motion.div
              key={moment.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="signature-card"
            >
              <div className="signature-card-media">
                <span className="signature-time-tag">{moment.time}</span>
                <img src={moment.image} alt={moment.title} loading="lazy" />
                <div className="signature-card-overlay" />
              </div>
              <div className="signature-card-caption">
                <h3 className="sig-moment-title">{moment.title}</h3>
                <p className="sig-moment-desc">{moment.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
