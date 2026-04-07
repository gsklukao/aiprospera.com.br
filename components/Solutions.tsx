'use client';

import { motion, Variants } from 'framer-motion';
import {
  MessageSquare,
  DollarSign,
  UserCheck,
  HeartHandshake,
  CheckCircle2,
} from 'lucide-react';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const useCases = [
  {
    icon: <MessageSquare size={26} color="var(--color-primary)" />,
    boxClass: '',
    title: 'Atendimento ao cliente multicanal',
    bullets: [
      'Responde dúvidas frequentes em segundos',
      'Atualiza status de pedidos automaticamente',
      'Redireciona casos complexos para humanos',
    ],
  },
  {
    icon: <DollarSign size={26} color="var(--color-secondary-light)" />,
    boxClass: 'icon-box-secondary',
    title: 'Cobrança e recuperação de crédito',
    bullets: [
      'Lembra vencimentos e boletos atrasados',
      'Negocia condições de pagamento conforme suas regras',
      'Acompanha a jornada até a regularização',
    ],
  },
  {
    icon: <UserCheck size={26} color="var(--color-accent)" />,
    boxClass: 'icon-box-accent',
    title: 'Qualificação de leads e pré-vendas',
    bullets: [
      'Faz perguntas-chave para qualificar leads automaticamente',
      'Agenda contatos com o time comercial',
      'Nutre interessados com as informações certas',
    ],
  },
  {
    icon: <HeartHandshake size={26} color="var(--color-primary)" />,
    boxClass: '',
    title: 'Pós-venda e fidelização',
    bullets: [
      'Pesquisa de satisfação automatizada',
      'Ofertas de upsell e cross-sell inteligentes',
      'Reativação de clientes inativos',
    ],
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
          <h2 className="section-title">
            Onde os Funcionários Digitais{' '}
            <span className="text-gradient">mais geram resultado</span>
          </h2>
          <p className="section-subtitle">
            Cada agente é treinado para dominar um fluxo específico do seu negócio — e executá-lo
            em escala, sem pausa.
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
          {useCases.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="glass-card"
              style={{ padding: 'var(--space-2xl)' }}
            >
              <div className={`icon-box ${item.boxClass}`}>{item.icon}</div>
              <h3
                style={{
                  fontSize: '1.2rem',
                  marginTop: 'var(--space-lg)',
                  marginBottom: 'var(--space-md)',
                }}
              >
                {item.title}
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {item.bullets.map((b, j) => (
                  <li
                    key={j}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.55rem',
                      color: 'var(--color-text-muted)',
                      fontSize: '0.95rem',
                      lineHeight: 1.5,
                    }}
                  >
                    <CheckCircle2
                      size={15}
                      color="var(--color-primary)"
                      style={{ marginTop: '0.2rem', flexShrink: 0 }}
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
