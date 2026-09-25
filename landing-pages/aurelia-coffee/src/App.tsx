import React, { useState, useEffect } from 'react';
import { CoffeeProvider } from './context/CoffeeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedCoffee } from './components/FeaturedCoffee';
import { ExperienceRitual } from './components/ExperienceRitual';
import { MenuSection } from './components/MenuSection';
import { SignatureMoments } from './components/SignatureMoments';
import { OurStory } from './components/OurStory';
import { SocialGallery } from './components/SocialGallery';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { CustomizeModal } from './components/CustomizeModal';
import { CartDrawer } from './components/CartDrawer';
import { FavoritesDrawer } from './components/FavoritesDrawer';
import { SearchModal } from './components/SearchModal';
import { CheckoutModal } from './components/CheckoutModal';
import { ToastContainer } from './components/ToastContainer';
import { ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const AppContent: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 450);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="aurelia-app">
      {/* Subtle Film Grain Noise Texture */}
      <div className="grain-overlay" aria-hidden="true" />

      {/* Navigation */}
      <Navbar />

      {/* Page Sections */}
      <main>
        <Hero />
        <FeaturedCoffee />
        <ExperienceRitual />
        <MenuSection />
        <SignatureMoments />
        <OurStory />
        <SocialGallery />
        <LocationSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals & Drawers */}
      <CustomizeModal />
      <CartDrawer />
      <FavoritesDrawer />
      <SearchModal />
      <CheckoutModal />
      <ToastContainer />

      {/* Back to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ y: -3 }}
            onClick={scrollToTop}
            className="back-to-top-btn"
            style={{ opacity: 1, visibility: 'visible' }}
            title="Back to top"
            aria-label="Back to top"
          >
            <ChevronUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <CoffeeProvider>
      <AppContent />
    </CoffeeProvider>
  );
};

export default App;
