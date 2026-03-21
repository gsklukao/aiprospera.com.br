import { Linkedin, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--color-border)', padding: 'var(--space-3xl) var(--space-xl) var(--space-xl)', background: 'var(--color-bg-darker)' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--space-2xl)', marginBottom: 'var(--space-2xl)' }}>
          <div>
            <div style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 'var(--space-md)' }}>
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
                <Link key={i} href="/#solucoes" style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', transition: 'color 0.2s' }}>
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-text-main)', marginBottom: 'var(--space-lg)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Empresa</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
              {[
                { name: 'Sobre nós', to: '/' },
                { name: 'Planos', to: '/#planos' },
                { name: 'Blog', to: '/' },
                { name: 'Política de Privacidade', to: '/politica-de-privacidade' },
                { name: 'Termos de Uso', to: '/termos-de-uso' },
                { name: 'Exclusão de Dados', to: '/exclusao-de-dados' }
              ].map((item, i) => (
                <Link key={i} href={item.to} style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', transition: 'color 0.2s' }}>
                  {item.name}
                </Link>
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
                <Phone size={15} /> (16) 92000-9428
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
                <MapPin size={15} /> São Paulo, SP
              </div>
              <div style={{ display: 'flex', gap: 'var(--space-md)', marginTop: 'var(--space-sm)' }}>
                <a href="#" style={{ color: 'var(--color-text-dim)', transition: 'color 0.2s' }} aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
                <a href="#" style={{ color: 'var(--color-text-dim)', transition: 'color 0.2s' }} aria-label="Instagram">
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
            Tecnologia que resolve seu problema
          </p>
        </div>
      </div>
    </footer>
  );
}
