import { HiAcademicCap } from 'react-icons/hi';
import { education } from '../data/portfolioData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Education() {
  const [headerRef, headerVisible] = useScrollAnimation();

  return (
    <section id="education" style={{ background: 'rgba(255,255,255,0.01)', borderTop: '1px solid var(--border)' }}>
      <div className="section">
        <div ref={headerRef} className={`reveal${headerVisible ? ' visible' : ''}`}>
          <p className="section-label">Academic background</p>
          <h2 className="section-title">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="section-divider" />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {education.map((edu, i) => (
            <EducationCard key={i} edu={edu} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function EducationCard({ edu, index }) {
  const [ref, visible] = useScrollAnimation(0.1);

  return (
    <div
      ref={ref}
      className={`reveal glass gradient-border card-hover${visible ? ' visible' : ''}`}
      style={{
        borderRadius: 20,
        padding: '2rem',
        transitionDelay: `${index * 150}ms`,
      }}
    >
      <div
        style={{
          width: 48,
          height: 48,
          borderRadius: 14,
          background: 'linear-gradient(135deg, var(--purple), var(--cyan))',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          marginBottom: '1.25rem',
        }}
      >
        <HiAcademicCap size={24} />
      </div>

      <div
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.75rem',
          color: 'var(--cyan)',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          marginBottom: '0.4rem',
        }}
      >
        {edu.period}
      </div>

      <h3
        style={{
          fontFamily: 'var(--font-head)',
          fontWeight: 700,
          fontSize: '1.15rem',
          color: 'var(--text)',
          marginBottom: '0.3rem',
        }}
      >
        {edu.degree}
      </h3>

      <p style={{ color: 'var(--purple)', fontSize: '0.9rem', fontWeight: 500, marginBottom: '0.25rem' }}>
        {edu.field}
      </p>

      <p style={{ color: 'var(--muted)', fontSize: '0.85rem' }}>
        {edu.institution}
      </p>
    </div>
  );
}
