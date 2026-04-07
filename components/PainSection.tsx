'use client';

import { motion, Variants } from 'framer-motion';
import { AlertTriangle, XCircle } from 'lucide-react';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const painPoints = [
  'Gente que chama, some — e ninguém nunca mais puxa assunto.',
  'Carrinhos, boletos e PIX que ficam no "quase" e nunca mais são lembrados.',
  'Seu time respondendo curiosos o dia todo enquanto quem quer comprar espera.',
];

export default function PainSection() {
  return (
    <section
      id="dores"
      style={{
        padding: 'var(--space-3xl) 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle red ambient glow */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(255,60,60,0.04) 0%, transparent 70%)',
          zIndex: 0,
        }}
      />

      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 var(--space-xl)', position: 'relative', zIndex: 1 }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={fadeInUp}
          className="section-header"
        >
          <div
            className="badge-pill"
            style={{
              marginBottom: 'var(--space-md)',
              display: 'inline-flex',
              background: 'rgba(255,60,60,0.08)',
              borderColor: 'rgba(255,60,60,0.2)',
              color: '#ff6b6b',
            }}
          >
            <AlertTriangle size={14} /> O PROBLEMA
          </div>
          <h2 className="section-title">
            Hoje, seu WhatsApp está{' '}
            <span style={{ color: '#ff6b6b' }}>deixando dinheiro</span> na mesa
          </h2>
          <p className="section-subtitle" style={{ maxWidth: '680px', margin: '0 auto var(--space-2xl)' }}>
            E você provavelmente já sabe disso.
          </p>
        </motion.div>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          style={{
            listStyle: 'none',
            padding: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-md)',
            maxWidth: '700px',
            margin: '0 auto var(--space-2xl)',
          }}
        >
          {painPoints.map((point, i) => (
            <motion.li
              key={i}
              variants={fadeInUp}
              className="glass-card"
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1rem',
                padding: 'var(--space-lg) var(--space-xl)',
                borderColor: 'rgba(255,60,60,0.12)',
              }}
            >
              <XCircle
                size={22}
                color="#ff6b6b"
                style={{ marginTop: '0.15rem', flexShrink: 0 }}
              />
              <span style={{ color: 'var(--color-text-muted)', lineHeight: 1.6, fontSize: '1.05rem' }}>
                {point}
              </span>
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          style={{ textAlign: 'center' }}
        >
          <p
            style={{
              fontSize: 'clamp(1rem, 1.6vw, 1.2rem)',
              color: 'var(--color-text-muted)',
              maxWidth: '680px',
              margin: '0 auto',
              lineHeight: 1.8,
              borderLeft: '3px solid var(--color-primary)',
              paddingLeft: 'var(--space-lg)',
              textAlign: 'left',
            }}
          >
            Nossa Máquina de Vendas existe para transformar esse caos em uma linha reta:{' '}
            <strong style={{ color: 'var(--color-text)' }}>do "Oi" até o pagamento.</strong>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
