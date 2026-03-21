'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

function useCountUp(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const hasStarted = useRef(false);

  useEffect(() => {
    if (!isInView) return;
    if (hasStarted.current) return;
    hasStarted.current = true;

    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration, isInView]);

  return { count, ref };
}

const stats = [
  { value: 500, suffix: '+', label: 'Empresas Atendidas' },
  { value: 98, suffix: '%', label: 'Taxa de Satisfação' },
  { value: 2, suffix: 'M+', label: 'R$ Recuperados/mês' },
  { value: 10, suffix: 'k+', label: 'Horas Recuperadas/Mês' },
];

export default function Stats() {
  return (
    <section style={{ padding: 'var(--space-2xl) 0 var(--space-3xl)' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 var(--space-xl)' }}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            borderRadius: 'var(--radius-2xl)',
            border: '1px solid var(--color-border)',
            background: 'var(--color-bg-glass)',
            backdropFilter: 'blur(16px)',
            overflow: 'hidden',
          }}
        >
          {stats.map((stat, i) => (
            <StatItem key={i} {...stat} isLast={i === stats.length - 1} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function StatItem({ value, suffix, label, isLast }: { value: number; suffix: string; label: string; isLast: boolean }) {
  const { count, ref } = useCountUp(value);
  return (
    <div
      ref={ref}
      className="stat-counter"
      style={{ borderRight: !isLast ? '1px solid var(--color-border)' : 'none', padding: 'var(--space-2xl) var(--space-lg)' }}
    >
      <div className="stat-number">
        <span className="text-gradient-accent">{count}{suffix}</span>
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
}
