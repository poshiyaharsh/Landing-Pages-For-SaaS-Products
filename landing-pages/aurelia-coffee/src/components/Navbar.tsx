import React, { useState, useEffect } from 'react';
import { useCoffee } from '../context/CoffeeContext';
import { Volume2, VolumeX, Search, Heart, ShoppingBag, Menu as MenuIcon, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const {
    cart,
    favorites,
    isAmbientPlaying,
    toggleAmbientAudio,
    setIsSearchOpen,
    setIsFavOpen,
    setIsCartOpen
  } = useCoffee();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Featured', href: '#featured' },
    { name: 'Our Ritual', href: '#experience' },
    { name: 'Menu', href: '#menu' },
    { name: 'Moments', href: '#moments' },
    { name: 'Our Story', href: '#story' },
    { name: 'Visit Us', href: '#location' }
  ];

  return (
    <>
      <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          {/* Logo */}
          <a href="#hero" className="logo">
            <div className="logo-monogram">A</div>
            <div className="logo-text-group">
              <span className="logo-title">Aurelia</span>
              <span className="logo-subtitle">Coffee • Est. 2024</span>
            </div>
          </a>

          {/* Center Links */}
          <nav className="nav-links" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="nav-link">
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Icons */}
          <div className="nav-actions">
            {/* Ambient Sound Toggle */}
            <motion.button
              whileTap={{ scale: 0.92 }}
              onClick={toggleAmbientAudio}
              className={`nav-action-btn ambient-toggle ${isAmbientPlaying ? 'active' : ''}`}
              title={isAmbientPlaying ? 'Mute Café Ambience' : 'Play Cozy Café Soundscape'}
              aria-label="Ambient Sound"
            >
              {isAmbientPlaying ? <Volume2 size={18} /> : <VolumeX size={18} />}
            </motion.button>

            {/* Search */}
            <motion.button
              whileTap={{ scale: 0.92 }}
              onClick={() => setIsSearchOpen(true)}
              className="nav-action-btn"
              title="Search menu & roasts"
              aria-label="Search"
            >
              <Search size={18} />
            </motion.button>

            {/* Favorites */}
            <motion.button
              whileTap={{ scale: 0.92 }}
              onClick={() => setIsFavOpen(true)}
              className="nav-action-btn"
              title="Saved Favorites"
              aria-label="Favorites"
            >
              <Heart size={18} />
              {favorites.size > 0 && (
                <motion.span
                  key={favorites.size}
                  initial={{ scale: 0.6 }}
                  animate={{ scale: 1 }}
                  className="action-badge"
                >
                  {favorites.size}
                </motion.span>
              )}
            </motion.button>

            {/* Cart Bag */}
            <motion.button
              whileTap={{ scale: 0.92 }}
              onClick={() => setIsCartOpen(true)}
              className="nav-action-btn"
              title="View Order Bag"
              aria-label="Cart"
            >
              <ShoppingBag size={18} />
              {totalCartCount > 0 && (
                <motion.span
                  key={totalCartCount}
                  initial={{ scale: 0.6 }}
                  animate={{ scale: 1 }}
                  className="action-badge"
                >
                  {totalCartCount}
                </motion.span>
              )}
            </motion.button>

            {/* Order CTA */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-order-nav"
            >
              Order Coffee
            </motion.button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="hamburger-btn"
              style={{ display: 'none' }}
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
            className="mobile-nav-drawer open"
          >
            <div className="mobile-nav-links">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="mobile-nav-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="mobile-drawer-footer">
              <div className="mobile-info-item">
                <strong>Aurelia Coffee Flagship</strong><br />
                123 Brew Street, Bodakdev, Ahmedabad
              </div>
              <div className="mobile-info-item">
                <strong>Daily:</strong> 8:00 AM – 10:00 PM
              </div>
              <button
                className="btn-primary"
                onClick={() => {
                  setMobileMenuOpen(false);
                  document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
                }}
                style={{ width: '100%', marginTop: '0.8rem' }}
              >
                Order Coffee Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
