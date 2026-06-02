import { useState } from 'react';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';
import { experience } from '../data/portfolioData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Experience() {
  const [headerRef, headerVisible] = useScrollAnimation();
  const [expanded, setExpanded]    = useState(0);

  return (
    <section id="experience" style={{ background: 'rgba(255,255,255,0.01)', borderTop: '1px solid var(--border)' }}>
      <div className="section">
        <div ref={headerRef} className={`reveal${headerVisible ? ' visible' : ''}`}>
          <p className="section-label">Where I've worked</p>
          <h2 className="section-title">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="section-divider" />
        </div>

        <div style={{ position: 'relative', paddingLeft: '2.5rem' }}>
          {/* Vertical line */}
          <div className="timeline-line" />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {experience.map((job, i) => (
              <ExperienceCard
                key={i}
                job={job}
                index={i}
                isOpen={expanded === i}
                onToggle={() => setExpanded(expanded === i ? -1 : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({ job, index, isOpen, onToggle }) {
  const [ref, visible] = useScrollAnimation(0.1);

  return (
    <div
      ref={ref}
      className={`reveal${visible ? ' visible' : ''}`}
      style={{ transitionDelay: `${index * 80}ms`, position: 'relative' }}
    >
      {/* Timeline dot */}
      <div className="timeline-dot" />

      <div
        className={`glass gradient-border${isOpen ? ' glow-purple' : ''}`}
        style={{
          borderRadius: 16,
          overflow: 'hidden',
          transition: 'box-shadow 0.3s',
        }}
      >
        {/* Header – always visible */}
        <button
          onClick={onToggle}
          style={{
            width: '100%',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '1.5rem',
            display: 'grid',
            gridTemplateColumns: '1fr auto',
            gap: '1rem',
            alignItems: 'center',
            textAlign: 'left',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '0.35rem' }}>
              <h3
                style={{
                  fontFamily: 'var(--font-head)',
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  color: 'var(--text)',
                }}
              >
                {job.role}
              </h3>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  padding: '0.15rem 0.6rem',
                  borderRadius: '50px',
                  background: 'rgba(34,211,238,0.1)',
                  border: '1px solid rgba(34,211,238,0.25)',
                  color: 'var(--cyan)',
                }}
              >
                {job.type}
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <span
                style={{
                  fontFamily: 'var(--font-head)',
                  fontWeight: 600,
                  color: 'var(--purple)',
                  fontSize: '1rem',
                }}
              >
                {job.company}
              </span>
              <span style={{ color: 'var(--muted)', fontSize: '0.82rem', fontFamily: 'var(--font-mono)' }}>
                {job.period}
              </span>
              <span
                style={{
                  fontSize: '0.72rem',
                  padding: '0.1rem 0.55rem',
                  borderRadius: 4,
                  background: 'rgba(168,85,247,0.1)',
                  color: 'var(--muted)',
                  fontFamily: 'var(--font-mono)',
                }}
              >
                {job.duration}
              </span>
            </div>
          </div>

          <span style={{ color: 'var(--purple)', flexShrink: 0 }}>
            {isOpen ? <HiChevronUp size={20} /> : <HiChevronDown size={20} />}
          </span>
        </button>

        {/* Expandable detail */}
        <div
          style={{
            maxHeight: isOpen ? 600 : 0,
            overflow: 'hidden',
            transition: 'max-height 0.4s ease',
          }}
        >
          <div style={{ padding: '0 1.5rem 1.5rem', borderTop: '1px solid var(--border)' }}>
            <ul style={{ paddingTop: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {job.highlights.map((h, j) => (
                <li
                  key={j}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                    color: 'var(--muted)',
                    fontSize: '0.92rem',
                    lineHeight: 1.6,
                  }}
                >
                  <span style={{ color: 'var(--cyan)', marginTop: '0.4rem', flexShrink: 0, fontSize: '0.5rem' }}>◆</span>
                  {h}
                </li>
              ))}
            </ul>

            {/* Tech stack */}
            <div style={{ marginTop: '1.25rem', display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {job.tech.map(t => (
                <span key={t} className="tech-badge">{t}</span>
              ))}
            </div>

            {/* Reason for leaving */}
            {job.reasonForLeaving && (
              <p
                style={{
                  marginTop: '1rem',
                  padding: '0.6rem 1rem',
                  borderRadius: 8,
                  background: 'rgba(255,255,255,0.03)',
                  borderLeft: '2px solid var(--border)',
                  fontSize: '0.8rem',
                  color: 'var(--muted)',
                  fontStyle: 'italic',
                }}
              >
                <strong style={{ color: 'var(--text)', fontStyle: 'normal' }}>Reason for leaving: </strong>
                {job.reasonForLeaving}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
