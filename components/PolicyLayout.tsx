'use client';

import { motion, Variants } from 'framer-motion';
import { ReactNode } from 'react';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } }
};

interface PolicyLayoutProps {
  title: string;
  subtitle: string;
  children: ReactNode;
}

export default function PolicyLayout({ title, subtitle, children }: PolicyLayoutProps) {
  return (
    <section style={{ padding: 'var(--space-3xl) 0 var(--space-4xl)' }}>
      <div className="section-container" style={{ maxWidth: '800px' }}>
        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: 'var(--space-lg)', color: 'var(--color-text-main)' }}>
            {title} <span className="text-gradient">{subtitle}</span>
          </h1>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--space-2xl)' }}>
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)', color: 'var(--color-text-dim)', lineHeight: 1.7 }}>
            {children}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
