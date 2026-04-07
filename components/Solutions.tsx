'use client';

import { motion, Variants } from 'framer-motion';
import {
  TrendingUp,
  RotateCcw,
  UserPlus,
  CheckCircle2,
  Rocket,
  Brain
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
    desc: 'Roteiros de conversa que levam o cliente do primeiro "Oi" até o pagamento sem seu time precisar digitar tudo na mão.',
    bullets: ['Scripts otimizados por nicho', 'Fechamento automático', 'Atendimento 24h'],
  },
  {
    icon: <RotateCcw size={26} color="var(--color-secondary-light)" />,
    boxClass: 'icon-box-secondary',
    title: 'Recuperador Automático de Vendas',
    desc: 'Um robô que persegue carrinhos abandonados, PIX não pagos e boletos vencidos 24h por dia, com mensagens humanas e sem ser chato.',
    bullets: ['Recuperação em minutos', 'Tom natural e amigável', 'ROI imediato'],
  },
  {
    icon: <UserPlus size={26} color="var(--color-accent)" />,
    boxClass: 'icon-box-accent',
    title: 'Filtro e Qualificação de Leads',
    desc: 'A IA separa curiosos de compradores de verdade e entrega só os quentes para o time comercial focar em fechar.',
    bullets: ['Filtro inteligente', 'Agendamento automático', 'Foco no que dá lucro'],
  },
  {
    icon: <Brain size={26} color="var(--color-primary)" />,
    boxClass: '',
    title: 'Inteligência de Fechamento',
    desc: 'Tira dúvidas, derruba objeções e ajuda o cliente a decidir pela compra na hora — sem pressão e sem script genérico.',
    bullets: ['Objeções respondidas na hora', 'Linguagem adaptada ao perfil', 'Mais decisões de compra'],
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
            <Rocket size={14} /> O QUE A MÁQUINA FAZ
          </div>
          <h2 className="section-title">
            O que a sua Máquina de Vendas no{' '}
            <span className="text-gradient">WhatsApp</span> faz por você
          </h2>
          <p className="section-subtitle">
            Você tira o peso do atendimento braçal. A gente foca em transformar conversas em faturamento.
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
