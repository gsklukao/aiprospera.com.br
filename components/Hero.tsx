'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Zap, ArrowRight, ChevronDown } from 'lucide-react';
import Link from 'next/link';

const heroSlides = [
  {
    badge: "A revolução da automação corporativa",
    title1: "Contrate um",
    title2: "Funcionário Digital",
    desc: "Trabalha 24h, não tira férias e reduz seus custos operacionais em até 90%. Escale seu atendimento e recupere ativos sem aumentar seu time."
  },
  {
    badge: "IFinanças - Recuperação Inteligente",
    title1: "Seu Fluxo de Caixa",
    title2: "Sempre Blindado",
    desc: "Recuperação de crédito amigável via WhatsApp que já recuperou mais de R$ 2M para nossos clientes este ano."
  },
  {
    badge: "Ecossistema AiProspera",
    title1: "Automação que gera",
    title2: "Resultado Real",
    desc: "Mais de 10.000 horas de trabalho manual recuperadas mensalmente através de nossos agentes de IA super-especializados."
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section style={{ position: 'relative', minHeight: '92vh', display: 'flex', alignItems: 'center', overflow: 'hidden', paddingBottom: 'var(--space-4xl)' }}>
      <div className="hero-grid-bg" />

      <div style={{
        width: '100%',
        maxWidth: '1000px',
        margin: '0 auto',
        padding: 'var(--space-2xl) var(--space-xl)',
        alignItems: 'center',
        position: 'relative',
        zIndex: 1,
      }}>
        <div style={{ textAlign: 'center' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="badge-pill" style={{ marginBottom: 'var(--space-lg)', display: 'inline-flex' }}>
                <Zap size={14} /> <span>{heroSlides[currentSlide].badge}</span>
              </div>

              <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: 1.05, marginBottom: 'var(--space-lg)' }}>
                {heroSlides[currentSlide].title1} <br />
                <span className="text-gradient">{heroSlides[currentSlide].title2}</span>
              </h1>

              <p style={{ fontSize: 'clamp(1rem, 1.8vw, 1.25rem)', color: 'var(--color-text-muted)', maxWidth: '750px', margin: '0 auto', lineHeight: 1.75 }}>
                {heroSlides[currentSlide].desc}
              </p>
            </motion.div>
          </AnimatePresence>

          <div style={{ display: 'flex', gap: '0.6rem', justifyContent: 'center', margin: 'var(--space-2xl) 0 var(--space-lg)' }}>
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                style={{
                  width: i === currentSlide ? '28px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  background: i === currentSlide ? 'var(--color-primary)' : 'var(--color-slider-dot)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
                  border: 'none',
                  padding: 0,
                  boxShadow: i === currentSlide ? '0 0 12px rgba(0,240,255,0.4)' : 'none',
                }}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <Link href="/#solucoes" className="btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
              Ver demonstração ao vivo <ArrowRight size={18} />
            </Link>
            <Link href="/#planos" className="btn-secondary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
              Ver Planos
            </Link>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.25rem' }}
      >
        <span style={{ fontSize: '0.7rem', color: 'var(--color-text-dim)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <ChevronDown size={20} color="var(--color-text-dim)" />
        </motion.div>
      </motion.div>
    </section>
  );
}
