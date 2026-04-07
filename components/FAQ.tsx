'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqData = [
  {
    q: 'Em quanto tempo consigo colocar um Funcionário Digital em operação?',
    a: 'Depende da complexidade dos seus processos e integrações, mas em muitos casos conseguimos colocar o primeiro agente operando em poucas semanas. Na etapa de diagnóstico estimamos o prazo exato para o seu caso.',
  },
  {
    q: 'Ele substitui totalmente minha equipe?',
    a: 'Não é esse o objetivo. O Funcionário Digital assume o volume repetitivo e previsível, liberando seu time para lidar com casos complexos e relacionamento estratégico — onde o humano faz a diferença.',
  },
  {
    q: 'Preciso ter equipe técnica para usar a AiProspera?',
    a: 'Não. Cuidamos de toda a parte técnica e guiamos sua equipe em tudo que for necessário para o dia a dia. Você recebe um acompanhamento contínuo sem precisar escrever uma linha de código.',
  },
  {
    q: 'Funciona com o meu sistema atual?',
    a: 'Trabalhamos para integrar com as principais ferramentas de CRM, ERP, atendimento e cobrança. Na etapa de diagnóstico avaliamos o que você usa hoje e desenhamos a melhor forma de conectar.',
  },
  {
    q: 'É seguro e está em conformidade com a LGPD?',
    a: 'Sim. Seguimos boas práticas de segurança e privacidade de dados, utilizamos criptografia no tráfego de informações e estruturamos o uso da IA considerando a LGPD e demais normas aplicáveis.',
  },
  {
    q: 'Como a IA da AiProspera se diferencia de chatbots comuns?',
    a: 'Nossos agentes são alimentados por LLMs especializados que compreendem contexto, intenção e sentimento. Ao invés de menus rígidos de botões, mantemos conversas naturais e humanizadas que realmente resolvem os problemas do cliente.',
  },
];

export default function FAQ() {
  return (
    <section id="faq" style={{ padding: 'var(--space-4xl) 0' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 var(--space-xl)' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">
            Perguntas <span className="text-gradient">Frequentes</span>
          </h2>
          <p className="section-subtitle">
            Tire suas dúvidas sobre como os Funcionários Digitais funcionam na prática.
          </p>
        </motion.div>

        <div
          style={{
            maxWidth: '750px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-md)',
          }}
        >
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
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
      className="faq-item"
      style={{ background: 'var(--color-bg-glass)' }}
    >
      <button
        className="faq-trigger"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        id={`faq-item-${index}`}
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
