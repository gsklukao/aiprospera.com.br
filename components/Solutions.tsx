'use client';

import { motion, Variants } from 'framer-motion';
import { MessageSquare, Bot, PhoneCall } from 'lucide-react';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const solutions = [
  { icon: <MessageSquare size={28} color="var(--color-primary)" />, title: 'Automação de WhatsApp', desc: 'Atenda clientes, qualifique leads e venda automaticamente de forma natural e humanizada no principal canal de comunicação.', boxClass: '' },
  { icon: <Bot size={28} color="var(--color-secondary-light)" />, title: 'Chatbots de Alta Conversão', desc: 'Esqueça as árvores de botões rígidas. Nossos chatbots compreendem a intenção real e mantém conversas fluídas 24h por dia.', boxClass: 'icon-box-secondary' },
  { icon: <PhoneCall size={28} color="var(--color-accent)" />, title: 'Agentes de Voz via IA', desc: 'IA que atende o telefone da sua empresa, ouve o cliente, processa a demanda e resolve o problema sem fricção.', boxClass: 'icon-box-accent' }
];

export default function Solutions() {
  return (
    <section id="solucoes" style={{ padding: 'var(--space-3xl) 0 var(--space-4xl)' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 var(--space-xl)' }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp} className="section-header">
          <h2 className="section-title">
            Sua Operação em <span className="text-gradient">Piloto Automático</span>
          </h2>
          <p className="section-subtitle">Canais de atendimento imersivos alimentados por LLMs super-especializados.</p>
        </motion.div>

        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-xl)' }}
        >
          {solutions.map((item, i) => (
            <motion.div key={i} variants={fadeInUp} className="glass-card" style={{ padding: 'var(--space-2xl)' }}>
              <div className={`icon-box ${item.boxClass}`}>
                {item.icon}
              </div>
              <h3 style={{ fontSize: '1.35rem', marginTop: 'var(--space-lg)', marginBottom: 'var(--space-sm)' }}>{item.title}</h3>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7 }}>{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
