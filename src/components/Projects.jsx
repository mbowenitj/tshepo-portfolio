import { useState } from 'react';
import { HiExternalLink, HiBriefcase, HiCode } from 'react-icons/hi';
import { FaFire } from 'react-icons/fa';
import { enterpriseProjects, personalProjects, thumb } from '../data/portfolioData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

/* Two-level image fallback: local → thum.io → placeholder */
function ProjectImage({ image, url, title }) {
  const [src, setSrc]         = useState(image);
  const [failed, setFailed]   = useState(false);
  const fallbackUrl           = thumb(url);

  if (failed) return null; // triggers FallbackPreview in parent

  return (
    <img
      src={src}
      alt={`${title} screenshot`}
      onError={() => {
        if (src === image) { setSrc(fallbackUrl); }   // try thum.io
        else               { setFailed(true); }        // give up
      }}
      style={{
        position: 'relative', zIndex: 1,
        width: '100%', height: '100%',
        objectFit: 'cover', objectPosition: 'top',
        display: 'block',
        transition: 'transform 0.5s ease',
      }}
      onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
      onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
    />
  );
}

const TABS = [
  { id: 'enterprise', label: 'Enterprise', icon: <HiBriefcase size={14} />, data: enterpriseProjects },
  { id: 'personal',   label: 'Personal',   icon: <HiCode      size={14} />, data: personalProjects  },
];

// Colour per category
const CAT_COLORS = {
  'Gaming Platform':  '#a855f7',
  'Enterprise SaaS':  '#22d3ee',
  'Education Portal': '#06b6d4',
  'EdTech':           '#10b981',
  'Marketing / Events':'#f59e0b',
  'Corporate':        '#64748b',
  'Automotive':       '#ef4444',
  'Mobile App':       '#a855f7',
  'Web App':          '#22d3ee',
};

