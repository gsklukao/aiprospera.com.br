'use client';

import { motion, Variants } from 'framer-motion';
import {
  TrendingUp,
  RotateCcw,
  UserPlus,
  CheckCircle2,
  Rocket
} from 'lucide-react';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const solutions = [
  {
    icon: <TrendingUp size={26} color="var(--color-primary)" />,
    boxClass: '',
    title: 'Fluxos de Alta Conversão',
    desc: 'Roteiros automatizados que guiam o seu cliente do "Oi" ao checkout sem atrito, derrubando objeções na hora.',
    bullets: ['Scripts otimizados', 'Fechamento automático', 'Atendimento 24h'],
  },
  {
    icon: <RotateCcw size={26} color="var(--color-secondary-light)" />,
    boxClass: 'icon-box-secondary',
    title: 'Recuperador de Vendas 24/7',
    desc: 'O robô identifica e persegue carrinhos abandonados, PIX não pagos e boletos vencidos via WhatsApp.',
    bullets: ['Recuperação em minutos', 'Lembretes amigáveis', 'Aumento imediato de ROI'],
  },
  {
    icon: <UserPlus size={26} color="var(--color-accent)" />,
    boxClass: 'icon-box-accent',
    title: 'Qualificação de Leads',
    desc: 'Separamos os curiosos dos compradores reais. Entregue apenas leads "quentes" para o seu time comercial escalar.',
    bullets: ['Filtro inteligente', 'Agendamento automático', 'Foco no que dá lucro'],
  },
];

export default function Solutions() {
  return (
    <section id="solucoes" style={{ padding: 'var(--space-3xl) 0 var(--space-4xl)' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 var(--space-xl)' }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={fadeInUp}
          className="section-header"
        >
          <div className="badge-pill" style={{ marginBottom: 'var(--space-md)', display: 'inline-flex' }}>
            <Rocket size={14} /> NOSSA TECNOLOGIA
          </div>
          <h2 className="section-title">
            O que oferecemos para o seu <span className="text-gradient">negócio</span>
          </h2>
          <p className="section-subtitle">
            Três pilares fundamentais para transformar seu WhatsApp em uma verdadeira máquina de lucro contínuo.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'var(--space-xl)',
          }}
        >
          {solutions.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="glass-card"
              style={{ padding: 'var(--space-2xl)' }}
            >
              <div className={`icon-box ${item.boxClass}`}>{item.icon}</div>
              <h3
                style={{
                  fontSize: '1.4rem',
                  marginTop: 'var(--space-lg)',
                  marginBottom: 'var(--space-sm)',
                }}
              >
                {item.title}
              </h3>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--space-lg)', lineHeight: 1.6 }}>
                {item.desc}
              </p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {item.bullets.map((b, j) => (
                  <li
                    key={j}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.55rem',
                      color: 'var(--color-text-dim)',
                      fontSize: '0.9rem',
                    }}
                  >
                    <CheckCircle2
                      size={15}
                      color="var(--color-primary)"
                      style={{ flexShrink: 0 }}
                    />
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
