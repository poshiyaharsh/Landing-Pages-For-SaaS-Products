import React, { useState } from 'react';
import { useCoffee } from '../context/CoffeeContext';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const { showToast } = useCoffee();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      showToast('Welcome to the Aurelia Coffee Gazette! ☕');
      setEmail('');
    } else {
      showToast('Please enter a valid email address.');
    }
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top-grid">
          {/* Brand Summary */}
          <div className="footer-brand">
            <div className="footer-logo">
              <div
                className="logo-monogram"
                style={{ background: '#261A14', borderColor: 'rgba(197, 160, 89, 0.5)' }}
              >
                A
              </div>
              <span className="logo-title">AURELIA COFFEE</span>
            </div>
            <div className="footer-tagline">“Slow Mornings. Rich Moments.”</div>
            <p className="footer-desc">
              An artisanal specialty coffee roastery dedicated to unhurried mornings, origin transparency, and delicate sensory craftsmanship.
            </p>

            {/* Newsletter Form */}
            <form onSubmit={handleSubscribe} className="footer-newsletter-wrap">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="footer-newsletter-input"
                placeholder="Your email address"
                aria-label="Newsletter Email"
              />
              <button type="submit" className="footer-newsletter-btn">
                Join
              </button>
            </form>
          </div>

          {/* Col 1: Explore */}
          <div>
            <h4 className="footer-col-title">EXPLORE</h4>
            <ul className="footer-links-list">
              <li><a href="#featured" className="footer-link">Featured Drinks</a></li>
              <li><a href="#menu" className="footer-link">Full Coffee Menu</a></li>
              <li><a href="#experience" className="footer-link">The Brew Ritual</a></li>
              <li><a href="#story" className="footer-link">Our Heritage</a></li>
              <li><a href="#location" className="footer-link">Visit Ahmedabad Café</a></li>
            </ul>
          </div>

          {/* Col 2: Support & Roastery */}
          <div>
            <h4 className="footer-col-title">SUPPORT</h4>
            <ul className="footer-links-list">
              <li><a href="#location" className="footer-link">Contact Concierge</a></li>
              <li><a href="#menu" className="footer-link">Catering & Events</a></li>
              <li><a href="#location" className="footer-link">Wholesale Roasting</a></li>
              <li><a href="#hero" className="footer-link">Gift Cards</a></li>
              <li><a href="#hero" className="footer-link">Privacy & Terms</a></li>
            </ul>
          </div>

          {/* Col 3: Social & Connect */}
          <div>
            <h4 className="footer-col-title">CONNECT</h4>
            <ul className="footer-links-list">
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-link">
                  Instagram • @aureliacoffee
                </a>
              </li>
              <li><a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="footer-link">Pinterest Journal</a></li>
              <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-link">Facebook Community</a></li>
              <li><a href="mailto:hello@aureliacoffee.com" className="footer-link">hello@aureliacoffee.com</a></li>
              <li><a href="tel:+917926840000" className="footer-link">+91 79 2684 0000</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            © 2026 Aurelia Coffee. Crafted with intention. All rights reserved.
          </div>
          <div className="footer-legal-links">
            <a href="#hero">Ethical Sourcing</a>
            <a href="#hero">Sustainability Report</a>
            <a href="#hero">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
