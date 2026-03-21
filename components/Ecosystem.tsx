'use client';

import { motion, Variants } from 'framer-motion';
import { Activity, Car, Users, CheckCircle2 } from 'lucide-react';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function Ecosystem() {
  return (
    <section id="ecossistema" style={{ padding: 'var(--space-4xl) 0', position: 'relative' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 0%, rgba(0,240,255,0.02) 50%, transparent 100%)', zIndex: -1 }} />
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 var(--space-xl)' }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <div className="badge-pill badge-pill-secondary" style={{ marginBottom: 'var(--space-md)', display: 'inline-flex' }}>O ECOSSISTEMA AIPROSPERA</div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: 'var(--space-lg)' }}>
            Soluções modulares para <br />cada <span className="text-gradient">etapa do seu negócio</span>
          </h2>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)', marginTop: 'var(--space-2xl)' }}>
          <motion.div variants={fadeInUp} className="glass-card" style={{ display: 'flex', flexWrap: 'wrap', borderRadius: 'var(--radius-2xl)', overflow: 'hidden', padding: 0 }}>
            <div style={{ flex: '1 1 500px', padding: 'var(--space-3xl)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)', marginBottom: 'var(--space-lg)' }}>
                <div className="icon-box"><Activity size={24} color="var(--color-primary)" /></div>
                <h3 style={{ fontSize: '1.75rem', margin: 0 }}>IFinanças</h3>
              </div>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: 'var(--space-xl)' }}>
                Sua IA financeira. Fazemos cobranças de forma empática via WhatsApp e analisamos seu fluxo de caixa preditivamente para blindar o financeiro do seu negócio.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {['Recuperação de Crédito amigável', 'Previsibilidade de Fluxo de Caixa', 'Integração contábil automatizada'].map((f, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--color-text-muted)' }}>
                    <CheckCircle2 size={18} color="var(--color-primary)" /> {f}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ flex: '1 1 350px', background: 'var(--color-bg-darker)', minHeight: '280px', borderLeft: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', width: '180px', height: '180px', background: 'var(--color-primary)', filter: 'blur(100px)', opacity: 0.12 }} />
              <Activity size={100} color="var(--color-border)" style={{ opacity: 0.25 }} />
            </div>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: 'var(--space-xl)' }}>
            <motion.div variants={fadeInUp} className="glass-card" style={{ padding: 'var(--space-2xl)' }}>
              <div className="icon-box-secondary" style={{ width: 56, height: 56, borderRadius: 'var(--radius-lg)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 'var(--space-lg)' }}>
                <Car size={28} color="var(--color-secondary-light)" />
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: 'var(--space-sm)' }}>AiProspera Drive</h3>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7 }}>A inteligência por trás do rastreamento logístico contínuo e gestão documental de frotas através do WhatsApp.</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="glass-card" style={{ padding: 'var(--space-2xl)' }}>
              <div style={{ width: 56, height: 56, borderRadius: 'var(--radius-lg)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 'var(--space-lg)', background: 'rgba(0,180,216,0.12)', border: '1px solid rgba(0,180,216,0.15)' }}>
                <Users size={28} color="var(--color-accent)" />
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: 'var(--space-sm)' }}>AiProspera Conecta</h3>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7 }}>Match instantâneo entre prestadores de serviço qualificados e quem mais precisa deles.</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
