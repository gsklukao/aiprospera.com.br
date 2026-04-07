'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, ArrowRight, ChevronDown, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

const bullets = [
  'Atenda clientes em segundos, 24 horas por dia, em todos os canais.',
  'Automatize cobranças e recuperação de crédito de forma inteligente e personalizada.',
  'Escale sua operação sem aumentar a folha de pagamento.',
];

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

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
              <span>A revolução da automação para PMEs e e-commerces</span>
            </div>

            <h1
              style={{
                fontSize: 'clamp(2.4rem, 5.5vw, 4.6rem)',
                lineHeight: 1.06,
                marginBottom: 'var(--space-lg)',
              }}
            >
              Funcionários Digitais que atendem,<br />
              cobram e{' '}
              <span className="text-gradient">convertem por você 24/7</span>
            </h1>

            <p
              style={{
                fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
                color: 'var(--color-text-muted)',
                maxWidth: '720px',
                margin: '0 auto var(--space-xl)',
                lineHeight: 1.8,
              }}
            >
              AiProspera cria agentes de IA super-especializados que assumem o atendimento multicanal
              (WhatsApp, voz e chat) e a recuperação de crédito da sua empresa, reduzindo custos
              operacionais em até 90% sem perder o toque humano.
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
                  fontSize: 'clamp(0.9rem, 1.4vw, 1.05rem)',
                  maxWidth: '620px',
                  textAlign: 'left',
                }}
              >
                <CheckCircle2
                  size={18}
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
              href="/#como-comecar"
              className="btn-primary"
              style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}
              id="hero-cta-primary"
            >
              Quero reduzir meus custos <ArrowRight size={18} />
            </Link>
            <Link
              href="/#como-funciona"
              className="btn-secondary"
              style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}
              id="hero-cta-secondary"
            >
              Ver como funciona na prática
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
          Scroll
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
