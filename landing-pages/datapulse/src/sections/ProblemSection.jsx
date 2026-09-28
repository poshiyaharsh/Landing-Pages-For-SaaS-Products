import React from 'react';
import { Database, Clock, FileSpreadsheet } from 'lucide-react';

export default function ProblemSection() {
  const problems = [
    {
      icon: Database,
      title: 'Data Silos',
      description: 'Important information lives across dozens of tools.'
    },
    {
      icon: Clock,
      title: 'Delayed Decisions',
      description: 'Teams discover problems after they become expensive.'
    },
    {
      icon: FileSpreadsheet,
      title: 'Reporting Overload',
      description: 'Hours disappear into spreadsheets and manual reports.'
    }
  ];

  return (
    <section className="section">
      <div className="container">
        <h2 style={{
          fontSize: 'clamp(2rem, 5vw, 3rem)',
          fontWeight: 700,
          textAlign: 'center',
          marginBottom: 'var(--spacing-xl)',
          lineHeight: 1.2
        }}>
          Your data is everywhere.<br />
          Your answers shouldn't be.
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          maxWidth: '1100px',
          margin: '0 auto'
        }}>
          {problems.map((problem, index) => (
            <div
              key={index}
              className="card"
              style={{
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Animated data fragments background */}
              <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '100px',
                height: '100px',
                opacity: 0.1,
                pointerEvents: 'none'
              }}>
                <div style={{
                  position: 'absolute',
                  width: '30px',
                  height: '2px',
                  background: 'var(--color-primary)',
                  top: '20px',
                  right: '10px',
                  animation: 'float 3s ease-in-out infinite',
                  animationDelay: `${index * 0.3}s`
                }}></div>
                <div style={{
                  position: 'absolute',
                  width: '20px',
                  height: '2px',
                  background: 'var(--color-secondary)',
                  top: '40px',
                  right: '30px',
                  animation: 'float 3s ease-in-out infinite',
                  animationDelay: `${index * 0.3 + 0.5}s`
                }}></div>
              </div>

              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: 'var(--radius-md)',
                background: 'rgba(0, 217, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem'
              }}>
                <problem.icon size={24} color="var(--color-primary)" />
              </div>

              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: 600,
                marginBottom: '0.5rem'
              }}>
                {problem.title}
              </h3>

              <p style={{
                color: 'var(--color-text-secondary)',
                lineHeight: 1.6
              }}>
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  );
}
