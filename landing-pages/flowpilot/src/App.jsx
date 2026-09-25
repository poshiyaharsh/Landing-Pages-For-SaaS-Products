import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Footer } from './components/Footer';
import { ArrowUp } from 'lucide-react';

export const App = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flowpilot-app" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Background Matrix/Grid Overlay */}
      <div className="bg-grid-overlay" aria-hidden="true" />

      {/* Main Navbar */}
      <Navbar />

      {/* Page Content */}
      <div style={{ flex: 1 }}>
        <Home />
      </div>

      {/* Main Footer */}
      <Footer />

      {/* Back to top button */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          style={{
            position: 'fixed',
            bottom: '28px',
            right: '28px',
            zIndex: 40,
            width: '42px',
            height: '42px',
            borderRadius: '12px',
            backgroundColor: 'rgba(14, 22, 44, 0.9)',
            border: '1px solid rgba(56, 189, 248, 0.4)',
            color: 'var(--color-primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 20px rgba(0,0,0,0.5), 0 0 15px rgba(56, 189, 248, 0.25)',
            cursor: 'pointer',
            transition: 'all 200ms ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-3px)';
            e.currentTarget.style.backgroundColor = 'rgba(56, 189, 248, 0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.backgroundColor = 'rgba(14, 22, 44, 0.9)';
          }}
        >
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  );
};

export default App;
