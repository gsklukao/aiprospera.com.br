'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqData = [
  {
    q: 'Como a AiProspera ajuda a aumentar as vendas?',
    a: 'Nossa IA automatiza o processo de vendas no WhatsApp: ela tira dúvidas, derruba objeções e guia o cliente até o pagamento, 24 horas por dia, sem perder leads por falta de atendimento.'
  },
  {
    q: 'Posso usar meu número atual do WhatsApp?',
    a: 'Sim, você pode conectar seu número de negócio à nossa plataforma. A IA assumirá os fluxos de vendas e recuperação de forma transparente.'
  },
  {
    q: 'Como funciona a recuperação de carrinhos e boletos?',
    a: 'A IA identifica clientes que iniciaram uma compra mas não finalizaram (carrinho, PIX gerado ou boleto) e envia mensagens automáticas inteligentes para incentivar a conclusão do pagamento.'
  },
  {
    q: 'Quais áreas do meu negócio podem ser automatizadas?',
    a: 'Principalmente o atendimento inicial, qualificação de leads, fechamento de vendas diretas e recuperação de pagamentos pendentes. Tudo o que for repetitivo e focado em conversão.'
  },
  {
    q: 'É seguro integrar com meu sistema de pagamentos?',
    a: 'Sim. Utilizamos conexões seguras e criptografadas para monitorar status de pedidos e pagamentos, garantindo a privacidade dos dados e a precisão da operação, em total conformidade com a LGPD.'
  }
];

export default function FAQ() {
  return (
    <section id="faq" style={{ padding: 'var(--space-4xl) 0' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 var(--space-xl)' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-header">
          <h2 className="section-title">Dúvidas <span className="text-gradient">Frequentes</span></h2>
          <p className="section-subtitle">Tudo o que você precisa saber para começar a vender mais com IA.</p>
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
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="faq-item" 
      style={{ background: 'var(--color-bg-glass)' }}
    >
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
    </motion.div>
  );
}
