import React from 'react';

export default function AnnouncementBar() {
  return (
    <div style={{
      background: 'linear-gradient(90deg, rgba(139, 92, 246, 0.1), rgba(0, 217, 255, 0.1))',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      padding: '0.75rem 0',
      textAlign: 'center',
      fontSize: '0.875rem',
      fontWeight: 500
    }}>
      <div className="container">
        <span className="live-indicator">
          <span className="live-dot"></span>
          LIVE
        </span>
        <span style={{ marginLeft: '0.5rem' }}>
          — DataPulse AI Insights are now available
        </span>
      </div>
    </div>
  );
}
