'use client';

import { motion, Variants } from 'framer-motion';
import { Search, Cpu, Rocket, BarChart3, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const steps = [
  {
    step: 1,
    icon: <Search size={20} />,
    title: 'Diagnóstico rápido (30 minutos)',
    desc: 'Entendemos seus canais, volume de atendimento e cobrança e os principais gargalos da operação.',
  },
  {
    step: 2,
    icon: <Cpu size={20} />,
    title: 'Desenho do Funcionário Digital',
    desc: 'Definimos quais tarefas ele vai assumir, quais integrações precisa e quais metas vamos perseguir juntos.',
  },
  {
    step: 3,
    icon: <Rocket size={20} />,
    title: 'Implementação e testes',
    desc: 'Colocamos o agente em produção em um subconjunto de clientes e casos, medimos e refinamos antes de escalar.',
  },
  {
    step: 4,
    icon: <BarChart3 size={20} />,
    title: 'Escala com segurança',
    desc: 'Expandimos o uso após validar performance e experiência do cliente, com métricas claras em cada etapa.',
  },
];

export default function Timeline() {
  return (
    <section id="como-comecar" style={{ padding: 'var(--space-4xl) 0' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 var(--space-xl)' }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="section-header"
        >
          <div
            className="badge-pill"
            style={{ marginBottom: 'var(--space-md)', display: 'inline-flex' }}
          >
            <Rocket size={14} /> COMO COMEÇAMOS
          </div>
          <h2 className="section-title">
            Começar é simples e <span className="text-gradient">guiado</span>
          </h2>
          <p className="section-subtitle">
            Um processo transparente em 4 etapas para colocar seu Funcionário Digital em operação
            rapidamente.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          style={{ maxWidth: '700px', margin: '0 auto' }}
        >
          {steps.map((item, i) => (
            <motion.div key={i} variants={fadeInUp} className="timeline-step">
              <div style={{ position: 'relative' }}>
                <div className="timeline-marker">{item.step}</div>
                {i < steps.length - 1 && <div className="timeline-line" />}
              </div>
              <div className="timeline-content" style={{ paddingTop: '0.5rem' }}>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
                  {item.icon} {item.title}
                </h4>
                <p>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA inline */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          style={{ textAlign: 'center', marginTop: 'var(--space-2xl)' }}
        >
          <Link
            href="/#cta"
            className="btn-primary"
            style={{ padding: '1rem 2.5rem', fontSize: '1.05rem' }}
            id="timeline-cta"
          >
            Agendar diagnóstico gratuito <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
