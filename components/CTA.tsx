'use client';

import { motion } from 'framer-motion';
import { Shield, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function CTA() {
  return (
    <section className="cta-section" style={{ margin: '0 var(--space-xl) var(--space-4xl)', borderRadius: 'var(--radius-2xl)', background: 'linear-gradient(135deg, rgba(0,240,255,0.06) 0%, rgba(123,44,191,0.06) 100%)', border: '1px solid var(--color-border)' }}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ position: 'relative', zIndex: 1 }}
      >
        <div className="badge-pill" style={{ marginBottom: 'var(--space-lg)', display: 'inline-flex' }}>
          <Shield size={14} /> COMECE AGORA
        </div>
        <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', marginBottom: 'var(--space-md)', maxWidth: '700px', margin: '0 auto var(--space-md)' }}>
          Pronto para escalar suas operações <span className="text-gradient">com IA?</span>
        </h2>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', maxWidth: '550px', margin: '0 auto var(--space-xl)', lineHeight: 1.7 }}>
          Agende uma demonstração gratuita e veja como a AiProspera pode transformar seu negócio hoje mesmo.
        </p>
        <div style={{ display: 'flex', gap: 'var(--space-lg)', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/demo" className="btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.05rem' }}>
            Agendar Demonstração <ArrowRight size={18} />
          </Link>
          <Link href="/faq" className="btn-secondary" style={{ padding: '1rem 2.5rem', fontSize: '1.05rem' }}>
            Falar com Especialista
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
