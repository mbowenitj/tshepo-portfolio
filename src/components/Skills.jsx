import { skills } from '../data/portfolioData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Skills() {
  const [headerRef, headerVisible] = useScrollAnimation();

  return (
    <section id="skills" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="section">
        <div ref={headerRef} className={`reveal${headerVisible ? ' visible' : ''}`}>
          <p className="section-label">What I work with</p>
          <h2 className="section-title">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="section-divider" />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }} className="skills-grid">
          {skills.map((group, gi) => (
            <SkillGroup key={gi} group={group} delay={gi * 100} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .skills-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function SkillGroup({ group, delay }) {
  const [ref, visible] = useScrollAnimation(0.1);

  return (
    <div
      ref={ref}
      className={`reveal glass gradient-border card-hover${visible ? ' visible' : ''}`}
      style={{
        borderRadius: 20,
        padding: '1.75rem',
        transitionDelay: `${delay}ms`,
      }}
    >
      {/* Category header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
        <div
          style={{
            width: 10,
            height: 10,
            borderRadius: '50%',
            background: group.color,
            boxShadow: `0 0 10px ${group.color}`,
            flexShrink: 0,
          }}
        />
        <h3
          style={{
            fontFamily: 'var(--font-head)',
            fontWeight: 600,
            fontSize: '1rem',
            color: group.color,
          }}
        >
          {group.category}
        </h3>
      </div>

      {/* Tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
        {group.items.map(item => (
          <span
            key={item}
            className="skill-tag"
            style={{
              borderColor: `${group.color}30`,
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = group.color;
              e.currentTarget.style.background  = `${group.color}15`;
              e.currentTarget.style.color        = group.color;
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = `${group.color}30`;
              e.currentTarget.style.background  = 'rgba(255,255,255,0.05)';
              e.currentTarget.style.color        = '';
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
