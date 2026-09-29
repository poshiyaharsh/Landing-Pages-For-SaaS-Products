import React from 'react';
import { 
  ShieldCheck, 
  Lock, 
  Server, 
  Scale, 
  AlertCircle,
  Sparkles
} from 'lucide-react';

export default function SecuritySection() {
  const securityCards = [
    {
      icon: ShieldCheck,
      title: 'Data Protection',
      description: 'Keep candidate information protected.',
      detail: 'Enterprise AES-256 encryption at rest and TLS 1.3 in transit with strict data minimization policies.'
    },
    {
      icon: Lock,
      title: 'Role-Based Access',
      description: 'Control who can access recruiting data.',
      detail: 'Granular permissions, SAML SSO/SCIM provisioning, and detailed immutable audit logs.'
    },
    {
      icon: Server,
      title: 'Secure Infrastructure',
      description: 'Design the platform around modern security practices.',
      detail: 'SOC 2 Type II certified, GDPR & CCPA compliant infrastructure hosted in isolated VPCs.'
    },
    {
      icon: Scale,
      title: 'Responsible AI',
      description: 'Keep humans involved in important hiring decisions.',
      detail: 'Explainable AI scoring, model bias auditing, and continuous algorithmic fairness monitoring.'
    }
  ];

  return (
    <section className="section" id="security" style={{ background: 'var(--color-white)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="badge section-tag">
            <ShieldCheck size={14} />
            <span>TRUST & GOVERNANCE</span>
          </div>
          <h2 className="section-title">
            Built for responsible hiring teams.
          </h2>
          <p className="section-subtitle">
            Enterprise-grade data protection, compliance certifications, and ethical AI safeguards you can rely on.
          </p>
        </div>

        {/* 4 Security Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.5rem',
          maxWidth: '1200px',
          margin: '0 auto 2.5rem'
        }}>
          {securityCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="card"
                style={{
                  padding: '2rem 1.75rem',
                  borderRadius: 'var(--radius-xl)',
                  background: 'var(--color-white)',
                  border: '1px solid var(--color-border)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '12px',
                    background: 'var(--color-lavender)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-primary)',
                    marginBottom: '1.25rem'
                  }}>
                    <Icon size={24} />
                  </div>

                  <h3 style={{
                    fontSize: '1.1875rem',
                    fontWeight: 700,
                    marginBottom: '0.5rem',
                    color: 'var(--color-text-primary)'
                  }}>
                    {card.title}
                  </h3>

                  <p style={{
                    fontSize: '0.9375rem',
                    fontWeight: 600,
                    color: 'var(--color-primary)',
                    marginBottom: '0.75rem'
                  }}>
                    {card.description}
                  </p>

                  <p style={{
                    fontSize: '0.8125rem',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.6
                  }}>
                    {card.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Important Ethical Disclaimer Note Required by Spec */}
        <div style={{
          maxWidth: '820px',
          margin: '0 auto',
          padding: '1rem 1.5rem',
          background: 'var(--color-background-soft)',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--color-border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.75rem',
          textAlign: 'center'
        }}>
          <AlertCircle size={18} color="var(--color-primary)" style={{ flexShrink: 0 }} />
          <span style={{
            fontSize: '0.875rem',
            color: 'var(--color-text-primary)',
            fontWeight: 600
          }}>
            AI-generated insights should support recruiters, not replace human judgment.
          </span>
        </div>

      </div>
    </section>
  );
}