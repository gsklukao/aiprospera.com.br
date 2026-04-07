'use client';

import { motion, Variants } from 'framer-motion';
import { Power, Settings, DollarSign, Rocket } from 'lucide-react';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const steps = [
  { step: 1, icon: <Power size={20} />, title: 'Conexão em Segundos', desc: 'Conectamos seu WhatsApp à nossa plataforma de inteligência de vendas sem precisar de código.' },
  { step: 2, icon: <Settings size={20} />, title: 'Configuração Estratégica', desc: 'Definimos seus fluxos de conversão, roteiros de fechamento e regras de recuperação de vendas.' },
  { step: 3, icon: <DollarSign size={20} />, title: 'Vendas no Automático', desc: 'A IA assume as conversas, converte leads e recupera vendas abandonadas enquanto você monitora o lucro.' }
];

export default function Timeline() {
  return (
    <section id="como-funciona" style={{ padding: 'var(--space-4xl) 0' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 var(--space-xl)' }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="section-header">
          <div className="badge-pill" style={{ marginBottom: 'var(--space-md)', display: 'inline-flex' }}>
            <Rocket size={14} /> JORNADA RÁPIDA
          </div>
          <h2 className="section-title">Deixe a operação com a gente em <span className="text-gradient">3 passos</span></h2>
          <p className="section-subtitle">Um processo acelerado para você começar a vender no automático o quanto antes.</p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} style={{ maxWidth: '700px', margin: '0 auto' }}>
          {steps.map((item, i) => (
            <motion.div key={i} variants={fadeInUp} className="timeline-step">
              <div style={{ position: 'relative' }}>
                <div className="timeline-marker">{item.step}</div>
                {i < steps.length - 1 && <div className="timeline-line" />}
              </div>
              <div className="timeline-content" style={{ paddingTop: '0.4rem' }}>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
                  <span style={{ color: 'var(--color-primary)' }}>{item.icon}</span>
                  {item.title}
                </h4>
                <p>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
