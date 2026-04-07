'use client';

import { motion } from 'framer-motion';
import { Shield, ArrowRight, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function CTA() {
  return (
    <section id="cta" className="cta-section" style={{ margin: '0 var(--space-xl) var(--space-4xl)', borderRadius: 'var(--radius-2xl)', background: 'linear-gradient(135deg, rgba(0,240,255,0.06) 0%, rgba(123,44,191,0.06) 100%)', border: '1px solid var(--color-border)' }}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ position: 'relative', zIndex: 1 }}
      >
        <div className="badge-pill" style={{ marginBottom: 'var(--space-lg)', display: 'inline-flex' }}>
          <Shield size={14} /> RESULTADOS IMEDIATOS
        </div>
        <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', marginBottom: 'var(--space-md)', maxWidth: '800px', margin: '0 auto var(--space-md)' }}>
          Pare de perder <span className="text-gradient">vendas</span> no WhatsApp agora mesmo
        </h2>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto var(--space-xl)', lineHeight: 1.7 }}>
          Agende um diagnóstico gratuito de 30 minutos e descubra como transformar suas conversas em um fluxo de lucro automático.
        </p>
        <div style={{ display: 'flex', gap: 'var(--space-lg)', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="https://wa.me/5511999999999?text=Quero+agendar+meu+diagn%C3%B3stico" target="_blank" className="btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.15rem' }}>
            Agendar Diagnóstico Gratuito <ArrowRight size={18} />
          </Link>
          <Link href="https://wa.me/5511999999999" target="_blank" className="btn-secondary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
            <MessageCircle size={18} /> Falar com Consultor
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
