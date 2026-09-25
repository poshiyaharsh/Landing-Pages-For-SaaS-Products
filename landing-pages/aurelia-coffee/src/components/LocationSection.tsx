import React from 'react';
import { Coffee, MapPin, Wifi, Car, Sun, Zap, HeartHandshake, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';

export const LocationSection: React.FC = () => {
  return (
    <section className="section-location" id="location">
      <div className="container location-grid">
        {/* Left Column: Interactive Stylized Map Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8 }}
          className="map-card-wrapper"
        >
          {/* Vector Map Grid Graphic Overlay */}
          <svg className="map-svg-roads" viewBox="0 0 400 300">
            <path d="M 0,80 Q 150,120 400,60" fill="none" stroke="#C5A059" strokeWidth="4" />
            <path d="M 80,0 Q 120,150 100,300" fill="none" stroke="#C5A059" strokeWidth="3" />
            <path d="M 280,0 Q 250,160 320,300" fill="none" stroke="#C5A059" strokeWidth="3" />
            <path d="M 0,220 Q 200,180 400,240" fill="none" stroke="#C5A059" strokeWidth="2" />
            <circle cx="210" cy="140" r="8" fill="#A35C2E" />
          </svg>

          {/* Top Status Row */}
          <div className="map-header-status">
            <div className="map-status-pill">
              <span className="map-status-dot" />
              Open Now • Closes 10:00 PM
            </div>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--c-gold)' }}>
              Ahmedabad Flagship
            </span>
          </div>

          {/* Pulsing Map Beacon */}
          <div className="map-center-pin">
            <div className="pin-beacon">
              <div className="pin-core">
                <Coffee size={20} />
              </div>
            </div>
            <div className="pin-label">AURELIA COFFEE • 123 BREW ST</div>
          </div>

          {/* Bottom Coordinates & Action */}
          <div className="map-bottom-controls">
            <div className="map-coords">23.0225° N, 72.5714° E</div>
            <button
              onClick={() => window.open('https://maps.google.com/?q=Ahmedabad+Coffee', '_blank')}
              className="map-open-btn"
            >
              Open in Maps ↗
            </button>
          </div>
        </motion.div>

        {/* Right Column: Location Details */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8 }}
          className="location-content"
        >
          <span className="eyebrow">Find Sanctuary</span>
          <h2 className="section-title">COME SAY HELLO</h2>

          <div className="location-address-block">
            <div className="loc-street">123 Brew Street</div>
            <div className="loc-city">Bodakdev, Ahmedabad, Gujarat 380054</div>
          </div>

          {/* Hours Box */}
          <div className="location-hours-box">
            <div className="hours-row">
              <span className="hours-day">Monday – Friday</span>
              <span className="hours-time">8:00 AM – 10:00 PM</span>
            </div>
            <div className="hours-row">
              <span className="hours-day">Saturday – Sunday</span>
              <span className="hours-time">8:00 AM – 11:00 PM</span>
            </div>
          </div>

          {/* Amenities Grid */}
          <div className="amenities-grid">
            <div className="amenity-chip">
              <Car size={16} className="amenity-icon" />
              <span>Valet & Street Parking</span>
            </div>
            <div className="amenity-chip">
              <Wifi size={16} className="amenity-icon" />
              <span>High-Speed Wi-Fi</span>
            </div>
            <div className="amenity-chip">
              <Sun size={16} className="amenity-icon" />
              <span>Sunlit Courtyard Seating</span>
            </div>
            <div className="amenity-chip">
              <Zap size={16} className="amenity-icon" />
              <span>Work Tables with Outlets</span>
            </div>
            <div className="amenity-chip">
              <HeartHandshake size={16} className="amenity-icon" />
              <span>Pet Friendly Patio</span>
            </div>
            <div className="amenity-chip">
              <Leaf size={16} className="amenity-icon" />
              <span>Organic Plant Milks</span>
            </div>
          </div>

          <div className="location-actions">
            <button
              className="btn-primary"
              onClick={() => window.open('https://maps.google.com/?q=Ahmedabad+Coffee', '_blank')}
            >
              <MapPin size={16} />
              Get Directions
            </button>
            <button
              className="btn-secondary"
              onClick={() => alert('Table reservations are available for groups of 4+. Please call our concierge at +91 79 2684 0000.')}
            >
              Reserve a Table
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
