'use client';

import { motion, Variants } from 'framer-motion';
import { Search, Cpu, Rocket, BarChart3 } from 'lucide-react';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const steps = [
  { step: 1, icon: <Search size={20} />, title: 'Análise Personalizada', desc: 'Mapeamos seus processos, identificamos gargalos e desenhamos uma solução de IA sob medida para o seu negócio.' },
  { step: 2, icon: <Cpu size={20} />, title: 'Integração da IA', desc: 'Nosso time configura e treina os agentes de IA com os dados e fluxos específicos da sua operação.' },
  { step: 3, icon: <Rocket size={20} />, title: 'Ativação Automática', desc: 'Os funcionários digitais entram em operação, atendendo clientes e executando tarefas automaticamente.' },
  { step: 4, icon: <BarChart3 size={20} />, title: 'Resultados Mensuráveis', desc: 'Acompanhe métricas em tempo real e veja o impacto direto na receita, produtividade e satisfação.' }
];

export default function Timeline() {
  return (
    <section id="como-funciona" style={{ padding: 'var(--space-4xl) 0' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 var(--space-xl)' }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="section-header">
          <div className="badge-pill" style={{ marginBottom: 'var(--space-md)', display: 'inline-flex' }}>
            <Rocket size={14} /> COMO FUNCIONA
          </div>
          <h2 className="section-title">Da análise ao resultado em <span className="text-gradient">4 passos</span></h2>
          <p className="section-subtitle">Um processo simples e transparente para transformar suas operações.</p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} style={{ maxWidth: '700px', margin: '0 auto' }}>
          {steps.map((item, i) => (
            <motion.div key={i} variants={fadeInUp} className="timeline-step">
              <div style={{ position: 'relative' }}>
                <div className="timeline-marker">{item.step}</div>
                {i < steps.length - 1 && <div className="timeline-line" />}
              </div>
              <div className="timeline-content" style={{ paddingTop: '0.5rem' }}>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>{item.icon} {item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