export default function Projects() {
  const [activeTab, setActiveTab] = useState('enterprise');
  const [headerRef, headerVisible] = useScrollAnimation();
  const current = TABS.find(t => t.id === activeTab);

  return (
    <section id="projects" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="section">
        {/* Header */}
        <div ref={headerRef} className={`reveal${headerVisible ? ' visible' : ''}`}>
          <p className="section-label">What I've shipped</p>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="section-divider" />
        </div>

        {/* Tab switcher */}
        <div
          style={{
            display: 'inline-flex',
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid var(--border)',
            borderRadius: 50,
            padding: '0.3rem',
            marginBottom: '3rem',
            gap: '0.25rem',
          }}
        >
          {TABS.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.55rem 1.4rem',
                borderRadius: 50,
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.82rem',
                fontWeight: 500,
                transition: 'all 0.25s ease',
                background: activeTab === tab.id
                  ? 'linear-gradient(135deg, var(--purple), var(--cyan))'
                  : 'transparent',
                color: activeTab === tab.id ? '#fff' : 'var(--muted)',
                boxShadow: activeTab === tab.id ? '0 4px 14px rgba(168,85,247,0.4)' : 'none',
              }}
            >
              {tab.icon}
              {tab.label}
              <span
                style={{
                  fontSize: '0.7rem',
                  background: activeTab === tab.id ? 'rgba(255,255,255,0.25)' : 'rgba(255,255,255,0.1)',
                  borderRadius: 50,
                  padding: '0.05rem 0.45rem',
                }}
              >
                {tab.data.length}
              </span>
            </button>
          ))}
        </div>

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(310px, 1fr))',
            gap: '1.5rem',
          }}
          className="projects-grid"
        >
          {current.data.map((p, i) =>
            activeTab === 'enterprise'
              ? <EnterpriseCard key={p.url} project={p} index={i} />
              : <PersonalCard   key={p.url} project={p} index={i} />
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .projects-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

/* ── Enterprise project card ───────────────────────────── */
function EnterpriseCard({ project, index }) {
  const [ref, visible] = useScrollAnimation(0.08);
  const catColor = CAT_COLORS[project.category] || 'var(--purple)';

  return (
    <div
      ref={ref}
      className={`reveal${visible ? ' visible' : ''}`}
      style={{
        transitionDelay: `${(index % 3) * 100}ms`,
        borderRadius: 20,
        overflow: 'hidden',
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid var(--border)',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.3s, box-shadow 0.3s, border-color 0.3s',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-6px)';
        e.currentTarget.style.boxShadow = `0 20px 50px rgba(0,0,0,0.4)`;
        e.currentTarget.style.borderColor = catColor + '60';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
        e.currentTarget.style.borderColor = 'var(--border)';
      }}
    >
      {/* Screenshot preview */}
      <div style={{ position: 'relative', height: 190, overflow: 'hidden', background: '#0a0a14', flexShrink: 0 }}>
        <ProjectImage image={project.image} url={project.url} title={project.title} />
        {/* FallbackPreview sits underneath; shows through when img is absent */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <FallbackPreview title={project.title} color={catColor} />
        </div>

        {/* Overlay gradient at bottom */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: 60,
          background: 'linear-gradient(to top, rgba(5,8,22,0.95), transparent)',
          pointerEvents: 'none',
        }} />

        {/* Category chip */}
        <span
          style={{
            position: 'absolute',
            top: 10,
            left: 10,
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            padding: '0.2rem 0.6rem',
            borderRadius: 50,
            background: `${catColor}25`,
            border: `1px solid ${catColor}60`,
            color: catColor,
            backdropFilter: 'blur(8px)',
          }}
        >
          {project.category}
        </span>

        {/* Visit link – top right */}
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          title="Visit site"
          style={{
            position: 'absolute',
            top: 10,
            right: 10,
            width: 32,
            height: 32,
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.12)',
            border: '1px solid rgba(255,255,255,0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            backdropFilter: 'blur(8px)',
            transition: 'background 0.2s',
            textDecoration: 'none',
          }}
          onMouseEnter={e => e.currentTarget.style.background = catColor}
          onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.12)'}
        >
          <HiExternalLink size={14} />
        </a>
      </div>

      {/* Body */}
      <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.6rem', flex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem' }}>
          <h3 style={{ fontFamily: 'var(--font-head)', fontWeight: 700, fontSize: '1.05rem', color: 'var(--text)', lineHeight: 1.3 }}>
            {project.title}
          </h3>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--muted)', whiteSpace: 'nowrap', marginTop: 2 }}>
            {project.period}
          </span>
        </div>

        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: catColor }}>
          @ {project.company}
        </p>

        <p style={{ color: 'var(--muted)', fontSize: '0.85rem', lineHeight: 1.6, flex: 1 }}>
          {project.description}
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginTop: 'auto', paddingTop: '0.5rem' }}>
          {project.tech.map(t => (
            <span key={t} style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.68rem',
              padding: '0.15rem 0.55rem',
              borderRadius: 4,
              background: `${catColor}12`,
              border: `1px solid ${catColor}30`,
              color: catColor,
              whiteSpace: 'nowrap',
            }}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Personal project card ─────────────────────────────── */
function PersonalCard({ project, index }) {
  const [ref, visible] = useScrollAnimation(0.08);
  const catColor = CAT_COLORS[project.category] || 'var(--purple)';

  return (
    <div
      ref={ref}
      className={`reveal${visible ? ' visible' : ''}`}
      style={{
        transitionDelay: `${index * 100}ms`,
        borderRadius: 20,
        overflow: 'hidden',
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid var(--border)',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.3s, box-shadow 0.3s, border-color 0.3s',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-6px)';
        e.currentTarget.style.boxShadow = `0 20px 50px rgba(168,85,247,0.15)`;
        e.currentTarget.style.borderColor = catColor + '60';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
        e.currentTarget.style.borderColor = 'var(--border)';
      }}
    >
      {/* Screenshot */}
      <div style={{ position: 'relative', height: 200, overflow: 'hidden', background: '#0a0a14', flexShrink: 0 }}>
        <ProjectImage image={project.image} url={project.url} title={project.title} />
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <FallbackPreview title={project.title} color={catColor} />
        </div>

        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: 60,
          background: 'linear-gradient(to top, rgba(5,8,22,0.95), transparent)',
          pointerEvents: 'none',
        }} />

        {/* Status badge */}
        <span
          style={{
            position: 'absolute',
            top: 10,
            left: 10,
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            padding: '0.2rem 0.65rem',
            borderRadius: 50,
            background: 'rgba(16,185,129,0.15)',
            border: '1px solid rgba(16,185,129,0.4)',
            color: '#10b981',
            backdropFilter: 'blur(8px)',
          }}
        >
          <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#10b981', display: 'inline-block' }} />
          {project.status}
        </span>

        {/* Category */}
        <span
          style={{
            position: 'absolute',
            bottom: 14,
            left: 12,
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            color: catColor,
          }}
        >
          {project.category}
        </span>

        {/* Visit link */}
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          title="Visit site"
          style={{
            position: 'absolute',
            top: 10,
            right: 10,
            width: 32,
            height: 32,
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.12)',
            border: '1px solid rgba(255,255,255,0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            backdropFilter: 'blur(8px)',
            transition: 'background 0.2s',
            textDecoration: 'none',
          }}
          onMouseEnter={e => e.currentTarget.style.background = 'var(--purple)'}
          onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.12)'}
        >
          <HiExternalLink size={14} />
        </a>
      </div>

      {/* Body */}
      <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.7rem', flex: 1 }}>
        <h3 style={{ fontFamily: 'var(--font-head)', fontWeight: 700, fontSize: '1.05rem', color: 'var(--text)' }}>
          {project.title}
        </h3>

        <p style={{ color: 'var(--muted)', fontSize: '0.85rem', lineHeight: 1.65 }}>
          {project.description}
        </p>

        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          {project.highlights.map((h, j) => (
            <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--muted)', lineHeight: 1.5 }}>
              <span style={{ color: catColor, marginTop: '0.35rem', flexShrink: 0, fontSize: '0.45rem' }}>◆</span>
              {h}
            </li>
          ))}
        </ul>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginTop: 'auto', paddingTop: '0.4rem' }}>
          {project.tech.map(t => (
            <span key={t} style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.68rem',
              padding: '0.15rem 0.55rem',
              borderRadius: 4,
              background: `${catColor}12`,
              border: `1px solid ${catColor}30`,
              color: catColor,
              whiteSpace: 'nowrap',
            }}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Fallback when screenshot service is unavailable ────── */
function FallbackPreview({ title, color }) {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        background: `linear-gradient(135deg, ${color}15, ${color}05)`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '0.5rem',
      }}
    >
      <div style={{ width: 48, height: 48, borderRadius: 12, background: `${color}25`, border: `1px solid ${color}40`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <HiExternalLink size={22} color={color} />
      </div>
      <span style={{ fontFamily: 'var(--font-head)', fontWeight: 600, fontSize: '0.9rem', color: 'var(--muted)', textAlign: 'center', padding: '0 1rem' }}>
        {title}
      </span>
    </div>
  );
}
