import React from 'react';
import { motion } from 'framer-motion';

export const ExperienceRitual: React.FC = () => {
  return (
    <section className="section-experience" id="experience">
      <div className="container experience-grid">
        {/* Left Column: Close-up Coffee Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="experience-media-wrap"
        >
          <div className="experience-img-frame">
            <img
              src="/assets/images/experience-ritual.jpg"
              alt="Barista preparing Chemex pour over coffee with copper kettle"
              loading="lazy"
            />
          </div>

          <div className="experience-curator-card">
            <div className="curator-score">89.5</div>
            <div className="curator-label">SCA Certified Roastery</div>
            <div className="curator-note">
              Every micro-batch is profile-roasted and cupped to ensure sweetness, body, and balance.
            </div>
          </div>
        </motion.div>

        {/* Right Column: Narrative & Manifesto */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="experience-content"
        >
          <span className="eyebrow">The Aurelia Standard</span>
          <h2 className="experience-title heading-serif">
            MORE THAN COFFEE.<br />IT’S A RITUAL.
          </h2>

          <p className="experience-intro">
            “From the first aroma to the final sip, every cup at Aurelia is crafted to turn an ordinary moment into something worth remembering.”
          </p>

          <div className="experience-features-list">
            <div className="exp-feature-item">
              <div className="exp-number">01</div>
              <div className="exp-feature-text">
                <h4>Carefully Sourced</h4>
                <p>
                  We work exclusively with ethical heritage farms, paying premiums well above fair-trade to preserve generational agroforestry in Ethiopia, Colombia, and Guatemala.
                </p>
              </div>
            </div>

            <div className="exp-feature-item">
              <div className="exp-number">02</div>
              <div className="exp-feature-text">
                <h4>Small Batch Roasted</h4>
                <p>
                  Roasted in 12-kilogram batches in our cast-iron drum. We roast lightly to highlight floral volatiles, balanced citric acidity, and deep cocoa complexity.
                </p>
              </div>
            </div>

            <div className="exp-feature-item">
              <div className="exp-number">03</div>
              <div className="exp-feature-text">
                <h4>Crafted Fresh</h4>
                <p>
                  Water remineralized to exact ionic balance, paired with flat-burr grinders dialed in fresh every morning to extract maximum flavor clarity.
                </p>
              </div>
            </div>
          </div>

          <a href="#menu" className="btn-primary">
            Explore Our Roasts
          </a>
        </motion.div>
      </div>
    </section>
  );
};
