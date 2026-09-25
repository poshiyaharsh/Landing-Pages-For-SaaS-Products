import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Award } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="hero-section" id="hero">
      <div className="container hero-grid">
        {/* Left Column: Editorial Headline & Copy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="hero-text-content"
        >
          <div className="hero-badge-pill">
            <span className="badge-dot"></span>
            Specialty Coffee • Since 2024
          </div>

          <h1 className="hero-title heading-serif">
            YOUR DAILY RITUAL,<br />
            <em>BREWED BEAUTIFULLY.</em>
          </h1>

          <p className="hero-desc">
            Thoughtfully sourced beans, carefully roasted and beautifully brewed. Discover the quiet luxury of unhurried mornings and balanced single-origin extractions.
          </p>

          <div className="hero-cta-group">
            <a href="#menu" className="btn-primary">
              Explore Menu
              <ArrowRight size={18} />
            </a>
            <a href="#location" className="btn-secondary">
              Visit Our Café
            </a>
          </div>

          {/* Hero Metrics */}
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">88.5+</span>
              <span className="stat-label">SCA Cup Score</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Direct Trade</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">12 kg</span>
              <span className="stat-label">Micro-Roast Batches</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Hero Visual with Floating Elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.25, 1, 0.5, 1] }}
          className="hero-visual-wrapper"
        >
          <div className="hero-image-frame">
            <img
              src="/assets/images/hero-coffee.jpg"
              alt="Artisanal ceramic coffee cup with latte art on dark wood table in cozy cafe"
              loading="eager"
            />
          </div>

          {/* Floating Live Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hero-float-card hero-float-top"
          >
            <div className="float-icon-box">
              <Clock size={20} />
            </div>
            <div className="float-meta">
              <span className="float-title">Open Now</span>
              <span className="float-sub">Until 10:00 PM Tonight</span>
            </div>
          </motion.div>

          {/* Floating Single Origin Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="hero-float-card hero-float-bottom"
          >
            <div className="float-icon-box">
              <Award size={20} />
            </div>
            <div className="float-meta">
              <span className="float-title">Ethiopia Aramo Co-op</span>
              <span className="float-sub">Notes of Peach, Jasmine & Bergamot</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
