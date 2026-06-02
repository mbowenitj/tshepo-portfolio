import { HiLocationMarker, HiPhone, HiMail, HiTranslate, HiCheckCircle } from 'react-icons/hi';
import { FaLinkedin } from 'react-icons/fa';
import { about, personal, languages } from '../data/portfolioData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const details = [
  { icon: <HiLocationMarker size={18} />, label: 'Location',     value: personal.location },
  { icon: <HiPhone          size={18} />, label: 'Phone',        value: personal.phone },
  { icon: <HiMail           size={18} />, label: 'Email',        value: personal.email, href: `mailto:${personal.email}` },
  { icon: <FaLinkedin       size={18} />, label: 'LinkedIn',     value: 'tshepo-mboweni', href: personal.linkedin },
  { icon: <HiTranslate      size={18} />, label: 'Languages',    value: languages.join(', ') },
  { icon: <HiCheckCircle    size={18} />, label: 'Availability', value: personal.availability },
];

export default function About() {
  const [headerRef, headerVisible] = useScrollAnimation();
  const [textRef,   textVisible]   = useScrollAnimation(0.1);
  const [cardRef,   cardVisible]   = useScrollAnimation(0.1);

  return (
    <section id="about" style={{ background: 'rgba(255,255,255,0.01)', borderTop: '1px solid var(--border)' }}>
      <div className="section">
        {/* Header */}
        <div ref={headerRef} className={`reveal${headerVisible ? ' visible' : ''}`}>
          <p className="section-label">Get to know me</p>
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="section-divider" />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }} className="about-grid">
          {/* Text */}
          <div ref={textRef} className={`reveal-left${textVisible ? ' visible' : ''}`}>
            {about.split('\n\n').map((para, i) => (
              <p
                key={i}
                style={{
                  color: 'var(--muted)',
                  fontSize: '1.02rem',
                  lineHeight: 1.8,
                  marginBottom: i < 1 ? '1.25rem' : 0,
                }}
              >
                {para}
              </p>
            ))}

            <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <FaLinkedin size={16} /> View LinkedIn
              </a>
              <a href={personal.portfolio} target="_blank" rel="noopener noreferrer" className="btn-outline">
                Live Portfolio
              </a>
            </div>
          </div>

          {/* Info card */}
          <div ref={cardRef} className={`reveal-right${cardVisible ? ' visible' : ''}`}>
            <div
              className="glass gradient-border"
              style={{ borderRadius: 20, padding: '2rem', display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}
            >
              {details.map((d, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                    paddingBottom: i < details.length - 1 ? '1rem' : 0,
                    borderBottom: i < details.length - 1 ? '1px solid var(--border)' : 'none',
                  }}
                >
                  <span style={{ color: 'var(--purple)', marginTop: 2, flexShrink: 0 }}>{d.icon}</span>
                  <div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--muted)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 2 }}>
                      {d.label}
                    </div>
                    {d.href ? (
                      <a
                        href={d.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: 'var(--cyan)', textDecoration: 'none', fontSize: '0.9rem', wordBreak: 'break-all' }}
                      >
                        {d.value}
                      </a>
                    ) : (
                      <span style={{ color: 'var(--text)', fontSize: '0.9rem' }}>{d.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </section>
  );
}
