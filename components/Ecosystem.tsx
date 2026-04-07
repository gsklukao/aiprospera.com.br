'use client';

import { motion, Variants } from 'framer-motion';
import { Target, Plug, Users2, ShieldCheck, CheckCircle2 } from 'lucide-react';

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
    title: 'Foco em PMEs, e-commerces e serviços',
    desc: 'Não oferecemos soluções genéricas. Desenhamos agentes pensando na sua realidade operacional e orçamento.',
  },
  {
    icon: <Plug size={26} color="var(--color-secondary-light)" />,
    boxClass: 'icon-box-secondary',
    title: 'Integração com seus sistemas',
    desc: 'Conectamos com CRM, ERP, gateways de pagamento e as principais ferramentas de atendimento que você já usa.',
  },
  {
    icon: <Users2 size={26} color="var(--color-accent)" />,
    boxClass: 'icon-box-accent',
    title: 'Time humano por trás da IA',
    desc: 'Acompanhamos as métricas, ajustamos fluxos e garantimos que o agente evolua com o seu negócio ao longo do tempo.',
  },
  {
    icon: <ShieldCheck size={26} color="var(--color-primary)" />,
    boxClass: '',
    title: 'Segurança e conformidade',
    desc: 'Tratamento responsável de dados, criptografia e estrutura adequada à LGPD e demais normas aplicáveis.',
  },
];

export default function Ecosystem() {
  return (
    <section id="diferenciais" style={{ padding: 'var(--space-4xl) 0', position: 'relative' }}>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(180deg, transparent 0%, rgba(0,240,255,0.02) 50%, transparent 100%)',
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
          <div
            className="badge-pill badge-pill-secondary"
            style={{ marginBottom: 'var(--space-md)', display: 'inline-flex' }}
          >
            POR QUE AIPROSPERA
          </div>
          <h2 className="section-title">
            Por que escolher a AiProspera para seus{' '}
            <span className="text-gradient">Funcionários Digitais</span>
          </h2>
          <p className="section-subtitle">
            Combinamos tecnologia de ponta com acompanhamento humano contínuo para entregar
            resultados reais no seu negócio.
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
            <motion.div
              key={i}
              variants={fadeInUp}
              className="glass-card"
              style={{ padding: 'var(--space-2xl)' }}
            >
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
