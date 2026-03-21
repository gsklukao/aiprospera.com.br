'use client';

import { useParams } from 'next/navigation';
import Hero from '@/components/Hero';
import CTA from '@/components/CTA';
import { motion } from 'framer-motion';
import { CheckCircle2, TrendingUp, Users, Zap } from 'lucide-react';

const segmentData: Record<string, any> = {
  'imobiliarias': {
    title: 'IA para Imobiliárias',
    subtitle: 'Automatize a qualificação de leads e o agendamento de visitas no WhatsApp.',
    benefits: ['Atendimento 24/7 para novos leads de portais', 'Qualificação automática por perfil de crédito', 'Agendamento sincronizado com Google Agenda'],
    icon: <Users size={40} color="var(--color-primary)" />
  },
  'clinicas': {
    title: 'IA para Clínicas e Consultórios',
    subtitle: 'Reduza faltas com lembretes inteligentes e automatize o agendamento de consultas.',
    benefits: ['Confirmação automática de consultas via WA', 'Triagem inicial de sintomas e convênios', 'Recuperação de pacientes inativos'],
    icon: <CheckCircle2 size={40} color="var(--color-secondary-light)" />
  },
  'ecommerce': {
    title: 'IA para E-commerce',
    subtitle: 'Recupere carrinhos abandonados e tire dúvidas de produtos em tempo real.',
    benefits: ['Recuperação de checkout via WhatsApp', 'Atendimento pós-venda automatizado', 'Rastreio de pedidos integrado'],
    icon: <TrendingUp size={40} color="var(--color-accent)" />
  }
};

export default function SegmentPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const data = segmentData[slug] || {
    title: `Solução de IA para seu Negócio`,
    subtitle: 'Personalizamos nossos agentes para o seu nicho específico.',
    benefits: ['Eficiência operacional 90% maior', 'Redução drástica de custos fixos', 'Escalabilidade sem novas contratações'],
    icon: <Zap size={40} color="var(--color-primary)" />
  };

  return (
    <main>
      <section style={{ padding: 'var(--space-4xl) 0', textAlign: 'center', position: 'relative' }}>
        <div className="hero-grid-bg" />
        <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div style={{ marginBottom: 'var(--space-lg)', display: 'inline-block' }}>{data.icon}</div>
            <h1 className="section-title">
              {data.title.split('IA')[0]} <span className="text-gradient">IA {data.title.split('IA')[1]}</span>
            </h1>
            <p className="section-subtitle">{data.subtitle}</p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-xl)', marginTop: 'var(--space-3xl)' }}>
            {data.benefits.map((benefit: string, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass-card"
                style={{ padding: 'var(--space-xl)', textAlign: 'left', display: 'flex', gap: 'var(--space-md)' }}
              >
                <CheckCircle2 color="var(--color-primary)" style={{ flexShrink: 0 }} />
                <span style={{ fontSize: '1.05rem', color: 'var(--color-text-main)' }}>{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </main>
  );
}
