import { HiMail, HiPhone, HiLocationMarker, HiChatAlt2 } from 'react-icons/hi';
import { FaLinkedin, FaGlobe } from 'react-icons/fa';
import { personal } from '../data/portfolioData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const contactItems = [
  {
    icon: <HiMail size={22} />,
    label: 'Email',
    value: personal.email,
    href: `mailto:${personal.email}`,
    color: 'var(--purple)',
  },
  {
    icon: <HiPhone size={22} />,
    label: 'Phone',
    value: personal.phone,
    href: `tel:${personal.phone.replace(/\s/g, '')}`,
    color: 'var(--cyan)',
  },
  {
    icon: <FaLinkedin size={22} />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/tshepo-mboweni',
    href: personal.linkedin,
    color: '#0A66C2',
  },
  {
    icon: <FaGlobe size={22} />,
    label: 'Portfolio',
    value: 'tshepomboweniportfolio.netlify.app',
    href: personal.portfolio,
    color: 'var(--amber)',
  },
  {
    icon: <HiLocationMarker size={22} />,
    label: 'Location',
    value: personal.location,
    href: null,
    color: 'var(--green)',
  },
];

export default function Contact() {
  const [headerRef, headerVisible] = useScrollAnimation();
  const [bodyRef,   bodyVisible]   = useScrollAnimation(0.1);

  return (
    <section id="contact" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="section">
        <div ref={headerRef} className={`reveal${headerVisible ? ' visible' : ''}`}>
          <p className="section-label">Let's work together</p>
          <h2 className="section-title">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="section-divider" />
        </div>

        <div
          ref={bodyRef}
          className={`reveal contact-grid${bodyVisible ? ' visible' : ''}`}
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}
        >
          {/* Left – CTA text */}
          <div>
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: 16,
                background: 'linear-gradient(135deg, var(--purple), var(--cyan))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                marginBottom: '1.5rem',
              }}
            >
              <HiChatAlt2 size={28} />
            </div>

            <h3
              style={{
                fontFamily: 'var(--font-head)',
                fontSize: '1.5rem',
                fontWeight: 700,
                marginBottom: '1rem',
                lineHeight: 1.3,
              }}
            >
              Ready to build something{' '}
              <span className="gradient-text">extraordinary?</span>
            </h3>

            <p style={{ color: 'var(--muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              I'm currently open to new opportunities — whether it's a full-time role, contract,
              or an exciting project. My inbox is always open. Let's talk!
            </p>

            {/* Availability indicator */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.6rem 1.25rem',
                borderRadius: 50,
                background: 'rgba(16,185,129,0.08)',
                border: '1px solid rgba(16,185,129,0.25)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.82rem',
                color: '#10b981',
                marginBottom: '2rem',
              }}
            >
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#10b981', display: 'inline-block', animation: 'pulse-dot2 2s ease-in-out infinite' }} />
              Immediately Available
            </div>

            <a href={`mailto:${personal.email}`} className="btn-primary" style={{ display: 'inline-flex' }}>
              <HiMail size={18} /> Send Me an Email
            </a>
          </div>

          {/* Right – Contact links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {contactItems.map((item, i) => (
              item.href ? (
                <a
                  key={i}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="contact-link"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <span
                    style={{
                      width: 42,
                      height: 42,
                      borderRadius: 12,
                      background: `${item.color}18`,
                      border: `1px solid ${item.color}40`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: item.color,
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </span>
                  <div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--muted)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 2 }}>
                      {item.label}
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text)' }}>{item.value}</div>
                  </div>
                </a>
              ) : (
                <div key={i} className="contact-link" style={{ cursor: 'default' }}>
                  <span
                    style={{
                      width: 42,
                      height: 42,
                      borderRadius: 12,
                      background: `${item.color}18`,
                      border: `1px solid ${item.color}40`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: item.color,
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </span>
                  <div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--muted)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 2 }}>
                      {item.label}
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text)' }}>{item.value}</div>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse-dot2 {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.4; }
        }
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </section>
  );
}
