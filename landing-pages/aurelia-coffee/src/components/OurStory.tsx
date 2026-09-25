import React from 'react';
import { TIMELINE_STEPS } from '../data/coffeeData';
import { motion } from 'framer-motion';

export const OurStory: React.FC = () => {
  return (
    <section className="section-story" id="story">
      <div className="container story-grid">
        {/* Left Column: Image with Floating Badge */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="story-media-box"
        >
          <div className="story-image-wrap">
            <img
              src="/assets/images/story-roasting.jpg"
              alt="Artisan coffee roaster inspecting fresh roasted coffee beans with cupping spoon"
              loading="lazy"
            />
          </div>
          <div className="story-badge-floating">
            <div className="story-badge-num">100%</div>
            <div className="story-badge-txt">Direct Ethical Trade</div>
          </div>
        </motion.div>

        {/* Right Column: Editorial Narrative & Steps */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="story-content"
        >
          <span className="eyebrow">Our Philosophy</span>
          <h2 className="section-title">FROM BEAN TO MOMENT</h2>
          <p className="section-desc" style={{ marginBottom: '2rem' }}>
            Aurelia was born from a singular conviction: that in a hurried world, coffee should be a deliberate, mindful ritual. Every bean carries the story of the soil it was nurtured in.
          </p>

          {/* Timeline */}
          <div className="story-timeline">
            {TIMELINE_STEPS.map((step, idx) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="timeline-step"
              >
                <div className="step-marker">{step.step}</div>
                <div className="step-text">
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
