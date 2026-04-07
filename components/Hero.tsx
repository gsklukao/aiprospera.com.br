'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Zap, ArrowRight, ChevronDown, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

const bullets = [
  'Fluxos de conversa que levam do "Oi" ao pagamento sem intervenção humana.',
  'Robô que persegue carrinhos, boletos e PIX não pagos 24h por dia.',
  'Filtro inteligente que entrega só leads quentes para o seu comercial.',
];

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '92vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        paddingBottom: 'var(--space-4xl)',
      }}
    >
      <div className="hero-grid-bg" />

      <div
        style={{
          width: '100%',
          maxWidth: '1000px',
          margin: '0 auto',
          padding: 'var(--space-2xl) var(--space-xl)',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="badge-pill" style={{ marginBottom: 'var(--space-lg)', display: 'inline-flex' }}>
              <Zap size={14} />
              <span>Máquina de Vendas com IA no WhatsApp</span>
            </div>

            <h1
              style={{
                fontSize: 'clamp(2.4rem, 5.5vw, 4.6rem)',
                lineHeight: 1.06,
                marginBottom: 'var(--space-lg)',
              }}
            >
              Pare de perder{' '}
              <span className="text-gradient">vendas </span>
              no WhatsApp
            </h1>

            <p
              style={{
                fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
                color: 'var(--color-text-muted)',
                maxWidth: '780px',
                margin: '0 auto var(--space-xl)',
                lineHeight: 1.8,
              }}
            >
              A primeira Máquina de Vendas com IA que atende, responde, recupera carrinhos abandonados e cobra PIX não pagos 24h por dia — enquanto seu time fala só com quem está pronto para comprar.
            </p>
          </motion.div>

          {/* Bullets */}
          <motion.ul
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            style={{
              listStyle: 'none',
              padding: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-sm)',
              alignItems: 'center',
              marginBottom: 'var(--space-2xl)',
            }}
          >
            {bullets.map((b, i) => (
              <li
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.6rem',
                  color: 'var(--color-text-muted)',
                  fontSize: 'clamp(0.9rem, 1.4vw, 1.1rem)',
                  maxWidth: '680px',
                  textAlign: 'left',
                }}
              >
                <CheckCircle2
                  size={20}
                  color="var(--color-primary)"
                  style={{ marginTop: '0.18rem', flexShrink: 0 }}
                />
                {b}
              </li>
            ))}
          </motion.ul>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <Link
              href="https://wa.me/5511999999999?text=Quero+ativar+minha+m%C3%A1quina+de+vendas+no+WhatsApp"
              target="_blank"
              className="btn-primary"
              style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}
              id="hero-cta-main"
            >
              Quero ativar minha Máquina de Vendas <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.25rem',
        }}
      >
        <span style={{ fontSize: '0.7rem', color: 'var(--color-text-dim)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
          Explore
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <ChevronDown size={20} color="var(--color-text-dim)" />
        </motion.div>
      </motion.div>
    </section>
  );
}
