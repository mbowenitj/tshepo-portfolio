import { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

const links = [
  { href: '#about',      label: '01. About' },
  { href: '#skills',     label: '02. Skills' },
  { href: '#experience', label: '03. Experience' },
  { href: '#projects',   label: '04. Projects' },
  { href: '#education',  label: '05. Education' },
  { href: '#contact',    label: '06. Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [active, setActive]       = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      // Highlight active section
      const sections = links.map(l => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActive('#' + sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'background 0.3s, box-shadow 0.3s',
        background: scrolled ? 'rgba(5,8,22,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        boxShadow: scrolled ? '0 1px 0 rgba(255,255,255,0.06)' : 'none',
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
          {/* Logo */}
          <a href="#" style={{ textDecoration: 'none' }}>
            <span
              style={{
                fontFamily: 'var(--font-head)',
                fontWeight: 700,
                fontSize: '1.2rem',
                background: 'linear-gradient(135deg, var(--purple), var(--cyan))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              TM/
            </span>
          </a>

          {/* Desktop links */}
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}
               className="desktop-nav"
          >
            {links.map(l => (
              <a key={l.href} href={l.href} className={`nav-link${active === l.href ? ' active' : ''}`}>
                {l.label}
              </a>
            ))}
            <a
              href="mailto:mbowenitshepo@gmail.com"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.82rem',
                padding: '0.45rem 1.2rem',
                borderRadius: '50px',
                border: '1px solid var(--purple)',
                color: 'var(--purple)',
                textDecoration: 'none',
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(168,85,247,0.1)'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            >
              Hire Me
            </a>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(v => !v)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--text)',
              fontSize: '1.5rem',
              padding: '0.25rem',
            }}
            className="mobile-nav-toggle"
            aria-label="Toggle menu"
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`mobile-menu${menuOpen ? ' open' : ''}`} style={{ borderTop: menuOpen ? '1px solid var(--border)' : 'none' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0', padding: menuOpen ? '0.5rem 0 1rem' : 0 }}>
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  padding: '0.75rem 0',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.9rem',
                  color: active === l.href ? 'var(--text)' : 'var(--muted)',
                  textDecoration: 'none',
                  borderBottom: '1px solid var(--border)',
                }}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) { .mobile-nav-toggle { display: none !important; } }
        @media (max-width: 767px) { .desktop-nav { display: none !important; } }
      `}</style>
    </nav>
  );
}
