import { useEffect, useState } from 'react';
import { HiArrowDown, HiMail } from 'react-icons/hi';
import { FaLinkedin, FaGithub, FaGlobe } from 'react-icons/fa';
import { personal, stats } from '../data/portfolioData';

const ROLES = personal.roles;

export default function Hero() {
  const [displayed, setDisplayed] = useState('');
  const [roleIdx, setRoleIdx]     = useState(0);
  const [deleting, setDeleting]   = useState(false);
  const [charIdx, setCharIdx]     = useState(0);

  useEffect(() => {
    const current = ROLES[roleIdx];
    let timeout;

    if (!deleting && charIdx <= current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIdx));
        setCharIdx(c => c + 1);
      }, charIdx === 0 ? 500 : 70);
    } else if (!deleting && charIdx > current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => {
        setCharIdx(c => c - 1);
        setDisplayed(current.slice(0, charIdx - 1));
      }, 40);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setRoleIdx(i => (i + 1) % ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [charIdx, deleting, roleIdx]);

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
      className="grid-bg"
    >
      {/* Ambient orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '6rem 1.5rem 4rem', width: '100%', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '3rem', alignItems: 'center' }} className="hero-grid">

          {/* Left – Text */}
          <div>
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.9rem',
                color: 'var(--cyan)',
                marginBottom: '1rem',
                opacity: 0,
                animation: 'fadeUp 0.6s ease forwards',
              }}
            >
              Hi, my name is
            </p>

            <h1
              style={{
                fontFamily: 'var(--font-head)',
                fontSize: 'clamp(2.8rem, 8vw, 5.5rem)',
                fontWeight: 700,
                lineHeight: 1.05,
                marginBottom: '0.3rem',
                opacity: 0,
                animation: 'fadeUp 0.6s ease 0.15s forwards',
              }}
            >
              {personal.name.split(' ')[0]}{' '}
              <span className="gradient-text">{personal.name.split(' ')[1]}</span>
            </h1>

            <h2
              style={{
                fontFamily: 'var(--font-head)',
                fontSize: 'clamp(1.4rem, 3.5vw, 2.4rem)',
                fontWeight: 500,
                color: 'var(--muted)',
                marginBottom: '1.5rem',
                minHeight: '3rem',
                display: 'flex',
                alignItems: 'center',
                opacity: 0,
                animation: 'fadeUp 0.6s ease 0.3s forwards',
              }}
            >
              <span style={{ color: 'var(--text)' }}>{displayed}</span>
              <span className="cursor" />
            </h2>

            <p
              style={{
                fontSize: '1.05rem',
                color: 'var(--muted)',
                maxWidth: 500,
                lineHeight: 1.7,
                marginBottom: '2.5rem',
                opacity: 0,
                animation: 'fadeUp 0.6s ease 0.45s forwards',
              }}
            >
              {personal.tagline}
            </p>

            {/* CTA Buttons */}
            <div
              style={{
                display: 'flex',
                gap: '1rem',
                flexWrap: 'wrap',
                marginBottom: '3rem',
                opacity: 0,
                animation: 'fadeUp 0.6s ease 0.6s forwards',
              }}
            >
              <a href="#contact" className="btn-primary">
                <HiMail size={18} /> Get In Touch
              </a>
              <a href="#experience" className="btn-outline">
                View My Work
              </a>
            </div>

            {/* Social Links */}
            <div
              style={{
                display: 'flex',
                gap: '1.25rem',
                alignItems: 'center',
                opacity: 0,
                animation: 'fadeUp 0.6s ease 0.75s forwards',
              }}
            >
              {[
                { icon: <FaLinkedin size={20} />, href: personal.linkedin,  label: 'LinkedIn' },
                { icon: <FaGlobe    size={20} />, href: personal.portfolio, label: 'Portfolio' },
                { icon: <HiMail    size={20} />, href: `mailto:${personal.email}`, label: 'Email' },
              ].map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  style={{
                    color: 'var(--muted)',
                    transition: 'color 0.2s, transform 0.2s',
                    display: 'flex',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = 'var(--purple)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'var(--muted)';  e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  {s.icon}
                </a>
              ))}
              <div style={{ width: 40, height: 1, background: 'var(--border)' }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--muted)' }}>
                {personal.location}
              </span>
            </div>
          </div>

          {/* Right – Avatar card */}
          <div className="hero-avatar" style={{ textAlign: 'center' }}>
            <div
              style={{
                opacity: 0,
                animation: 'fadeIn 1s ease 0.5s forwards',
              }}
            >
              {/* Animated ring around initial */}
              <div className="avatar-ring" style={{ display: 'inline-block' }}>
                <div
                  style={{
                    width: 200,
                    height: 200,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #1a0533, #001a2e)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '5rem',
                    fontFamily: 'var(--font-head)',
                    fontWeight: 700,
                  }}
                >
                  <span className="gradient-text">TM</span>
                </div>
              </div>

              {/* Availability badge */}
              <div
                style={{
                  marginTop: '1.25rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.45rem 1rem',
                  borderRadius: '50px',
                  background: 'rgba(16,185,129,0.1)',
                  border: '1px solid rgba(16,185,129,0.3)',
                  fontSize: '0.78rem',
                  fontFamily: 'var(--font-mono)',
                  color: '#10b981',
                }}
              >
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#10b981', display: 'inline-block', animation: 'pulse-dot 2s ease-in-out infinite' }} />
                Available for hire
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1px',
            marginTop: '5rem',
            background: 'var(--border)',
            borderRadius: 16,
            overflow: 'hidden',
            opacity: 0,
            animation: 'fadeUp 0.6s ease 0.9s forwards',
          }}
          className="stats-grid"
        >
          {stats.map((s, i) => (
            <div
              key={i}
              style={{
                background: 'rgba(255,255,255,0.03)',
                padding: '1.5rem',
                textAlign: 'center',
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(168,85,247,0.08)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.03)'}
            >
              <div className="stat-value gradient-text">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '3rem',
            opacity: 0,
            animation: 'fadeIn 1s ease 1.2s forwards',
          }}
        >
          <a
            href="#about"
            style={{
              color: 'var(--muted)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.5rem',
              textDecoration: 'none',
              fontSize: '0.75rem',
              fontFamily: 'var(--font-mono)',
              animation: 'bounce 2s ease-in-out infinite',
            }}
          >
            <span>scroll</span>
            <HiArrowDown />
          </a>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(6px); }
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.4; }
        }
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-avatar { display: none; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
