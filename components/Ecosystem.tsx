'use client';

import { motion, Variants } from 'framer-motion';
import { Target, Zap, BarChart2, Shield, CheckCircle2 } from 'lucide-react';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.13 } },
};

const differentials = [
  {
    icon: <Target size={26} color="var(--color-primary)" />,
    boxClass: '',
    title: 'Estratégia personalizada para o seu nicho',
    desc: 'Não usamos scripts genéricos. Cada fluxo de vendas é montado conforme o seu produto, público e processo de fechamento.',
  },
  {
    icon: <Zap size={26} color="var(--color-secondary-light)" />,
    boxClass: 'icon-box-secondary',
    title: 'Ativo 24/7, pronto para fechar',
    desc: 'Enquanto você dorme, o robô está qualificando leads, respondendo objeções e convertendo clientes sem perder timing.',
  },
  {
    icon: <BarChart2 size={26} color="var(--color-accent)" />,
    boxClass: 'icon-box-accent',
    title: 'Métricas claras de faturamento',
    desc: 'Acompanhe em tempo real quantas vendas foram fechadas, quantos boletos recuperados e qual o ROI gerado pela IA.',
  },
  {
    icon: <Shield size={26} color="var(--color-primary)" />,
    boxClass: '',
    title: 'Seguro e em conformidade com a LGPD',
    desc: 'Seus dados e os dos seus clientes são protegidos com criptografia e boas práticas de privacidade em todos os fluxos.',
  },
];

export default function Ecosystem() {
  return (
    <section id="diferenciais" style={{ padding: 'var(--space-4xl) 0', position: 'relative' }}>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, transparent 0%, rgba(0,240,255,0.02) 50%, transparent 100%)',
          zIndex: -1,
        }}
      />
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 var(--space-xl)' }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="section-header"
        >
          <div className="badge-pill badge-pill-secondary" style={{ marginBottom: 'var(--space-md)', display: 'inline-flex' }}>
            POR QUE AIPROSPERA
          </div>
          <h2 className="section-title">
            Por que vender com a <span className="text-gradient">AiProspera</span>
          </h2>
          <p className="section-subtitle">
            Não somos mais um chatbot. Somos uma equipe de vendas digital treinada especificamente para o seu negócio.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'var(--space-xl)',
          }}
        >
          {differentials.map((item, i) => (
            <motion.div key={i} variants={fadeInUp} className="glass-card" style={{ padding: 'var(--space-2xl)' }}>
              <div className={`icon-box ${item.boxClass}`}>{item.icon}</div>
              <h3 style={{ fontSize: '1.15rem', marginTop: 'var(--space-lg)', marginBottom: 'var(--space-sm)' }}>
                {item.title}
              </h3>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7, fontSize: '0.95rem' }}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
