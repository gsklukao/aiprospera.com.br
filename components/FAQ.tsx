'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqData = [
  {
    q: "Como a IA da AiProspera se diferencia de chatbots comuns?",
    a: "Nossos agentes são alimentados por LLMs especializados que compreendem contexto, intenção e sentimento. Ao invés de menus rígidos, mantemos conversas naturais e humanizadas que realmente resolvem problemas."
  },
  {
    q: "Quanto tempo leva para integrar as soluções ao meu negócio?",
    a: "A integração básica via WhatsApp pode ser feita em 48h. Soluções mais complexas levam de 1 a 2 semanas, com acompanhamento completo do nosso time."
  },
  {
    q: "É necessário conhecimento técnico para usar a plataforma?",
    a: "Não. Toda a configuração é feita pelo nosso time. Você recebe um painel intuitivo para acompanhar métricas e resultados sem precisar escrever uma linha de código."
  },
  {
    q: "Os dados dos meus clientes estão seguros?",
    a: "Sim. Utilizamos criptografia de ponta a ponta, servidores seguros com certificações de segurança, e estamos em conformidade com a LGPD."
  }
];

export default function FAQ() {
  return (
    <section id="faq" style={{ padding: 'var(--space-4xl) 0' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 var(--space-xl)' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-header">
          <h2 className="section-title">Perguntas <span className="text-gradient">Frequentes</span></h2>
          <p className="section-subtitle">Tire suas dúvidas sobre nossas soluções de IA.</p>
        </motion.div>

        <div style={{ maxWidth: '750px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
          {faqData.map((item, i) => (
            <FaqItem key={i} q={item.q} a={item.a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="faq-item" style={{ background: 'var(--color-bg-glass)' }}>
      <button
        className="faq-trigger"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>{q}</span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown size={20} color="var(--color-text-muted)" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <div className="faq-content">{a}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
