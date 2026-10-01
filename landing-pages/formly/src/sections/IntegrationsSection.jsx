import React, { useState } from 'react';
import { 
  Network, 
  MessageSquare, 
  Table, 
  FileText, 
  Users, 
  Webhook, 
  Zap, 
  Mail, 
  Calendar, 
  Check, 
  Search,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { integrationsData } from '../data/integrationsData.js';
import Badge from '../components/Badge.jsx';
import Button from '../components/Button.jsx';

export default function IntegrationsSection({ onOpenDemo }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [connectedMap, setConnectedMap] = useState({
    slack: true,
    'google-sheets': true,
    notion: true
  });

  const toggleConnect = (id) => {
    setConnectedMap((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const getIcon = (name) => {
    switch (name) {
      case 'MessageSquare': return MessageSquare;
      case 'Table': return Table;
      case 'FileText': return FileText;
      case 'Users': return Users;
      case 'Webhook': return Webhook;
      case 'Zap': return Zap;
      case 'Mail': return Mail;
      case 'Calendar': return Calendar;
      default: return Network;
    }
  };

  const filteredIntegrations = integrationsData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="integrations" style={{ paddingTop: '100px', paddingBottom: '100px', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <Badge color="purple" icon={Network}>
            Seamless Ecosystem
          </Badge>
          <h2 className="section-title">
            Connect Formly to your <span className="gradient-text">entire workflow</span>.
          </h2>
          <p className="section-subtitle">
            Ship responses automatically wherever your team already works. Zero code, zero fragile cron jobs, zero delayed spreadsheets.
          </p>

          {/* Search Bar */}
          <div
            style={{
              maxWidth: '420px',
              margin: '24px auto 0 auto',
              position: 'relative'
            }}
          >
            <Search
              size={18}
              style={{
                position: 'absolute',
                left: '16px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#94A3B8'
              }}
            />
            <input
              type="text"
              placeholder="Search 150+ apps, webhooks, CRMs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 16px 12px 44px',
                borderRadius: '9999px',
                border: '1.5px solid #E2E8F0',
                backgroundColor: '#FFFFFF',
                fontSize: '0.9375rem',
                outline: 'none',
                boxShadow: '0 2px 8px rgba(15, 23, 42, 0.04)',
                boxSizing: 'border-box'
              }}
            />
          </div>
        </div>

        {/* Integrations Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px'
          }}
        >
          {filteredIntegrations.map((app) => {
            const Icon = getIcon(app.iconName);
            const isConnected = !!connectedMap[app.id];

            return (
              <div
                key={app.id}
                className="glass-card"
                style={{
                  borderRadius: '20px',
                  padding: '24px',
                  backgroundColor: '#FFFFFF',
                  border: isConnected ? '1.5px solid rgba(99, 102, 241, 0.4)' : '1px solid #E2E8F0',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all 200ms ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 12px 28px -6px rgba(15, 23, 42, 0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-card)';
                }}
              >
                <div>
                  {/* Top Bar with Icon & Tag */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                    <div
                      style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '12px',
                        backgroundColor: '#FAFBFD',
                        border: '1px solid #EEF2F6',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: app.accentColor
                      }}
                    >
                      <Icon size={24} />
                    </div>
                    <span
                      style={{
                        fontSize: '0.6875rem',
                        fontWeight: 700,
                        backgroundColor: '#F1F5F9',
                        color: '#475569',
                        padding: '4px 10px',
                        borderRadius: '9999px'
                      }}
                    >
                      {app.badge}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.1875rem', fontWeight: 800, color: '#0F172A', marginBottom: '4px' }}>
                    {app.name}
                  </h3>
                  <div style={{ fontSize: '0.75rem', color: '#6366F1', fontWeight: 600, marginBottom: '10px' }}>
                    {app.category}
                  </div>
                  <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.5, marginBottom: '20px' }}>
                    {app.description}
                  </p>
                </div>

                {/* Connection Toggle & Popularity */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '16px', borderTop: '1px solid #F1F5F9' }}>
                  <span style={{ fontSize: '0.75rem', color: '#94A3B8', fontWeight: 600 }}>
                    {app.popularity} adoption
                  </span>

                  <button
                    type="button"
                    onClick={() => toggleConnect(app.id)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '6px 14px',
                      borderRadius: '8px',
                      fontSize: '0.8125rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      transition: 'all 150ms ease',
                      backgroundColor: isConnected ? '#ECFDF5' : '#F8FAFC',
                      color: isConnected ? '#059669' : '#334155',
                      border: isConnected ? '1px solid #A7F3D0' : '1px solid #E2E8F0'
                    }}
                  >
                    {isConnected ? (
                      <>
                        <Check size={14} strokeWidth={2.5} />
                        <span>Connected</span>
                      </>
                    ) : (
                      <span>Connect</span>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Webhooks Custom Code Callout */}
        <div
          style={{
            marginTop: '48px',
            backgroundColor: '#0F172A',
            color: '#FFFFFF',
            borderRadius: '24px',
            padding: '32px 36px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px'
          }}
        >
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#38BDF8', fontSize: '0.8125rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '8px' }}>
              <Webhook size={16} /> Need a custom integration?
            </div>
            <h3 style={{ fontSize: '1.375rem', fontWeight: 800, marginBottom: '6px' }}>
              REST Webhooks &amp; Event Payloads
            </h3>
            <p style={{ color: '#94A3B8', fontSize: '0.9375rem', maxWidth: '580px', lineHeight: 1.5 }}>
              Trigger serverless lambdas, stream encrypted payloads with HMAC signatures, and integrate into internal tools seamlessly.
            </p>
          </div>

          <Button
            variant="primary"
            size="md"
            iconRight={ArrowRight}
            onClick={() => onOpenDemo && onOpenDemo('webhook')}
            style={{
              background: 'linear-gradient(135deg, #0EA5E9 0%, #6366F1 100%)'
            }}
          >
            Explore API Documentation
          </Button>
        </div>
      </div>
    </section>
  );
}
