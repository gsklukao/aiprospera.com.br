import { useState, useEffect } from 'react';
import { Moon, Sun, X, Linkedin, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Outlet, Link, useLocation } from 'react-router-dom';

/* ============================
   Layout Component
   ============================ */
export default function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    return (localStorage.getItem('ui-theme') as 'dark' | 'light') || 'dark';
  });

  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('ui-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => prev === 'dark' ? 'light' : 'dark');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Catálogo', href: isHome ? '#catalogo' : '/#/catalogo' },
    { label: 'Soluções', href: isHome ? '#solucoes' : '/#solucoes' },
    { label: 'Ecossistema', href: isHome ? '#ecossistema' : '/#ecossistema' },
    { label: 'Como Funciona', href: isHome ? '#como-funciona' : '/#como-funciona' },
    { label: 'Planos', href: isHome ? '#planos' : '/#planos' },
    { label: 'FAQ', href: isHome ? '#faq' : '/#faq' },
  ];

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <div style={{ minHeight: '100vh', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>

      {/* Background Ambient Glows */}
      <div style={{ position: 'fixed', inset: 0, zIndex: -1, pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', top: '-15%', left: '-10%', width: '45vw', height: '45vw', background: 'radial-gradient(circle, rgba(0,240,255,0.06) 0%, transparent 70%)', filter: 'blur(80px)' }} />
        <div style={{ position: 'absolute', bottom: '-15%', right: '-10%', width: '45vw', height: '45vw', background: 'radial-gradient(circle, rgba(123,44,191,0.06) 0%, transparent 70%)', filter: 'blur(80px)' }} />
        <div style={{ position: 'absolute', top: '40%', left: '60%', width: '30vw', height: '30vw', background: 'radial-gradient(circle, rgba(0,180,216,0.04) 0%, transparent 70%)', filter: 'blur(100px)' }} />
      </div>

      {/* ===== NAVBAR ===== */}
      <header className={`floating-nav ${scrolled ? 'scrolled' : ''}`}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link to="/" style={{ fontSize: '1.5rem', fontWeight: 700, fontFamily: 'var(--font-heading)' }}>
            Ai<span className="text-gradient">Prospera</span>
          </Link>

          <nav className="nav-links">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', fontWeight: 500, transition: 'color 0.2s' }}
                onMouseOver={e => (e.currentTarget.style.color = 'var(--color-text-main)')}
                onMouseOut={e => (e.currentTarget.style.color = 'var(--color-text-muted)')}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)' }}>
            <button 
              onClick={toggleTheme} 
              aria-label="Alternar tema" 
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-text-main)', display: 'flex', alignItems: 'center', padding: '0.4rem' }}
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button className="btn-primary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.9rem', display: 'none' }} id="nav-cta-desktop">
              Fale com a IA
            </button>
            <style>{`@media(min-width:768px){#nav-cta-desktop{display:inline-flex!important}}`}</style>
            <button
              className={`hamburger-btn ${mobileMenuOpen ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              onClick={closeMobileMenu}
              style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-text-main)' }}
              aria-label="Fechar menu"
            >
              <X size={28} />
            </motion.button>
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={closeMobileMenu}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.08 }}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.button
              className="btn-primary"
              style={{ marginTop: 'var(--space-lg)', padding: '1rem 2.5rem', fontSize: '1.1rem' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              onClick={closeMobileMenu}
            >
              Fale com a IA
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      <main style={{ paddingTop: '5rem', flex: 1 }}>
        <Outlet />
      </main>

      {/* ===== FOOTER ===== */}
      <footer style={{ borderTop: '1px solid var(--color-border)', padding: 'var(--space-3xl) var(--space-xl) var(--space-xl)', background: 'var(--color-bg-darker)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--space-2xl)', marginBottom: 'var(--space-2xl)' }}>
            <div>
              <div style={{ fontSize: '1.5rem', fontWeight: 700, fontFamily: 'var(--font-heading)', marginBottom: 'var(--space-md)' }}>
                Ai<span className="text-gradient">Prospera</span>
              </div>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', lineHeight: 1.7, maxWidth: '280px' }}>
                Automatizando o presente para você focar no futuro. Inteligência artificial que trabalha por você 24/7.
              </p>
            </div>

            <div>
              <h4 style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-text-main)', marginBottom: 'var(--space-lg)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Soluções</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
                {['Automação WhatsApp', 'Chatbots IA', 'Agentes de Voz', 'IFinanças', 'AiProspera Drive'].map((item, i) => (
                  <a key={i} href={isHome ? '#solucoes' : '/#solucoes'} style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', transition: 'color 0.2s' }}
                    onMouseOver={e => (e.currentTarget.style.color = 'var(--color-primary)')}
                    onMouseOut={e => (e.currentTarget.style.color = 'var(--color-text-muted)')}
                  >{item}</a>
                ))}
            </div>
            </div>

            <div>
              <h4 style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-text-main)', marginBottom: 'var(--space-lg)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Empresa</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
                {[
                  { name: 'Sobre nós', to: '/' },
                  { name: 'Planos', to: isHome ? '#planos' : '/#planos' },
                  { name: 'Blog', to: '/' },
                  { name: 'Política de Privacidade', to: '/politica-de-privacidade' },
                  { name: 'Termos de Uso', to: '/termos-de-uso' },
                  { name: 'Exclusão de Dados', to: '/exclusao-de-dados' }
                ].map((item, i) => (
                  item.to.startsWith('#') || (isHome && item.to.includes('#')) ? (
                    <a key={i} href={item.to} style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', transition: 'color 0.2s' }}
                      onMouseOver={e => (e.currentTarget.style.color = 'var(--color-primary)')}
                      onMouseOut={e => (e.currentTarget.style.color = 'var(--color-text-muted)')}
                    >{item.name}</a>
                  ) : (
                    <Link key={i} to={item.to} style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', transition: 'color 0.2s' }}
                      onMouseOver={e => (e.currentTarget.style.color = 'var(--color-primary)')}
                      onMouseOut={e => (e.currentTarget.style.color = 'var(--color-text-muted)')}
                    >{item.name}</Link>
                  )
                ))}
              </div>
            </div>

            <div>
              <h4 style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-text-main)', marginBottom: 'var(--space-lg)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Contato</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
                  <Mail size={15} /> contato@aiprospera.com.br
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
                  <Phone size={15} /> (11) 9xxxx-xxxx
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
                  <MapPin size={15} /> São Paulo, SP
                </div>
                <div style={{ display: 'flex', gap: 'var(--space-md)', marginTop: 'var(--space-sm)' }}>
                  <a href="#" style={{ color: 'var(--color-text-dim)', transition: 'color 0.2s' }} onMouseOver={e => (e.currentTarget.style.color = 'var(--color-primary)')} onMouseOut={e => (e.currentTarget.style.color = 'var(--color-text-dim)')} aria-label="LinkedIn">
                    <Linkedin size={20} />
                  </a>
                  <a href="#" style={{ color: 'var(--color-text-dim)', transition: 'color 0.2s' }} onMouseOver={e => (e.currentTarget.style.color = 'var(--color-primary)')} onMouseOut={e => (e.currentTarget.style.color = 'var(--color-text-dim)')} aria-label="Instagram">
                    <Instagram size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: 'var(--space-lg)', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 'var(--space-md)' }}>
            <p style={{ color: 'var(--color-text-dim)', fontSize: '0.85rem' }}>
              &copy; {new Date().getFullYear()} AiProspera - Soluções. Todos os direitos reservados.
            </p>
            <p style={{ color: 'var(--color-text-dim)', fontSize: '0.8rem' }}>
              Feito com IA para humanos incríveis
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
