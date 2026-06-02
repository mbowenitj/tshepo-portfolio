import { personal } from '../data/portfolioData';
import { HiHeart } from 'react-icons/hi';
import { FaLinkedin, FaGlobe } from 'react-icons/fa';

const year = new Date().getFullYear();

const socials = [
  { icon: <FaLinkedin size={18} />, href: personal.linkedin, label: 'LinkedIn' },
  { icon: <FaGlobe    size={18} />, href: personal.portfolio, label: 'Portfolio' },
];

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--border)',
        padding: '2.5rem 1.5rem',
        textAlign: 'center',
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          {/* Left */}
          <span
            style={{
              fontFamily: 'var(--font-head)',
              fontWeight: 700,
              fontSize: '1rem',
              background: 'linear-gradient(135deg, var(--purple), var(--cyan))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Tshepo Mboweni
          </span>

          {/* Center */}
          <p
            style={{
              color: 'var(--muted)',
              fontSize: '0.82rem',
              fontFamily: 'var(--font-mono)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
            }}
          >
            Tshepo Mboweni. All Rights Reserved &copy; {year}
          </p>

          {/* Right – socials */}
          <div style={{ display: 'flex', gap: '1rem' }}>
            {socials.map(s => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                style={{
                  color: 'var(--muted)',
                  transition: 'color 0.2s',
                  display: 'flex',
                }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--purple)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
